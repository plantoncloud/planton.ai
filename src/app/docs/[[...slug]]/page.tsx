import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getMarkdownContent, getDocumentationStructure, DocItem } from '@/app/docs/utils/fileSystem';
import MDXRenderer from '@/app/components/blog/MDXRenderer';
import { MDXParser } from '@/lib/mdx';
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

  // Add the root docs path
  params.push({ slug: [] });

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
  return params;
}

export default async function DocsPage({ params }: { params: DocsParams }) {
  const { slug = [] } = await params;
  const path = slug.join('/');

  try {
    const content = await getMarkdownContent(path || 'index');

    return (
      <MDXRenderer mdxContent={MDXParser.reconstructMDX(content.content)} />
    );
  } catch (error) {
    console.error('Error loading documentation:', error);
    notFound();
  }
}
