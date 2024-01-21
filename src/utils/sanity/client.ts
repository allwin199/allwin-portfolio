import {createClient} from 'next-sanity';

const projectId = "tczk9842"
const dataset = "production"
const apiVersion = "2024-01-21"

export const client = createClient({
  projectId,
  dataset,
  apiVersion, 
  useCdn: true,
})