import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const highlights = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/highlights' }),
  schema: z.object({
    title: z.string(),
    type: z.enum(['article', 'event', 'media', 'note', 'update']),
    date: z.date(),
    summary: z.string(),
    url: z.string().url().optional(),
    publication: z.string().optional(),
    image: z.string().optional(),
    featured: z.boolean().default(true),
  }),
});

export const collections = { highlights };
