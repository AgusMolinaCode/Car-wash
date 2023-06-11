import imageUrlBuilder from '@sanity/image-url'
import { SanityClient } from '@sanity/client'

export const client = new SanityClient({
    projectId: 'jmtsuj7a',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2023-05-04',
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);