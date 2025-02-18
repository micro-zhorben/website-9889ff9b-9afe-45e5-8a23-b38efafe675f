import { useState } from "react";
import { Typography } from "@/components/ui/typography";
import { ModeToggle } from "@/components/mode-toggle";
import { PreferenceForm } from "@/components/preference-form";
import { RecommendationSection } from "@/components/recommendation-section";
import { CoffeeCard } from "@/components/coffee-card";

const mockCoffees = [
  {
    name: "Ethiopian Yirgacheffe",
    description: "Floral and bright with notes of bergamot and lemon.",
    strength: 3,
    roastLevel: "Light",
  },
  {
    name: "Colombian Supremo",
    description: "Sweet and balanced with caramel and nutty notes.",
    strength: 4,
    roastLevel: "Medium",
  },
  {
    name: "Sumatra Mandheling",
    description: "Full-bodied with earthy and spicy undertones.",
    strength: 5,
    roastLevel: "Dark",
  },
];

export function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<{
    name: string;
    description: string;
    preparation: string[];
  } | null>(null);

  const handlePreferenceSubmit = (preferences: {
    strength: number;
    bitterness: number;
    sweetness: number;
  }) => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setRecommendation({
        name: "Perfect Match: Ethiopian Yirgacheffe",
        description: "Based on your preferences, we think you'll love this light roasted Ethiopian Yirgacheffe. It offers a delicate balance of floral notes with a gentle sweetness that matches your taste profile.",
        preparation: [
          "Grind beans just before brewing for optimal freshness",
          "Use water at 200°F (93°C)",
          "Brew using pour-over method for 3 minutes",
          "Ratio: 1:16 coffee to water",
        ],
      });
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background px-4 pb-12 pt-6">
      <header className="mx-auto mb-12 flex max-w-7xl items-center justify-between">
        <div>
          <Typography.H1 className="mb-2">Coffee Recommender</Typography.H1>
          <Typography.Lead>Find your perfect brew with AI</Typography.Lead>
        </div>
        <ModeToggle />
      </header>

      <main className="mx-auto grid max-w-7xl gap-12">
        <section className="grid place-items-center">
          <PreferenceForm onSubmit={handlePreferenceSubmit} />
        </section>

        <section className="grid place-items-center">
          <RecommendationSection
            isLoading={isLoading}
            recommendation={recommendation}
            onTryAgain={() => setRecommendation(null)}
          />
        </section>

        <section className="space-y-6">
          <div className="text-center">
            <Typography.H2>Popular Selections</Typography.H2>
            <Typography.Muted>
              Discover our community's favorite coffee picks
            </Typography.Muted>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mockCoffees.map((coffee) => (
              <CoffeeCard
                key={coffee.name}
                {...coffee}
                onSelect={() => {
                  setRecommendation({
                    name: `Selected: ${coffee.name}`,
                    description: coffee.description,
                    preparation: [
                      "Grind beans just before brewing",
                      "Use filtered water at optimal temperature",
                      "Follow recommended brewing method",
                      "Adjust to taste",
                    ],
                  });
                }}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}