'use client';

import { FC, useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Box, Typography, Collapse, IconButton, Chip } from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
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
  expandedItems?: Set<string>;
  onToggleExpanded?: (itemPath: string, parentPath?: string) => void;
}

const SidebarItem: FC<SidebarItemProps> = ({ 
  item, 
  level = 0, 
  onNavigate, 
  expandedItems = new Set(), 
  onToggleExpanded 
}) => {
  const pathname = usePathname();
  const isActive = pathname === `/docs/${item.path}`;
  const isExpanded = expandedItems.has(item.path || '');

  const handleToggle = () => {
    if (onToggleExpanded && item.path) {
      // Pass the current level's parent path to ensure only one sibling is expanded
      const parentPath = getParentPath(item.path);
      onToggleExpanded(item.path, parentPath);
    }
  };

  const handleNavigate = () => {
    if (onNavigate) {
      onNavigate();
    }
  };

  // Helper function to get parent path for the current level
  const getParentPath = (itemPath: string): string | undefined => {
    if (!itemPath) return undefined;
    const pathParts = itemPath.split('/');
    if (pathParts.length <= 1) return undefined;
    // Remove the last part to get the parent path
    return pathParts.slice(0, -1).join('/');
  };

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
          className="flex items-center justify-between px-4 py-2 hover:bg-gray-700 cursor-pointer"
          onClick={handleToggle}
        >
          <Box className="flex items-center gap-2 flex-1">
            {renderIcon()}
            {item.hasIndex ? (
              <Link 
                href={`/docs/${item.path}`} 
                onClick={(e) => {
                  e.stopPropagation();
                  handleNavigate();
                }}
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
          <IconButton 
            size="small" 
            className="text-gray-400"
            onClick={(e) => {
              e.stopPropagation();
              handleToggle();
            }}
          >
            {isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        </Box>
        <Collapse in={isExpanded}>
          <Box className="ml-4">
            {item.children?.map((child, index) => (
              <SidebarItem
                key={index}
                item={child}
                level={level + 1}
                onNavigate={onNavigate}
                expandedItems={expandedItems}
                onToggleExpanded={onToggleExpanded}
              />
            ))}
          </Box>
        </Collapse>
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
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const handleToggleExpanded = (itemPath: string, parentPath?: string) => {
    setExpandedItems(prev => {
      const newSet = new Set(prev);
      
      if (newSet.has(itemPath)) {
        // If item is already expanded, just collapse it
        newSet.delete(itemPath);
      } else {
        // If expanding a new item, first collapse any siblings at the same level
        if (parentPath) {
          // Find and collapse all items that have the same parent
          const itemsToCollapse: string[] = [];
          prev.forEach(expandedPath => {
            if (expandedPath !== itemPath && expandedPath.startsWith(parentPath + '/')) {
              const expandedPathParts = expandedPath.split('/');
              const itemPathParts = itemPath.split('/');
              // Check if they're at the same level (same number of path segments)
              if (expandedPathParts.length === itemPathParts.length) {
                itemsToCollapse.push(expandedPath);
              }
            }
          });
          itemsToCollapse.forEach(path => newSet.delete(path));
        } else {
          // Handle root level items (no parent path)
          // Collapse all other root level items
          const itemsToCollapse: string[] = [];
          prev.forEach(expandedPath => {
            if (expandedPath !== itemPath) {
              const expandedPathParts = expandedPath.split('/');
              const itemPathParts = itemPath.split('/');
              // Check if they're both at root level (only one path segment)
              if (expandedPathParts.length === 1 && itemPathParts.length === 1) {
                itemsToCollapse.push(expandedPath);
              }
            }
          });
          itemsToCollapse.forEach(path => newSet.delete(path));
        }
        
        // Add the new item
        newSet.add(itemPath);
      }
      
      return newSet;
    });
  };

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
            expandedItems={expandedItems}
            onToggleExpanded={handleToggleExpanded}
          />
        ))}
      </Box>
    </Box>
  );
};
