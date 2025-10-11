"use client";
import { useState, useEffect, useRef } from "react";
import { Package, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";

interface TimelineItem {
  id: number;
  title: string;
  cardTitle: string;
  date: string;
  content: string;
  category: string;
  icon: React.ElementType;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  progress: number;
  deliverable: string;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
}

export default function RadialOrbitalTimeline({
  timelineData,
}: RadialOrbitalTimelineProps) {
  const isMobile = useIsMobile();
  const radius = isMobile ? 140 : 300;
  const orbitSize = radius * 2;

  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>(
    {}
  );
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [centerOffset, setCenterOffset] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [spotlightOpacity, setSpotlightOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setSpotlightOpacity(1);
  };

  const handleMouseLeave = () => {
    setSpotlightOpacity(0);
  };

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        if (parseInt(key) !== id) {
          newState[parseInt(key)] = false;
        }
      });

      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);

        const relatedItems = getRelatedItems(id);
        const newPulseEffect: Record<number, boolean> = {};
        relatedItems.forEach((relId) => {
          newPulseEffect[relId] = true;
        });
        setPulseEffect(newPulseEffect);

        centerViewOnNode(id);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }

      return newState;
    });
  };

  useEffect(() => {
    let rotationTimer: NodeJS.Timeout;

    if (autoRotate) {
      rotationTimer = setInterval(() => {
        setRotationAngle((prev) => {
          const newAngle = (prev + 0.3) % 360;
          return Number(newAngle.toFixed(3));
        });
      }, 50);
    }

    return () => {
      if (rotationTimer) {
        clearInterval(rotationTimer);
      }
    };
  }, [autoRotate]);

  const centerViewOnNode = (nodeId: number) => {
    if (!nodeRefs.current[nodeId]) return;

    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
    const totalNodes = timelineData.length;
    const targetAngle = (nodeIndex / totalNodes) * 360;

    setRotationAngle(270 - targetAngle);
  };

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radian = (angle * Math.PI) / 180;

    const x = radius * Math.cos(radian) + centerOffset.x;
    const y = radius * Math.sin(radian) + centerOffset.y;

    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(
      0.4,
      Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2))
    );

    return { x, y, angle, zIndex, opacity };
  };

  const getRelatedItems = (itemId: number): number[] => {
    const currentItem = timelineData.find((item) => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  };

  const isRelatedToActive = (itemId: number): boolean => {
    if (!activeNodeId) return false;
    const relatedItems = getRelatedItems(activeNodeId);
    return relatedItems.includes(itemId);
  };

  const getStatusStyles = (status: TimelineItem["status"]): string => {
    switch (status) {
      case "completed":
        return "text-primary-foreground bg-primary border-primary-foreground";
      case "in-progress":
        return "text-secondary-foreground bg-secondary border-secondary-foreground";
      case "pending":
        return "text-muted-foreground bg-muted border-muted-foreground";
      default:
        return "text-muted-foreground bg-muted border-muted-foreground";
    }
  };

  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center bg-deep-black overflow-hidden"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
        <div
          className="absolute"
          ref={orbitRef}
          style={{
            width: `${orbitSize}px`,
            height: `${orbitSize}px`,
            transform: `translate(${centerOffset.x}px, ${centerOffset.y}px)`,
          }}
        >
          <div className="absolute w-16 h-16 md:w-20 md:h-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-brand-lime to-neon-green animate-pulse flex items-center justify-center z-10 transition-transform duration-300 hover:scale-110">
            <div className="absolute w-20 h-20 md:w-24 md:h-24 rounded-full border border-foreground/20 animate-ping opacity-70"></div>
            <div
              className="absolute w-24 h-24 md:w-28 md:h-28 rounded-full border border-foreground/10 animate-ping opacity-50"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-foreground/80 backdrop-blur-md"></div>
          </div>

          <div className="absolute w-full h-full rounded-full border border-foreground/10"></div>

          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];
            const Icon = item.icon;
            const nodeSize = isMobile ? 40 : 56;
            const nodeOffset = nodeSize / 2;

            const nodeStyle = {
              transform: `translate(calc(${radius}px + ${position.x}px - ${nodeOffset}px), calc(${radius}px + ${position.y}px - ${nodeOffset}px))`,
              zIndex: isExpanded ? 200 : position.zIndex,
              opacity: isExpanded ? 1 : position.opacity,
            };

            return (
              <div
                key={item.id}
                ref={(el) => (nodeRefs.current[item.id] = el)}
                className="absolute transition-all duration-700 cursor-pointer"
                style={nodeStyle}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleItem(item.id);
                }}
              >
                <div
                  className={`absolute rounded-full -inset-1 ${
                    isPulsing ? "animate-pulse duration-1000" : ""
                  }`}
                  style={{
                    background: `radial-gradient(circle, hsla(var(--foreground), 0.2) 0%, hsla(var(--foreground), 0) 70%)`,
                    width: `${item.progress * 0.5 + nodeSize}px`,
                    height: `${item.progress * 0.5 + nodeSize}px`,
                    left: `-${(item.progress * 0.5 + nodeSize - nodeSize) / 2}px`,
                    top: `-${(item.progress * 0.5 + nodeSize - nodeSize) / 2}px`,
                  }}
                ></div>

                <div
                  className={`
                  w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center
                  ${
                    isExpanded
                      ? "bg-foreground text-background"
                      : isRelated
                      ? "bg-foreground/50 text-background"
                      : "bg-background text-foreground"
                  }
                  border-2 
                  ${
                    isExpanded
                      ? "border-foreground shadow-lg shadow-foreground/30"
                      : isRelated
                      ? "border-foreground animate-pulse"
                      : "border-foreground/40"
                  }
                  transition-all duration-300 transform
                  ${isExpanded ? "scale-125 md:scale-150" : ""}
                `}
                >
                  <Icon size={isMobile ? 16 : 20} />
                </div>

                <div
                  className={`
                  absolute top-14 md:top-20 left-1/2 -translate-x-1/2 whitespace-nowrap
                  text-xs md:text-sm font-semibold tracking-wider
                  transition-all duration-300
                  ${isExpanded ? "text-foreground scale-110 md:scale-125" : "text-foreground/70"}
                `}
                >
                  {item.title}
                </div>

                {isExpanded && (
                  <div className="absolute top-24 md:top-36 left-1/2 -translate-x-1/2 w-72 md:w-80">
                    <div className="absolute -top-6 md:-top-8 left-1/2 -translate-x-1/2 w-px h-6 md:h-8 bg-foreground/50"></div>
                    <Card
                      onMouseMove={handleMouseMove}
                      onMouseLeave={handleMouseLeave}
                      className="w-full bg-card/90 backdrop-blur-lg border-foreground/30 shadow-xl shadow-foreground/10 overflow-hidden relative transition-all duration-300"
                    >
                      <div
                        className="pointer-events-none absolute -inset-px rounded-lg transition-opacity duration-300"
                        style={{
                          opacity: spotlightOpacity,
                          background: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, hsla(var(--brand-lime), 0.15), transparent 80%)`,
                        }}
                      />
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-center">
                          <Badge
                            className={`px-2 text-xs ${getStatusStyles(
                              item.status
                            )}`}
                          >
                            {item.cardTitle.toUpperCase()}
                          </Badge>
                          <span className="text-xs font-mono text-muted-foreground">
                            {item.date}
                          </span>
                        </div>
                        <CardTitle className="text-base mt-2">
                          {item.cardTitle}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm text-card-foreground/80">
                        <p>{item.content}</p>

                        <div className="mt-4 pt-3 border-t border-border/10">
                          <div className="flex justify-between items-center text-sm mb-1">
                            <span className="flex items-center">
                              <TrendingUp size={12} className="mr-1" />
                              Progreso del Proyecto
                            </span>
                            <span className="font-mono">{item.progress}%</span>
                          </div>
                          <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-brand-lime to-neon-green"
                              style={{ width: `${item.progress}%` }}
                            ></div>
                          </div>
                        </div>

                        {item.deliverable && (
                          <div className="mt-4 pt-3 border-t border-border/10">
                            <div className="flex items-center mb-2">
                              <Package
                                size={12}
                                className="text-muted-foreground mr-1"
                              />
                              <h4 className="text-sm uppercase tracking-wider font-medium text-muted-foreground">
                                Resultado Clave
                              </h4>
                            </div>
                            <p className="text-sm font-medium">
                              {item.deliverable}
                            </p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}