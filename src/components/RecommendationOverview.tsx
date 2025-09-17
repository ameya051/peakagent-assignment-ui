import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bot } from "lucide-react";
import { getRecommendationColor, getRecommendationIcon, formatPercentage } from "@/lib/recommendationUtils";

interface RecommendationData {
  change_percent: number;
  created_at: string;
  id: number;
  model_name: string;
  rationale: string;
  recommendation: "buy" | "sell" | "hold";
  symbol: string;
  trade_date: string;
  window_days: number;
}

interface RecommendationOverviewProps {
  data: RecommendationData;
}

export function RecommendationOverview({ data }: RecommendationOverviewProps) {
  return (
    <Card className="relative overflow-hidden lg:col-span-2">
      <div aria-hidden className="pointer-events-none absolute -inset-1 -z-10 rounded-xl bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-3xl font-bold tracking-tight">
              {data.symbol}
            </CardTitle>
            <CardDescription>Latest Trading Recommendation</CardDescription>
          </div>
          <Badge className={`${getRecommendationColor(data.recommendation)} gap-1 text-sm px-3 py-1`}>
            {getRecommendationIcon(data.recommendation)}
            {data.recommendation.toUpperCase()}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-wrap items-end gap-4">
          <div className="text-4xl font-bold leading-none">
            <span
              className={
                data.change_percent >= 0 ? "text-green-600" : "text-red-600"
              }
            >
              {formatPercentage(data.change_percent)}
            </span>
          </div>
          <div className="text-sm text-muted-foreground">
            Based on a {data.window_days}-day window
          </div>
        </div>

        {/* Quick stats row */}
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-lg border bg-card p-4">
            <div className="text-xs text-muted-foreground">Model</div>
            <div className="mt-1 font-medium truncate">{data.model_name}</div>
          </div>
          <div className="rounded-lg border bg-card p-4">
            <div className="text-xs text-muted-foreground">Window</div>
            <div className="mt-1 font-medium">{data.window_days} days</div>
          </div>
          <div className="rounded-lg border bg-card p-4">
            <div className="text-xs text-muted-foreground">Trade Date</div>
            <div className="mt-1 font-medium">{data.trade_date}</div>
          </div>
        </div>

        <div className="rounded-lg border bg-muted/40 p-5">
          <h4 className="font-semibold mb-2 flex items-center gap-2">
            <Bot className="h-4 w-4" /> AI Analysis
          </h4>
          <p className="text-sm leading-relaxed text-pretty">
            {data.rationale}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}