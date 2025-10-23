import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import z from 'zod';
import {
  buildWidgetHtml,
  registerWidgetResource,
  type UtilCnWidget,
  widgetMeta,
} from '@/registry/default/chatgpt-app/widget-util';

const addInputSchema = {
  type: 'object',
  properties: {
    a: { type: 'number', description: 'First number' },
    b: { type: 'number', description: 'Second number' },
  },
  additionalProperties: false,
} as const;

const addWidget: UtilCnWidget = {
  id: 'add',
  title: 'Adding 2 Numbers Together',
  templateUri: 'ui://widget/add.html',
  invoking: 'Summing the 2 numbers...',
  invoked: 'The numbers have been added together!',
  html: buildWidgetHtml('add'),
  responseText: 'Displayed the two given numbers added together',
  toolDescription:
    'Use this when the user asks about adding two numbers together',
  widgetDescription:
    'A card that displays addition of two given numbers and their sum',
  inputSchema: addInputSchema,
};

const addInputParser = z.object({
  a: z.number(),
  b: z.number(),
});

export function registerAdd(server: McpServer) {
  registerWidgetResource(server, addWidget);

  server.registerTool(
    'add',
    {
      title: addWidget.title,
      description: addWidget.toolDescription,
      inputSchema: { a: z.number(), b: z.number() },
      annotations: {
        readOnlyHint: true,
      },
      _meta: widgetMeta(addWidget),
    },
    (args) => {
      const typedArgs = addInputParser.parse(args);

      const sum = typedArgs.a + typedArgs.b;
      return {
        content: [
          {
            type: 'text',
            text: addWidget.responseText,
          },
        ],
        structuredContent: {
          a: typedArgs.a,
          b: typedArgs.b,
          sum,
        },
        _meta: widgetMeta(addWidget),
      };
    },
  );
}
