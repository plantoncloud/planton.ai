import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  getMarkdownContent,
  getDocumentationStructure,
  DocItem,
} from '@/app/docs/utils/fileSystem';
import { MDXRenderer } from '@/lib/MDXRenderer';
import { Author, MDXParser } from '@/lib/mdx';
import { DocsLayout } from '@/app/docs/components/DocsLayout';
import matter from 'gray-matter';
type DocsParams = Promise<{ slug?: string[] }>;

export async function generateMetadata({ params }: { params: DocsParams }): Promise<Metadata> {
  const { slug = [] } = await params;
  const path = slug.join('/');

  try {
    const content = await getMarkdownContent(path);
    const { data } = matter(content);
    const title = data?.title || slug[slug.length - 1] || 'Documentation';

    return {
      title: `${title} - Planton Documentation`,
      description: data?.description || 'Planton Cloud Documentation',
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
    items.forEach((item) => {
      if (item.type === 'file') {
        params.push({ slug: [...currentPath, item.name] });
      } else if (item.type === 'directory') {
        // If directory has an index file, add a path for the directory itself
        if (item.hasIndex) {
          params.push({ slug: [...currentPath, item.name] });
        }
        // Recursively add paths for children
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

  try {
    const content = await getMarkdownContent(path || 'index');
    const { data } = matter(content);
    const mdxContent = MDXParser.reconstructMDX(content);
    return (
      <DocsLayout 
        author={data?.author as unknown as Author[]}
        content={content}
      >
        <MDXRenderer 
          mdxContent={mdxContent}
          markdownContent={content}
          title={data?.title}
        />
      </DocsLayout>
    );
  } catch (error) {
    console.error('Error loading documentation:', error);
    notFound();
  }
}
