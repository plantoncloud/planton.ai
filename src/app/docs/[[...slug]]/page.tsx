import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXRenderer } from '../components/MDXRenderer';
import { getMarkdownContent, getDocumentationStructure, DocItem } from '../utils/fileSystem';

type DocsParams = Promise<{ slug?: string[] }>;

export async function generateMetadata({ params }: { params: DocsParams }): Promise<Metadata> {
  const { slug = [] } = await params;
  const path = slug.join('/');

  try {
    const content = await getMarkdownContent(path);
    const title = content.data?.title || slug[slug.length - 1] || 'Documentation';

    return {
      title: `${title} - Planton Documentation`,
      description: content.data?.description || 'Planton Cloud Documentation',
    };
  } catch {
    return {
      title: 'Documentation - Planton',
      description: 'Planton Cloud Documentation',
    };
  }
}

export async function generateStaticParams() {
  const structure = await getDocumentationStructure();
  const params: { slug: string[] }[] = [];

  const addPaths = (items: DocItem[], currentPath: string[] = []) => {
    items.forEach(item => {
      if (item.type === 'file') {
        params.push({ slug: [...currentPath, item.name] });
      } else if (item.type === 'directory') {
        addPaths(item.children || [], [...currentPath, item.name]);
      }
    });
  };

  addPaths(structure);
  // Include root /docs path for static export with catch-all route
  params.push({ slug: [] });
  return params;
}

export default async function DocsPage({ params }: { params: DocsParams }) {
  const { slug = [] } = await params;
  const path = slug.join('/');

  // Handle root docs page by rendering content/docs/index.(md|mdx)
  if (slug.length === 0) {
    try {
      const content = await getMarkdownContent('');
      // Avoid mismatches by not injecting inline style objects via MD content
      return (<MDXRenderer content={content.content} />);
    } catch (error) {
      console.error('Error loading root documentation index:', error);
      // Fallback to notFound to show the 404 UI if index is missing
      notFound();
    }
  }

  try {
    const content = await getMarkdownContent(path);

    return (<MDXRenderer content={content.content} />);
  } catch (error) {
    console.error('Error loading documentation:', error);
    notFound();
  }
}
