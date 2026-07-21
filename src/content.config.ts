import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    image: z.string().optional(),
  }),
});

const tourDates = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/tour-dates' }),
  schema: z.object({
    date: z.string(),
    title: z.string(),
    location: z.string(),
    ticketUrl: z.string().optional(),
    rsvpUrl: z.string().optional(),
  }),
});

const press = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/press' }),
  schema: z.object({
    quote: z.string(),
    source: z.string(),
    forAlbum: z.string().optional(),
  }),
});

const bio = defineCollection({
  loader: file('./src/content/bio.json'),
  schema: z.object({
    production: z.string(),
    biog: z.string(),
  }),
});

const settings = defineCollection({
  loader: file('./src/content/settings.json'),
  schema: z.object({
    social: z.object({
      facebook: z.string(),
      youtube: z.string(),
      appleMusic: z.string(),
      spotify: z.string(),
      instagram: z.string(),
    }),
    storeUrl: z.string(),
    substackUrl: z.string(),
    patreonUrl: z.string(),
    heroVideoUrl: z.string(),
    preorderUrl: z.string(),
    preorderText: z.string(),
    contacts: z.array(
      z.object({
        label: z.string(),
        name: z.string().optional(),
        email: z.string(),
      })
    ),
  }),
});

export const collections = { news, tourDates, press, bio, settings };
