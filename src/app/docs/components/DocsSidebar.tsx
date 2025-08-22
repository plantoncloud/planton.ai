'use client';

import { FC, useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Box, Typography, Chip } from '@mui/material';
import {
  Folder as FolderIcon,
  Description as FileIcon,
  OpenInNew as ExternalLinkIcon
} from '@mui/icons-material';
import { DocItem } from '../utils/fileSystem';

interface DocsSidebarProps {
  onNavigate?: () => void;
}

interface SidebarItemProps {
  item: DocItem;
  level?: number;
  onNavigate?: () => void;
}

const SidebarItem: FC<SidebarItemProps> = ({ 
  item, 
  level = 0, 
  onNavigate
}) => {
  const pathname = usePathname();
  const isActive = pathname === `/docs/${item.path}`;

  const handleNavigate = () => {
    if (onNavigate) {
      onNavigate();
    }
  };

  // No parent path handling needed since all items are expanded

  // Render icon based on item type and metadata
  const renderIcon = () => {
    if (item.icon) {
      return (
        <span className="text-lg" role="img" aria-label={item.title || item.name}>
          {item.icon}
        </span>
      );
    }
    
    if (item.type === 'directory') {
      return <FolderIcon className="text-blue-400" fontSize="small" />;
    }
    
    return <FileIcon className="text-gray-400" fontSize="small" />;
  };

  // Render badge if present
  const renderBadge = () => {
    if (!item.badge) return null;
    
    const badgeColors: Record<string, string> = {
      'Popular': 'bg-green-100 text-green-800',
      'Beta': 'bg-blue-100 text-blue-800',
      'New': 'bg-purple-100 text-purple-800',
      'Deprecated': 'bg-red-100 text-red-800',
      'Experimental': 'bg-yellow-100 text-yellow-800'
    };
    
    const colorClass = badgeColors[item.badge] || 'bg-gray-100 text-gray-800';
    
    return (
      <Chip
        label={item.badge}
        size="small"
        className={`ml-2 text-xs ${colorClass}`}
      />
    );
  };

  if (item.type === 'directory') {
    return (
      <Box>
        <Box
          className="flex items-center justify-between px-4 py-2 hover:bg-gray-700"
        >
          <Box className="flex items-center gap-2 flex-1">
            {renderIcon()}
            {item.hasIndex ? (
              <Link 
                href={`/docs/${item.path}`} 
                onClick={handleNavigate}
                className="flex-1"
              >
                <Typography className="text-gray-300 text-sm font-medium hover:text-white">
                  {item.title || formatName(item.name)}
                </Typography>
              </Link>
            ) : (
              <Typography className="text-gray-300 text-sm font-medium">
                {item.title || formatName(item.name)}
              </Typography>
            )}
            {renderBadge()}
          </Box>
        </Box>
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
      </Box>
    );
  }

  // Handle external links
  if (item.isExternal && item.externalUrl) {
    return (
      <a 
        href={item.externalUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block"
      >
        <Box className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700 cursor-pointer text-gray-300">
          {renderIcon()}
          <Typography className="text-sm flex-1">
            {item.title || formatName(item.name)}
          </Typography>
          <ExternalLinkIcon className="text-gray-400" fontSize="small" />
          {renderBadge()}
        </Box>
      </a>
    );
  }

  return (
    <Link href={`/docs/${item.path}`} onClick={handleNavigate}>
      <Box
        className={`flex items-center gap-2 px-4 py-2 hover:bg-gray-700 cursor-pointer ${
          isActive ? 'bg-blue-600 text-white' : 'text-gray-300'
        }`}
      >
        {renderIcon()}
        <Typography className="text-sm flex-1">
          {item.title || formatName(item.name)}
        </Typography>
        {renderBadge()}
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

export const DocsSidebar: FC<DocsSidebarProps> = ({ onNavigate }) => {
  const [structure, setStructure] = useState<DocItem[]>([]);
  const [loading, setLoading] = useState(true);
  // No expanded state; everything is always expanded

  useEffect(() => {
    const loadStructure = async () => {
      try {
        const response = await fetch('/api/docs/structure');
        if (response.ok) {
          const data = await response.json();
          setStructure(data);
        }
      } catch (error) {
        console.error('Failed to load documentation structure:', error);
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
          Documentation
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
