import { z } from 'zod';

const serverSchema = z.object({
  DATABASE_URL: z.string(),
  PORT: z.coerce.number(),
});

const parsedEnv = serverSchema.safeParse(process.env);
if (!parsedEnv.success) {
  const errors = parsedEnv.error.issues;
  for (const error of errors) {
    console.error(JSON.stringify(error, null, 2));
  }

  process.exit(1);
}

export const serverEnv = parsedEnv.data;
