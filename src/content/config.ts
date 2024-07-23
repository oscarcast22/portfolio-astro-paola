import { defineCollection, z } from 'astro:content';

export const collections = {
	work: defineCollection({
		type: 'content',
		schema: z.object({
			title: z.string(),
			description: z.string(),
			rol: z.string().optional(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			img: z.string(),
			img_alt: z.string().optional(),
			images: z.array(
        		z.object({
        		  src: z.string(),
        		  img_alt: z.string().optional(),
        		})
      		),
			video: z.string().optional(),
			haveVideos: z.boolean().optional(),
		}),
	}),
};
