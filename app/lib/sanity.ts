import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';


const projectID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || '';
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '';

export const client = createClient({
  projectId: projectID,
  dataset: dataset,
  apiVersion: apiVersion,
  useCdn: true
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
