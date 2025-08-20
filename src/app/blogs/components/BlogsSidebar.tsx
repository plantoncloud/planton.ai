'use client';

import { FC, useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Box, Typography, Collapse, IconButton } from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
  Folder as FolderIcon,
  Description as FileIcon
} from '@mui/icons-material';
import { BlogItem } from '../utils/fileSystem';

interface BlogsSidebarProps {
  onNavigate?: () => void;
}

interface SidebarItemProps {
  item: BlogItem;
  level?: number;
  onNavigate?: () => void;
}

const SidebarItem: FC<SidebarItemProps> = ({ item, level = 0, onNavigate }) => {
  const [expanded, setExpanded] = useState(level < 2); // Auto-expand first 2 levels
  const pathname = usePathname();
  const isActive = pathname === `/blogs/${item.path}`;

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleNavigate = () => {
    if (onNavigate) {
      onNavigate();
    }
  };

  if (item.type === 'directory') {
    return (
      <Box>
        <Box
          className="flex items-center justify-between px-4 py-2 hover:bg-gray-700 cursor-pointer"
          onClick={handleToggle}
        >
          <Box className="flex items-center gap-2">
            <FolderIcon className="text-blue-400" fontSize="small" />
            <Typography className="text-gray-300 text-sm font-medium">
              {formatName(item.name)}
            </Typography>
          </Box>
          <IconButton size="small" className="text-gray-400">
            {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        </Box>
        <Collapse in={expanded}>
          <Box className="ml-4">
            {item.children?.map((child, index) => (
              <SidebarItem
                key={index}
                item={child}
                level={level + 1}
                onNavigate={onNavigate}
              />
            ))}
          </Box>
        </Collapse>
      </Box>
    );
  }

  return (
    <Link href={`/blogs/${item.path}`} onClick={handleNavigate}>
      <Box
        className={`flex items-center gap-2 px-4 py-2 hover:bg-gray-700 cursor-pointer ${
          isActive ? 'bg-blue-600 text-white' : 'text-gray-300'
        }`}
      >
        <FileIcon className="text-gray-400" fontSize="small" />
        <Typography className="text-sm">
          {formatName(item.name)}
        </Typography>
      </Box>
    </Link>
  );
};

function formatName(name: string): string {
  // Convert kebab-case or snake_case to Title Case
  return name
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, l => l.toUpperCase())
    .replace(/\s+/g, ' ')
    .trim();
}

export const BlogsSidebar: FC<BlogsSidebarProps> = ({ onNavigate }) => {
  const [structure, setStructure] = useState<BlogItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStructure = async () => {
      try {
        const response = await fetch('/api/blogs/structure');
        if (response.ok) {
          const data = await response.json();
          setStructure(data);
        }
      } catch (error) {
        console.error('Failed to load blogs structure:', error);
      } finally {
        setLoading(false);
      }
    };

    loadStructure();
  }, []);

  if (loading) {
    return (
      <Box className="p-4">
        <Typography className="text-gray-400">Loading...</Typography>
      </Box>
    );
  }

  return (
    <Box className="h-full overflow-y-auto">
      <Box className="p-4 border-b border-gray-700">
        <Typography variant="h6" className="text-white font-semibold">
          Blogs
        </Typography>
      </Box>
      <Box className="py-2">
        {structure.map((item, index) => (
          <SidebarItem
            key={index}
            item={item}
            onNavigate={onNavigate}
          />
        ))}
      </Box>
    </Box>
  );
}; 