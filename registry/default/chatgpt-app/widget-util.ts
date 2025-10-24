import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';

export type UtilCnWidget = {
  id: string;
  title: string;
  templateUri: string;
  invoking: string;
  invoked: string;
  html: string;
  responseText: string;
  toolDescription: string;
  widgetDescription: string;
  inputSchema: {
    type: 'object';
    properties?: Record<string, unknown>;
    required?: readonly string[];
    additionalProperties: boolean;
  };
};

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ASSETS_DIR = path.resolve(__dirname, '..', '..', '..', 'web', 'assets'); // <-- TODO: Get to the built chatgpt `assets` directory of your project which will appear after running `pnpm run build` in your front end project

export function buildWidgetHtml(componentName: string): string {
  if (!fs.existsSync(ASSETS_DIR)) {
    throw new Error(
      `Widget assets not found. Expected directory ${ASSETS_DIR}. Run "pnpm run build" before starting the server.`,
    );
  }

  const directPath = path.join(ASSETS_DIR, `${componentName}.html`);
  let htmlContents: string | null = null;

  if (fs.existsSync(directPath)) {
    htmlContents = fs.readFileSync(directPath, 'utf8');
  } else {
    const candidates = fs
      .readdirSync(ASSETS_DIR)
      .filter(
        (file) =>
          file.startsWith(`${componentName}-`) && file.endsWith('.html'),
      )
      .sort();
    const fallback = candidates[candidates.length - 1];
    if (fallback) {
      htmlContents = fs.readFileSync(path.join(ASSETS_DIR, fallback), 'utf8');
    }
  }

  if (!htmlContents) {
    throw new Error(
      `Widget HTML for "${componentName}" not found in ${ASSETS_DIR}. Run "pnpm run build" to generate the assets.`,
    );
  }

  return htmlContents;
}

export function widgetMeta(widget: UtilCnWidget) {
  return {
    'openai/outputTemplate': widget.templateUri,
    'openai/widgetDescription': widget.widgetDescription,
    'openai/toolInvocation/invoking': widget.invoking,
    'openai/toolInvocation/invoked': widget.invoked,
    'openai/widgetAccessible': true,
    'openai/resultCanProduceWidget': true,
  } as const;
}

export function registerWidgetResource(
  server: McpServer,
  widget: UtilCnWidget,
) {
  server.registerResource(
    widget.id,
    widget.templateUri,
    {
      _meta: {
        'openai/widgetDescription': widget.widgetDescription,
      },
    },
    async () => ({
      contents: [
        {
          uri: widget.templateUri,
          mimeType: 'text/html+skybridge',
          text: widget.html,
          _meta: {
            'openai/widgetDescription': widget.widgetDescription,
          },
        },
      ],
    }),
  );
}
