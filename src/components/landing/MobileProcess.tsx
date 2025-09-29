import { Meteors } from "@/components/ui/meteors";
import { Search, DraftingCompass, Code, TestTube, Rocket, LifeBuoy } from "lucide-react";

interface TimelineItem {
  id: number;
  title: string;
  content: string;
  icon: React.ElementType;
  deliverable: string;
}

interface MobileProcessProps {
  timelineData: TimelineItem[];
}

const MobileProcess = ({ timelineData }: MobileProcessProps) => {
  return (
    <div className="grid grid-cols-1 gap-12">
      {timelineData.map((item) => {
        const Icon = item.icon;
        return (
          <div key={item.id} className="w-full relative max-w-sm mx-auto">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-electric-blue to-neon-purple transform scale-[0.80] rounded-full blur-3xl" />
            <div className="relative shadow-xl bg-card border border-border/50 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
              <div className="h-10 w-10 rounded-full border flex items-center justify-center mb-4 border-border bg-background">
                <Icon className="h-5 w-5 text-foreground" />
              </div>
              <h3 className="font-bold text-xl text-foreground mb-2 relative z-50">
                {item.title}
              </h3>
              <p className="font-normal text-base text-muted-foreground mb-4 relative z-50">
                {item.content}
              </p>
              <p className="font-semibold text-sm text-foreground relative z-50">
                <span className="font-bold text-neon-purple">Resultado:</span> {item.deliverable}
              </p>
              <Meteors number={20} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MobileProcess;