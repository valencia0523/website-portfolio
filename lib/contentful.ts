import { createClient, EntrySkeletonType } from 'contentful';
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
import { Project } from './types';

const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
if (!accessToken) {
  throw new Error('Contentful access token is missing.');
}

const client = createClient({
  space: '1h6ld89b45c3',
  environment: 'master',
  accessToken,
});

/*
interface ImageField {
  fields: {
    file: {
      url: string;
    };
  };
}
*/

interface ImageField {
  metadata: unknown;
  sys: unknown;
  fields: {
    file: {
      url: string;
    };
  };
}

interface ProjectSkeleton extends EntrySkeletonType {
  fields: {
    title: string;
    url: string;
    techStack?: Document | null;
    // image?: Asset[];
    // image?: { fields: { file: { url: string } } }[];
    image?: ImageField[];
  };
}

export async function fetchProjects(): Promise<Project[]> {
  try {
    const response = await client.getEntries<ProjectSkeleton>({
      content_type: 'myPortfolio',
    });

    // !!! Resolve the issue 'item:any' !!!!!
    const projects: Project[] = response.items.map((item: any) => {
      const { title, url, techStack, image } = item.fields;
      const img = image?.[0]?.fields?.file?.url || '';
      const id = item.sys.id;
      const techStackText =
        techStack && typeof techStack === 'object' && 'nodeType' in techStack
          ? documentToPlainTextString(techStack)
          : '';

      return { title, url, id, techStack: techStackText, image: img };
    });

    return projects;
  } catch (error) {
    console.log(error);
    return [];
  }
}
