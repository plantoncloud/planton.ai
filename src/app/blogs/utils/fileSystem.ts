import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BLOGS_ROOT = path.join(process.cwd(), 'workspace/blogs-content');

export interface BlogItem {
  name: string;
  type: 'file' | 'directory';
  path: string;
  children?: BlogItem[];
}

export interface MarkdownContent {
  content: string;
  data: {
    title?: string;
    description?: string;
    [key: string]: string | undefined;
  };
}

// Supported markdown file extensions
const MARKDOWN_EXTENSIONS = ['.md', '.mdx'];

export async function getMarkdownContent(filePath: string): Promise<MarkdownContent> {
  // Try different file extensions and paths
  const possiblePaths = [
    // Try with .mdx first, then .md
    path.join(BLOGS_ROOT, `${filePath}.mdx`),
    path.join(BLOGS_ROOT, `${filePath}.md`),
    path.join(BLOGS_ROOT, filePath, 'index.mdx'),
    path.join(BLOGS_ROOT, filePath, 'index.md'),
    path.join(BLOGS_ROOT, filePath, 'README.mdx'),
    path.join(BLOGS_ROOT, filePath, 'README.md'),
  ];

  for (const filePath of possiblePaths) {
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { content, data } = matter(fileContent);
      return { content, data };
    }
  }

  // If no markdown file found, try to find any .md or .mdx file in the directory
  const dirPath = path.join(BLOGS_ROOT, filePath);
  if (fs.existsSync(dirPath) && fs.statSync(dirPath).isDirectory()) {
    const files = fs.readdirSync(dirPath);
    const markdownFile = files.find(file => 
      MARKDOWN_EXTENSIONS.some(ext => file.endsWith(ext))
    );
    if (markdownFile) {
      const fileContent = fs.readFileSync(path.join(dirPath, markdownFile), 'utf-8');
      const { content, data } = matter(fileContent);
      return { content, data };
    }
  }

  throw new Error(`No markdown file found for path: ${filePath}`);
}

export async function getBlogsStructure(): Promise<BlogItem[]> {
  return buildStructure(BLOGS_ROOT);
}

function buildStructure(dirPath: string, relativePath: string = ''): BlogItem[] {
  if (!fs.existsSync(dirPath)) {
    return [];
  }

  const items = fs.readdirSync(dirPath);
  const structure: BlogItem[] = [];

  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    const itemRelativePath = path.join(relativePath, item);

    if (stat.isDirectory()) {
      const children = buildStructure(fullPath, itemRelativePath);
      if (children.length > 0) {
        structure.push({
          name: item,
          type: 'directory',
          path: itemRelativePath,
          children,
        });
      }
    } else if (MARKDOWN_EXTENSIONS.some(ext => item.endsWith(ext))) {
      // Skip certain files that are not meant for blog posts
      if (!item.startsWith('prompt.') && !item.startsWith('response.') && !item.includes('.not-good.')) {
        // Remove the file extension for the path
        const nameWithoutExt = item.replace(/\.(md|mdx)$/, '');
        const pathWithoutExt = itemRelativePath.replace(/\.(md|mdx)$/, '');
        
        structure.push({
          name: nameWithoutExt,
          type: 'file',
          path: pathWithoutExt,
        });
      }
    }
  }

  return structure.sort((a, b) => {
    // Directories first, then files
    if (a.type !== b.type) {
      return a.type === 'directory' ? -1 : 1;
    }
    return a.name.localeCompare(b.name);
  });
}

export function getBlogPathFromSlug(slug: string[]): string {
  return slug.join('/');
}

export function getSlugFromPath(filePath: string): string[] {
  return filePath.split('/').filter(Boolean);
}

// Helper function to check if a file is a markdown file
export function isMarkdownFile(filename: string): boolean {
  return MARKDOWN_EXTENSIONS.some(ext => filename.endsWith(ext));
}

// Helper function to get the file extension of a markdown file
export function getMarkdownExtension(filename: string): string | null {
  for (const ext of MARKDOWN_EXTENSIONS) {
    if (filename.endsWith(ext)) {
      return ext;
    }
  }
  return null;
} 