'use client';

import { ReactNode, useState } from 'react';
import { Box, Stack, Typography, IconButton, Drawer } from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { DocsSidebar } from './components/DocsSidebar';
import { SearchBar } from './components/SearchBar';

interface DocsLayoutProps {
  children: ReactNode;
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Box className="min-h-screen">
      {/* Header */}
      <Box className="sticky top-0 z-10 border-b border-gray-700">
        <Stack direction="row" className="items-center justify-between px-4 py-3">
          <Stack direction="row" className="items-center gap-4">
            <IconButton
              onClick={handleSidebarToggle}
              className="text-white md:hidden"
              size="small"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className="text-white font-semibold">
              Planton Documentation
            </Typography>
          </Stack>
          <SearchBar />
        </Stack>
      </Box>

      <Box className="flex">
        {/* Sidebar */}
        <Box className="hidden md:block w-80 min-h-screen border-r border-gray-700">
          <DocsSidebar />
        </Box>

        {/* Mobile Sidebar */}
        <Drawer
          anchor="left"
          open={sidebarOpen}
          onClose={handleSidebarToggle}
          className="md:hidden"
          PaperProps={{
            className: 'w-80',
          }}
        >
          <Stack direction="row" className="items-center justify-between p-4 border-b border-gray-700">
            <Typography variant="h6" className="text-white font-semibold">
              Documentation
            </Typography>
            <IconButton onClick={handleSidebarToggle} className="text-white">
              <CloseIcon />
            </IconButton>
          </Stack>
          <DocsSidebar onNavigate={() => setSidebarOpen(false)} />
        </Drawer>

        {/* Main Content */}
        <Box className="flex-1 min-h-screen">
          <Box className="max-w-4xl mx-auto px-4 py-8">
            {children}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
