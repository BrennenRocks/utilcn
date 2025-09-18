import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            aria-label="Logo"
            className="size-8"
          >
            <title>utilcn logo</title>
            <rect
              x="60"
              y="75"
              width="80"
              height="18"
              fill="currentColor"
              rx="4"
            />
            <rect
              x="60"
              y="100"
              width="80"
              height="18"
              fill="currentColor"
              rx="4"
            />
            <rect
              x="50"
              y="125"
              width="100"
              height="18"
              fill="currentColor"
              rx="4"
            />
          </svg>
          utilcn
        </>
      ),
    },
    // see https://fumadocs.dev/docs/ui/navigation/links
    links: [],
  };
}
