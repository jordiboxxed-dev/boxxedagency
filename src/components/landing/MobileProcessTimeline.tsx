import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TimelineItem {
  id: number;
  title: string;
  cardTitle: string;
  content: string;
  icon: React.ElementType;
  deliverable: string;
}

interface MobileProcessTimelineProps {
  timelineData: TimelineItem[];
}

const MobileProcessTimeline = ({ timelineData }: MobileProcessTimelineProps) => {
  return (
    <div className="space-y-8">
      {timelineData.map((item) => {
        const Icon = item.icon;
        return (
          <Card key={item.id} className="bg-card/80 backdrop-blur-lg border">
            <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{item.content}</p>
              <p className="text-sm font-semibold">
                <span className="font-bold text-neon-purple">Resultado:</span> {item.deliverable}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default MobileProcessTimeline;