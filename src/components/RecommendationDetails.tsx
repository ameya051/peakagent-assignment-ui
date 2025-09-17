import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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

interface RecommendationDetailsProps {
  data: RecommendationData;
}

export function RecommendationDetails({ data }: RecommendationDetailsProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">Overview</CardTitle>
        <CardDescription>Meta information</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Symbol</span>
            <span className="text-sm font-medium">{data.symbol}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Recommendation</span>
            <Badge variant="outline" className="capitalize">
              {data.recommendation}
            </Badge>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Created</span>
            <span className="text-sm font-medium">{new Date(data.created_at).toLocaleString()}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}