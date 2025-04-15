import { createClient, EntrySkeletonType } from 'contentful';
import { Project } from './types';
import { Asset } from 'contentful';

const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
if (!accessToken) {
  throw new Error('Contentful access token is missing.');
}

const client = createClient({
  space: '1h6ld89b45c3',
  environment: 'master',
  accessToken,
});

interface MyPortfolioFields extends EntrySkeletonType {
  title: string;
  url?: string;
  techStack?: string;
  image?: Asset[];
  description?: string;
  githubUrl?: string;
}

export async function fetchProjects(): Promise<Project[]> {
  try {
    const response = await client.getEntries<MyPortfolioFields>({
      content_type: 'myPortfolio',
    });

    const projects = response.items.map((item) => {
      const { title, url, techStack, image, description, githubUrl } =
        item.fields;

      const imageArray = image as Asset[];
      const img =
        typeof imageArray?.[0]?.fields?.file?.url === 'string'
          ? imageArray[0].fields.file.url
          : '';

      const id = item.sys.id;

      return {
        title: typeof title === 'string' ? title : '',
        url: typeof url === 'string' ? url : '',
        id,
        techStack: typeof techStack === 'string' ? techStack : '',
        image: img ?? '',
        description: typeof description === 'string' ? description : '',
        githubUrl: typeof githubUrl === 'string' ? githubUrl : '',
      };
    });

    return projects;
  } catch (error) {
    console.log(error);
    return [];
  }
}
