import imageUrlBuilder from '@sanity/image-url'
import { SanityClient } from '@sanity/client'

export const client = new SanityClient({
    projectId: 'jmtsuj7a',
    dataset: 'production',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
    apiVersion: '2022-08-30',
    persistSession: false,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);