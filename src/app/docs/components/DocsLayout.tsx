'use client';

import React, { useState } from 'react';
import RightSidebar from '@/app/docs/components/RightSidebar';
import { Author } from '@/lib/mdx';
import { IconButton, Typography } from '@mui/material';
import { Stack } from '@mui/material';
import { DocsSidebar } from '@/app/docs/components/DocsSidebar';
import { SearchBar } from '@/app/docs/components/SearchBar';
import { Drawer } from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';

interface DocsLayoutProps {
  children: React.ReactNode;
  author?: Author[];
}

export const DocsLayout: React.FC<DocsLayoutProps> = ({ children, author = [] }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="sticky top-0 z-10 border-b border-gray-700">
        <Stack direction="row" className="items-center justify-between px-4 py-3">
          <Stack direction="row" className="items-center gap-4">
            <IconButton onClick={handleSidebarToggle} className="text-white md:hidden" size="small">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className="text-white font-semibold">
              Planton Documentation
            </Typography>
          </Stack>
          <SearchBar />
        </Stack>
      </div>

      <div className="flex justify-between">
        {/* Sidebar */}
        <div className="hidden md:block w-80 min-h-screen border-r border-gray-700">
          <DocsSidebar />
        </div>

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
          <Stack
            direction="row"
            className="items-center justify-between p-4 border-b border-gray-700"
          >
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
        <div className="flex min-h-screen max-w-4xl mx-auto">
          <div className="px-4 py-8">{children}</div>
        </div>

        {author.length > 0 && (
          <div className="hidden md:block w-80 min-h-screen border-l border-gray-700">
            <RightSidebar author={author} />
          </div>
        )}
      </div>
    </div>
  );
};
