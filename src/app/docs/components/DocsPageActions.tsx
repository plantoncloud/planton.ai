'use client';

import React, { useState } from 'react';
import {
  Button,
  Stack,
  Typography,
  IconButton,
  Snackbar,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  ContentCopy,
  Visibility as ViewIcon,
  KeyboardArrowDown as ChevronDownIcon,
} from '@mui/icons-material';

interface DocsPageActionsProps {
  markdownContent: string;
  title?: string;
}

export const DocsPageActions: React.FC<DocsPageActionsProps> = ({
  markdownContent,
  title = 'Documentation',
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [showCopied, setShowCopied] = useState(false);
  const [showViewDialog, setShowViewDialog] = useState(false);
  const [copiedText, setCopiedText] = useState('');

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleCopyAsMarkdown = async () => {
    try {
      await navigator.clipboard.writeText(markdownContent);
      setCopiedText('Markdown copied to clipboard!');
      setShowCopied(true);
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = markdownContent;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopiedText('Markdown copied to clipboard!');
      setShowCopied(true);
    }
    handleMenuClose();
  };

  const handleViewAsMarkdown = () => {
    setShowViewDialog(true);
    handleMenuClose();
  };

  const handleCloseViewDialog = () => {
    setShowViewDialog(false);
  };

  const handleCloseSnackbar = () => {
    setShowCopied(false);
  };

  return (
    <>
      <Stack direction="row" className="items-center justify-end gap-2">
        <Button
          onClick={handleMenuOpen}
          variant="outlined"
          size="small"
          className="hover:!bg-gray-700 text-gray-600 hover:text-white border-gray-300 hover:border-gray-700 rounded-lg px-3 py-2 normal-case font-medium shadow-sm transition-all duration-200"
          startIcon={
            <ContentCopy className="text-gray-400 hover:text-gray-700 transition-colors duration-200" />
          }
          endIcon={
            <ChevronDownIcon className="text-gray-400 hover:text-gray-700 transition-colors duration-200" />
          }
        >
          Copy page
        </Button>
      </Stack>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        slotProps={{
          paper: {
            className: 'bg-gray-800 border border-gray-700',
          },
        }}
      >
        <MenuItem onClick={handleCopyAsMarkdown} className="text-gray-300 hover:!bg-blue-600/50">
          <ListItemIcon>
            <ContentCopy className="text-gray-400" />
          </ListItemIcon>
          <ListItemText primary="Copy as Markdown" />
        </MenuItem>
        <MenuItem onClick={handleViewAsMarkdown} className="text-gray-300 hover:!bg-blue-600/50">
          <ListItemIcon>
            <ViewIcon className="text-gray-400" />
          </ListItemIcon>
          <ListItemText primary="View as Markdown" />
        </MenuItem>
      </Menu>

      {/* Snackbar for copy confirmation */}
      <Snackbar
        open={showCopied}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" className="bg-green-600 text-white">
          {copiedText}
        </Alert>
      </Snackbar>

      {/* Dialog for viewing markdown */}
      <Dialog
        open={showViewDialog}
        onClose={handleCloseViewDialog}
        maxWidth="md"
        fullWidth
        slotProps={{
          paper: {
            className: 'bg-gray-900 border border-gray-700',
          },
        }}
      >
        <DialogTitle className="text-white border-b border-gray-700">
          <Box className="flex items-center justify-between">
            <Typography variant="h6">{title} - Markdown Source</Typography>
            <IconButton
              onClick={handleCopyAsMarkdown}
              className="text-gray-400 hover:text-white transition-colors duration-200"
              size="small"
            >
              <ContentCopy />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent className="p-0">
          <Box className="p-4">
            <pre className="text-sm text-gray-300 bg-gray-800 p-4 rounded-lg overflow-x-auto max-h-96">
              <code>{markdownContent}</code>
            </pre>
          </Box>
        </DialogContent>
        <DialogActions className="border-t border-gray-700 p-4">
          <Button onClick={handleCloseViewDialog} className="text-gray-300 hover:text-white transition-colors duration-200">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
