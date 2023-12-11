import { z } from 'zod';

export const createIssueSchema = z.object({
  title: z.string().min(1, 'You need to write a title').max(255),
  description: z.string().min(1, 'You need to write a description')
});
