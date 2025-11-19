'use client';

import { DynamicCodeBlock } from 'fumadocs-ui/components/dynamic-codeblock';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from 'fumadocs-ui/components/tabs';

interface InstallTabsProps {
  component: string;
}

export function InstallTabs({ component }: InstallTabsProps) {
  const componentPath = `@utilcn/${component}`;

  return (
    <Tabs groupId="language" defaultValue="pnpm" persist>
      <TabsList>
        <TabsTrigger value="pnpm">pnpm</TabsTrigger>
        <TabsTrigger value="bun">bun</TabsTrigger>
        <TabsTrigger value="npm">npm</TabsTrigger>
        <TabsTrigger value="yarn">yarn</TabsTrigger>
      </TabsList>
      <TabsContent value="pnpm">
        <DynamicCodeBlock
          lang="bash"
          code={`pnpm dlx shadcn@latest add ${componentPath}`}
        />
      </TabsContent>
      <TabsContent value="bun">
        <DynamicCodeBlock
          lang="bash"
          code={`bunx --bun shadcn@latest add ${componentPath}`}
        />
      </TabsContent>
      <TabsContent value="npm">
        <DynamicCodeBlock
          lang="bash"
          code={`npx shadcn@latest add ${componentPath}`}
        />
      </TabsContent>
      <TabsContent value="yarn">
        <DynamicCodeBlock
          lang="bash"
          code={`yarn shadcn@latest add ${componentPath}`}
        />
      </TabsContent>
    </Tabs>
  );
}
