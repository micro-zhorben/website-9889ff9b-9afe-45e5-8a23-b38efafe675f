import { Coffee } from "lucide-react";
import { Typography } from "@/components/ui/typography";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface RecommendationSectionProps {
  isLoading?: boolean;
  recommendation?: {
    name: string;
    description: string;
    preparation: string[];
  };
  onTryAgain?: () => void;
}

export function RecommendationSection({
  isLoading,
  recommendation,
  onTryAgain,
}: RecommendationSectionProps) {
  if (isLoading) {
    return (
      <Card className="w-full max-w-xl">
        <CardHeader className="space-y-2">
          <div className="flex items-center gap-2">
            <Coffee className="animate-pulse text-primary" />
            <Typography.H2>Brewing your recommendation...</Typography.H2>
          </div>
        </CardHeader>
        <CardContent>
          <Typography.P className="text-muted-foreground">
            Our AI is carefully analyzing your preferences to find the perfect coffee match.
          </Typography.P>
        </CardContent>
      </Card>
    );
  }

  if (!recommendation) return null;

  return (
    <Card className="w-full max-w-xl">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Coffee className="text-primary" />
          <Typography.H2>{recommendation.name}</Typography.H2>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <Typography.H3 className="mb-2">Why this coffee?</Typography.H3>
          <Typography.P className="text-muted-foreground">
            {recommendation.description}
          </Typography.P>
        </div>

        <div>
          <Typography.H3 className="mb-2">Preparation Tips</Typography.H3>
          <Typography.List>
            {recommendation.preparation.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </Typography.List>
        </div>

        <Button
          onClick={onTryAgain}
          variant="outline"
          className="w-full text-foreground"
        >
          Get Another Recommendation
        </Button>
      </CardContent>
    </Card>
  );
}