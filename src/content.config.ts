import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const stories = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/stories' }),
  schema: z.object({
    title: z.string(),
    industryLabel: z.string(),
    statNumber: z.string(),
    statLabel: z.string(),
    problemStatement: z.string(),
    dashboardPath: z.string(),
    dashboardFallbackImage: z.string(),
    dashboardAccessibleSummary: z.string(),
    processSteps: z.array(z.string()),
    ctaText: z.string().default('Have a data problem like this?'),
    ogImage: z.string(),
    metaDescription: z.string(),
    publishedDate: z.date(),
    sortOrder: z.number(),
  }),
});

export const collections = { stories };
