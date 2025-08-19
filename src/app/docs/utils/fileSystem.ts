import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const DOCS_ROOT = path.join(process.cwd(), 'workspace/final-content');

export interface DocItem {
  name: string;
  type: 'file' | 'directory';
  path: string;
  children?: DocItem[];
}

export interface MarkdownContent {
  content: string;
  data: {
    title?: string;
    description?: string;
    [key: string]: string | undefined;
  };
}

export async function getMarkdownContent(filePath: string): Promise<MarkdownContent> {
  // Try different file extensions and paths
  const possiblePaths = [
    path.join(DOCS_ROOT, `${filePath}.md`),
    path.join(DOCS_ROOT, filePath, 'index.md'),
    path.join(DOCS_ROOT, filePath, 'README.md'),
  ];

  for (const filePath of possiblePaths) {
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { content, data } = matter(fileContent);
      return { content, data };
    }
  }

  // If no markdown file found, try to find any .md file in the directory
  const dirPath = path.join(DOCS_ROOT, filePath);
  if (fs.existsSync(dirPath) && fs.statSync(dirPath).isDirectory()) {
    const files = fs.readdirSync(dirPath);
    const mdFile = files.find(file => file.endsWith('.md'));
    if (mdFile) {
      const fileContent = fs.readFileSync(path.join(dirPath, mdFile), 'utf-8');
      const { content, data } = matter(fileContent);
      return { content, data };
    }
  }

  throw new Error(`No markdown file found for path: ${filePath}`);
}

export async function getDocumentationStructure(): Promise<DocItem[]> {
  return buildStructure(DOCS_ROOT);
}

function buildStructure(dirPath: string, relativePath: string = ''): DocItem[] {
  if (!fs.existsSync(dirPath)) {
    return [];
  }

  const items = fs.readdirSync(dirPath);
  const structure: DocItem[] = [];

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
    } else if (item.endsWith('.md')) {
      // Skip certain files that are not meant for documentation
      if (!item.startsWith('prompt.') && !item.startsWith('response.') && !item.includes('.not-good.')) {
        structure.push({
          name: item.replace('.md', ''),
          type: 'file',
          path: itemRelativePath.replace('.md', ''),
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

export function getDocPathFromSlug(slug: string[]): string {
  return slug.join('/');
}

export function getSlugFromPath(filePath: string): string[] {
  return filePath.split('/').filter(Boolean);
}
