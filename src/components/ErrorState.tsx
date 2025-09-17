import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

interface ErrorStateProps {
  error: string;
  onRetry: () => void;
}

export function ErrorState({ error, onRetry }: ErrorStateProps) {
  return (
    <div className="min-h-screen bg-background relative">
      {/* background accents */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 -right-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-20 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />
      </div>
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center justify-center min-h-[320px] gap-5">
          <div className="text-destructive text-lg font-medium">
            Error loading data
          </div>
          <p className="text-center text-muted-foreground max-w-prose">{error}</p>
          <Button onClick={onRetry} variant="outline" className="gap-2">
            <RefreshCw className="h-4 w-4" />
            Try Again
          </Button>
        </div>
      </div>
    </div>
  );
}