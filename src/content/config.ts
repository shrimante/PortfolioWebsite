import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		publishDate: z.coerce.date(),
		tags: z.array(z.string()),
		featured: z.boolean().default(false),
		github: z.string().url().optional(),
		metrics: z.object({
			stars: z.number().optional(),
			forks: z.number().optional(),
		}).optional(),
	}),
});

const readings = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		author: z.string(),
		category: z.string(),
		status: z.enum(['Read', 'In Progress', 'To Read']),
		rating: z.number().min(1).max(5).optional(),
	}),
});

export const collections = { projects, readings };
