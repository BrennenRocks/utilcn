import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center items-center text-center px-6 py-12">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">
            Utility Functions Registry
          </h1>
          <p className="text-xl text-fd-muted-foreground">
            A collection of reusable utility functions for your TypeScript
            projects
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="/docs/backend">Get Started</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/docs">View Functions</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
