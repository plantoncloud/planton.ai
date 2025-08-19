import { Box, Typography, Button } from '@mui/material';
import Link from 'next/link';
import DocsLayout from './layout';

export default function DocsNotFound() {
  return (
    <DocsLayout>
      <Box className="text-center py-12">
        <Typography variant="h2" className="text-white mb-4">
          404 - Page Not Found
        </Typography>
        <Typography className="text-gray-300 mb-8 text-lg">
          The documentation page you&apos;re looking for doesn&apos;t exist.
        </Typography>
        <Link href="/docs">
          <Button variant="contained" className="bg-blue-600 hover:bg-blue-700">
            Back to Documentation
          </Button>
        </Link>
      </Box>
    </DocsLayout>
  );
}
