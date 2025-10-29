# utilcn

## Shadcn Registry

utilcn is a fullstack shadcn registry

- String helpers for common case transforms (camel, kebab, Pascal, snake), capitalization, repeating, reversing, and truncation (`registry/default/strings`).
- Storage utilities for S3-style workflows: presigned upload/download URL builders, ready-made upload/download components, and React hooks for handling file transfers (`registry/default/storage`).
- ChatGPT MCP widget blocks that bundle the frontend widget UI, build tooling, shared types/hooks, plus the matching backend server scaffold and sample MCP tool (`registry/default/chatgpt-app`).
- A Zod-powered server environment validator template to bootstrap typed configuration (`registry/default/secrets/env-server.ts`).

## Development

Run development server:

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

Open http://localhost:3000 with your browser to see the result.

## Explore

In the project, you can see:

- `lib/source.ts`: Code for content source adapter, [`loader()`](https://fumadocs.dev/docs/headless/source-api) provides the interface to access your content.
- `lib/layout.shared.tsx`: Shared options for layouts, optional but preferred to keep.

| Route                     | Description                                            |
| ------------------------- | ------------------------------------------------------ |
| `app/(home)`              | The route group for your landing page and other pages. |
| `app/docs`                | The documentation layout and pages.                    |
| `app/api/search/route.ts` | The Route Handler for search.                          |


### Fumadocs MDX

A `source.config.ts` config file has been included, you can customise different options like frontmatter schema.

Read the [Introduction](https://fumadocs.dev/docs/mdx) for further details.

## Learn More

To learn more about Next.js and Fumadocs, take a look at the following
resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js
  features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Fumadocs](https://fumadocs.vercel.app) - learn about Fumadocs
