import { Coffee } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";

interface CoffeeCardProps {
  name: string;
  description: string;
  strength: number;
  roastLevel: string;
  onSelect?: () => void;
}

export function CoffeeCard({
  name,
  description,
  strength,
  roastLevel,
  onSelect,
}: CoffeeCardProps) {
  return (
    <Card className="group relative overflow-hidden transition-all hover:shadow-lg">
      <CardHeader className="space-y-2">
        <div className="flex items-start justify-between">
          <CardTitle className="line-clamp-1">{name}</CardTitle>
          <Coffee className="text-primary" />
        </div>
        <div className="flex gap-2">
          <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">
            Strength: {strength}/5
          </span>
          <span className="inline-flex items-center rounded-md bg-secondary/10 px-2 py-1 text-xs font-medium text-secondary ring-1 ring-inset ring-secondary/20">
            {roastLevel} Roast
          </span>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <Typography.P className="line-clamp-2 text-muted-foreground">
          {description}
        </Typography.P>
        <Button
          onClick={onSelect}
          className="w-full"
          variant="default"
        >
          Select This Coffee
        </Button>
      </CardContent>
    </Card>
  );
}