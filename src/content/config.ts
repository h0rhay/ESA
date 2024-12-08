import { defineCollection, z } from 'astro:content';

const pageCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    heading: z.string(),
  }),
});

export const collections = {
  'page': pageCollection,
}; 