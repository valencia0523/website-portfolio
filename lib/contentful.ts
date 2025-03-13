/*
import { createClient, Entry, Asset } from 'contentful';

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
});

export async function getProjects() {
  try {
    const response = await client.getEntries({ content_type: 'my-portfolio' });

    // 데이터 변환
    const projects = response.items.map((item) => ({
      id: item.sys.id,
      title: item.fields.title as string,
      url: item.fields.url as string,
      slug: item.fields.slug as string,
      description: item.fields.description, // Rich Text 그대로 유지
      image: (item.fields.image as Asset)?.fields?.file?.url || '',
      techStack: item.fields['tech-stack'], // Rich Text 그대로 유지
    }));

    return projects;
  } catch (error) {
    console.error('Contentful fetch error:', error);
    return [];
  }
}
*/

import { createClient } from 'contentful';

const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
if (!accessToken) {
  throw new Error('Contentful access token is missing.');
}

const client = createClient({
  space: '1h6ld89b45c3',
  environment: 'master-portfolio',
  accessToken,
});

export async function getProjects() {
  try {
    const response = await client.getEntries({ content_type: 'my-portfolio' });
    const projects = response.items.map((item) => {
      const { title, url, slug, description } = item.fields;
      const id = item.sys.id;
      // const img = image?.fields?.file?.url;
      return { title, url, slug, description };
    });
    return projects;
  } catch (error) {
    console.log('haha');
    return [];
  }
}
