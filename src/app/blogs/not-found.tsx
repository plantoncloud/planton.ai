import { Box, Typography, Button } from '@mui/material';
import Link from 'next/link';
import BlogsLayout from './layout';

export default function BlogsNotFound() {
  return (
    <BlogsLayout>
      <Box className="text-center py-12">
        <Typography variant="h2" className="text-white mb-4">
          404 - Page Not Found
        </Typography>
        <Typography className="text-gray-300 mb-8 text-lg">
          The blog page you&apos;re looking for doesn&apos;t exist.
        </Typography>
        <Link href="/blogs">
          <Button variant="contained" className="bg-blue-600 hover:bg-blue-700">
            Back to Blogs
          </Button>
        </Link>
      </Box>
    </BlogsLayout>
  );
} 