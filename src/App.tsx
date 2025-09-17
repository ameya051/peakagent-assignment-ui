import { useQuery } from "@tanstack/react-query";
import { Bot } from "lucide-react";
import { LoadingSkeleton } from "@/components/LoadingSkeleton";
import { ErrorState } from "@/components/ErrorState";
import { RecommendationOverview } from "@/components/RecommendationOverview";
import { RecommendationDetails } from "@/components/RecommendationDetails";

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

export default function RecommendationsPage() {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["recommendations"],
    queryFn: async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/recommendations/latest`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json() as Promise<RecommendationData>;
    },
  });

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  if (error) {
    return <ErrorState error={error.message} onRetry={() => refetch()} />;
  }

  return (
    <div className="min-h-screen bg-background relative">
      {/* decorative background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-28 right-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 -left-20 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-20 border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto max-w-6xl px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="grid size-9 place-items-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <h1 className="text-xl font-semibold tracking-tight">
                  PeakAgent Insights
                </h1>
                <p className="text-xs text-muted-foreground">
                  AI-powered trading signals
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto max-w-6xl px-4 py-10">
        {data && (
          <div className="grid gap-6 lg:grid-cols-3">
            <RecommendationOverview data={data} />
            <RecommendationDetails data={data} />
          </div>
        )}

        {/* Footer */}
        <footer className="mt-12 grid place-items-center border-t pt-8 text-center text-sm text-muted-foreground">
          <p className="max-w-prose text-balance">
            Financial recommendations are AI-generated and should not be
            considered financial advice.
          </p>
        </footer>
      </main>
    </div>
  );
}
