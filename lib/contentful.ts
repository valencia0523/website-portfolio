import { createClient, EntrySkeletonType } from 'contentful';
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
import { Project } from './types';
import { Block } from '@contentful/rich-text-types';

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
    description?: string;
    url?: string;
    githubUrl?: string;
    // image?: Asset[];
    // image?: { fields: { file: { url: string } } }[];
    image?: ImageField[];
    techStack?: Document | null;
  };
}

export async function fetchProjects(): Promise<Project[]> {
  try {
    const response = await client.getEntries<ProjectSkeleton>({
      content_type: 'myPortfolio',
    });

    // !!! Resolve the issue 'item:any' !!!!!
    const projects: Project[] = response.items.map((item: any) => {
      //Added const fields due to the type any
      const fields = item.fields as {
        title: string;
        url?: string;
        description?: string;
        githubUrl?: string;
        image?: {
          fields: {
            file: {
              url: string;
            };
          };
        }[];
        techStack?: Document | null;
      };

      console.log(item);

      const { title, url, techStack, image, description, githubUrl } = fields;
      const img = image?.[0]?.fields?.file?.url || '';
      const id = item.sys.id;
      const techStackText =
        techStack && typeof techStack === 'object' && 'nodeType' in techStack
          ? documentToPlainTextString(techStack as unknown as Block)
          : '';

      return {
        title,
        url,
        id,
        techStack: techStackText,
        image: img,
        description,
        githubUrl,
      };
    });

    return projects;
  } catch (error) {
    console.log(error);
    return [];
  }
}
