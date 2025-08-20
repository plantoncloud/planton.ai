import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MarkdownRenderer } from '../components/MarkdownRenderer';
import { getMarkdownContent, getBlogsStructure, BlogItem } from '../utils/fileSystem';
import { Box, Typography, Paper } from '@mui/material';
import Link from 'next/link';

type BlogsParams = Promise<{ slug?: string[] }>;

export async function generateMetadata({ params }: { params: BlogsParams }): Promise<Metadata> {
  const { slug = [] } = await params;
  const path = slug.join('/');

  try {
    const content = await getMarkdownContent(path);
    const title = content.data?.title || slug[slug.length - 1] || 'Blogs';

    return {
      title: `${title} - Planton Blogs`,
      description: content.data?.description || 'Planton Cloud Blogs',
    };
  } catch {
    return {
      title: 'Blogs - Planton',
      description: 'Planton Cloud Blogs',
    };
  }
}

export async function generateStaticParams() {
  const structure = await getBlogsStructure();
  const params: { slug: string[] }[] = [];

  const addPaths = (items: BlogItem[], currentPath: string[] = []) => {
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

export default async function BlogsPage({ params }: { params: BlogsParams }) {
  const { slug = [] } = await params;
  const path = slug.join('/');

  // Handle root blogs page
  if (slug.length === 0) {
    return (
      <Box>
        <Typography variant="h3" className="text-white mb-6">
          Planton Blogs
        </Typography>
        <Typography className="text-gray-300 mb-8 text-lg">
          Welcome to the Planton Cloud blogs. Here you&apos;ll find insightful articles, tutorials, and updates about Planton Cloud.
        </Typography>

        <Typography className="text-gray-300 mb-4">
          Use the navigation sidebar on the left to explore our blog sections:
        </Typography>

        <Box className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <Paper className="p-6 bg-gray-800">
            <Typography variant="h5" className="text-white mb-3">
              Latest Posts
            </Typography>
            <Typography className="text-gray-300 mb-4">
              Stay updated with our latest blog posts, announcements, and insights.
            </Typography>
            <Link href="/blogs/latest">
              <Typography className="text-blue-400 hover:text-blue-300">
                Read Latest Posts →
              </Typography>
            </Link>
          </Paper>

          <Paper className="p-6 bg-gray-800">
            <Typography variant="h5" className="text-white mb-3">
              Tutorials
            </Typography>
            <Typography className="text-gray-300 mb-4">
              Step-by-step guides and tutorials to help you master Planton Cloud.
            </Typography>
            <Link href="/blogs/tutorials">
              <Typography className="text-blue-400 hover:text-blue-300">
                Browse Tutorials →
              </Typography>
            </Link>
          </Paper>

          <Paper className="p-6 bg-gray-800">
            <Typography variant="h5" className="text-white mb-3">
              Case Studies
            </Typography>
            <Typography className="text-gray-300 mb-4">
              Real-world examples and success stories from our customers.
            </Typography>
            <Link href="/blogs/case-studies">
              <Typography className="text-blue-400 hover:text-blue-300">
                View Case Studies →
              </Typography>
            </Link>
          </Paper>

          <Paper className="p-6 bg-gray-800">
            <Typography variant="h5" className="text-white mb-3">
              Industry Insights
            </Typography>
            <Typography className="text-gray-300 mb-4">
              Expert analysis and insights about cloud computing and DevOps trends.
            </Typography>
            <Link href="/blogs/insights">
              <Typography className="text-blue-400 hover:text-blue-300">
                Read Insights →
              </Typography>
            </Link>
          </Paper>
        </Box>
      </Box>
    );
  }

  try {
    const content = await getMarkdownContent(path);

    return (
      <MarkdownRenderer content={content.content} />
    );
  } catch (error) {
    console.error('Error loading blog:', error);
    notFound();
  }
} 