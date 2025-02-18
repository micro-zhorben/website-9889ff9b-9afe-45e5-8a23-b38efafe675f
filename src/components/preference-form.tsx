import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";

interface PreferenceFormProps {
  onSubmit: (preferences: {
    strength: number;
    bitterness: number;
    sweetness: number;
  }) => void;
}

export function PreferenceForm({ onSubmit }: PreferenceFormProps) {
  const [preferences, setPreferences] = useState({
    strength: 3,
    bitterness: 3,
    sweetness: 3,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(preferences);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card className="w-full max-w-xl">
        <CardHeader>
          <CardTitle>Coffee Preferences</CardTitle>
          <CardDescription>
            Tell us your taste preferences to get personalized coffee recommendations
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Typography.P>Strength</Typography.P>
            <Slider
              value={[preferences.strength]}
              onValueChange={([value]) =>
                setPreferences((prev) => ({ ...prev, strength: value }))
              }
              max={5}
              step={1}
              className="py-4"
            />
          </div>
          
          <div className="space-y-2">
            <Typography.P>Bitterness</Typography.P>
            <Slider
              value={[preferences.bitterness]}
              onValueChange={([value]) =>
                setPreferences((prev) => ({ ...prev, bitterness: value }))
              }
              max={5}
              step={1}
              className="py-4"
            />
          </div>
          
          <div className="space-y-2">
            <Typography.P>Sweetness</Typography.P>
            <Slider
              value={[preferences.sweetness]}
              onValueChange={([value]) =>
                setPreferences((prev) => ({ ...prev, sweetness: value }))
              }
              max={5}
              step={1}
              className="py-4"
            />
          </div>

          <Button type="submit" className="w-full">
            Get Recommendations
          </Button>
        </CardContent>
      </Card>
    </form>
  );
}