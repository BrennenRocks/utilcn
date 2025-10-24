import { createRoot } from 'react-dom/client';
import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { useWidgetProps } from '@/registry/default/chatgpt-app/use-widget-props';

function App() {
  const { a, b, sum } = useWidgetProps({
    a: null,
    b: null,
    sum: null,
  });

  const hasData = a !== null && b !== null && sum !== null;

  return (
    <div className="flex items-center justify-center w-full min-h-screen">
      <Card className="w-full max-w-md p-6">
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Sum Calculator</h2>

          <div className="space-y-2">
            <div className="flex justify-between">
              <span>A:</span>
              {hasData ? <span>{a}</span> : <Skeleton className="h-5 w-20" />}
            </div>

            <div className="flex justify-between">
              <span>B:</span>
              {hasData ? <span>{b}</span> : <Skeleton className="h-5 w-20" />}
            </div>

            <div className="flex justify-between font-bold">
              <span>Sum:</span>
              {hasData ? <span>{sum}</span> : <Skeleton className="h-5 w-20" />}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

createRoot(document.getElementById('add-root')).render(<App />);
