import React from "react";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

export function getRecommendationColor(recommendation: string) {
  switch (recommendation.toLowerCase()) {
    case "buy":
      return "bg-green-500 text-white";
    case "sell":
      return "bg-red-500 text-white";
    case "hold":
      return "bg-yellow-500 text-white";
    default:
      return "bg-muted text-muted-foreground";
  }
}

export function getRecommendationIcon(recommendation: string): React.ReactElement | null {
  switch (recommendation.toLowerCase()) {
    case "buy":
      return React.createElement(TrendingUp, { className: "h-4 w-4" });
    case "sell":
      return React.createElement(TrendingDown, { className: "h-4 w-4" });
    case "hold":
      return React.createElement(Minus, { className: "h-4 w-4" });
    default:
      return null;
  }
}

export function formatPercentage(value: number) {
  const percentage = (value * 100).toFixed(2);
  return `${value >= 0 ? "+" : ""}${percentage}%`;
}