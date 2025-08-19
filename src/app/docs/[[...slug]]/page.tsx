import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MarkdownRenderer } from '../components/MarkdownRenderer';
import { getMarkdownContent, getDocumentationStructure, DocItem } from '../utils/fileSystem';
import DocsLayout from '../layout';
import { Box, Typography, Paper } from '@mui/material';
import Link from 'next/link';

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
        params.push({ slug: [...currentPath, item.name.replace('.md', '')] });
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

  // Handle root docs page
  if (slug.length === 0) {
    return (
      <DocsLayout>
        <Box>
          <Typography variant="h3" className="text-white mb-6">
            Planton Documentation
          </Typography>
          <Typography className="text-gray-300 mb-8 text-lg">
            Welcome to the Planton Cloud documentation. Here you&apos;ll find comprehensive guides and documentation to help you get started with Planton Cloud.
          </Typography>

          <Typography className="text-gray-300 mb-4">
            Use the navigation sidebar on the left to explore our documentation sections:
          </Typography>

          <Box className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <Paper className="p-6 bg-gray-800">
              <Typography variant="h5" className="text-white mb-3">
                Features
              </Typography>
              <Typography className="text-gray-300 mb-4">
                Learn about our core features like Planton Copilot, Self-Service DevOps, and more.
              </Typography>
              <Link href="/docs/features">
                <Typography className="text-blue-400 hover:text-blue-300">
                  Explore Features →
                </Typography>
              </Link>
            </Paper>

            <Paper className="p-6 bg-gray-800">
              <Typography variant="h5" className="text-white mb-3">
                Solutions
              </Typography>
              <Typography className="text-gray-300 mb-4">
                Find solutions tailored to your role, company size, or specific use case.
              </Typography>
              <Link href="/docs/solutions">
                <Typography className="text-blue-400 hover:text-blue-300">
                  View Solutions →
                </Typography>
              </Link>
            </Paper>

            <Paper className="p-6 bg-gray-800">
              <Typography variant="h5" className="text-white mb-3">
                Getting Started
              </Typography>
              <Typography className="text-gray-300 mb-4">
                Quick start guides and tutorials to get you up and running with Planton Cloud.
              </Typography>
              <Link href="/docs/README">
                <Typography className="text-blue-400 hover:text-blue-300">
                  Get Started →
                </Typography>
              </Link>
            </Paper>

            <Paper className="p-6 bg-gray-800">
              <Typography variant="h5" className="text-white mb-3">
                API Reference
              </Typography>
              <Typography className="text-gray-300 mb-4">
                Detailed API documentation and integration guides.
              </Typography>
              <Link href="/docs/api">
                <Typography className="text-blue-400 hover:text-blue-300">
                  API Docs →
                </Typography>
              </Link>
            </Paper>
          </Box>
        </Box>
      </DocsLayout>
    );
  }

  try {
    const content = await getMarkdownContent(path);

    return (
      <DocsLayout>
        <MarkdownRenderer content={content.content} />
      </DocsLayout>
    );
  } catch (error) {
    console.error('Error loading documentation:', error);
    notFound();
  }
}
