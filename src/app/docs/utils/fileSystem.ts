import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const DOCS_ROOT = path.join(process.cwd(), 'workspace/docs-content');

export interface DocItem {
  name: string;
  type: 'file' | 'directory';
  path: string;
  children?: DocItem[];
  // Enhanced properties for dynamic sidebar
  title?: string;
  description?: string;
  icon?: string;
  category?: string;
  order?: number;
  badge?: string; // For "Popular", "Beta", etc.
  isExternal?: boolean;
  externalUrl?: string;
}

export interface MarkdownContent {
  content: string;
  data: {
    title?: string;
    description?: string;
    icon?: string;
    category?: string;
    order?: number;
    badge?: string;
    isExternal?: boolean;
    externalUrl?: string;
    [key: string]: string | number | boolean | undefined;
  };
}

// Icon mapping for different content types
const iconMap: Record<string, string> = {
  // Default icons
  'chart-line': '📊',
  'flag': '🚩',
  'eye': '👁️',
  'gear': '⚙️',
  'users': '👥',
  'database': '🗄️',
  'code': '💻',
  'rocket': '🚀',
  'book': '📚',
  'docs': '📖',
  'community': '👥',
  'company': '🏢',
  'handbook': '📋',
  'guide': '🗺️',
  'tutorial': '🎓',
  'api': '🔌',
  'sdk': '🛠️',
  'integration': '🔗',
  'migration': '🔄',
  'deployment': '🚀',
  'monitoring': '📊',
  'security': '🔒',
  'performance': '⚡',
  'analytics': '📈',
  'experiment': '🧪',
  'feature': '✨',
  'survey': '📝',
  'error': '❌',
  'session': '🎬',
  'replay': '▶️',
  'pipeline': '🔗',
  'warehouse': '🏭',
  'ai': '🤖',
  'llm': '🧠',
  'max': '🎯',
  'product': '📦',
  'web': '🌐',
  'mobile': '📱',
  'desktop': '💻',
  'cloud': '☁️',
  'self-host': '🏠',
  'migrate': '🔄',
  'reverse-proxy': '🔄',
  'billing': '💰',
  'privacy': '🔒',
  'contribute': '🤝',
  'support': '🆘',
  'changelog': '📝',
  'roadmap': '🗺️',
  'blog': '📰',
  'careers': '💼',
  'investors': '💎',
  'press': '📢',
  'faq': '❓',
  'status': '📊',
  'soc2': '🛡️',
  'hipaa': '🏥',
  'gdpr': '🇪🇺',
  'ccpa': '🇺🇸',
  'terms': '📜',
  'policy': '📋'
};

// Category-based icon mapping
const categoryIcons: Record<string, string> = {
  'products': '📦',
  'docs': '📚',
  'community': '👥',
  'company': '🏢',
  'handbook': '📖',
  'solutions': '💡',
  'open-source': '🔓',
  'general-pages': '📄',
  'by-use-case': '🎯',
  'chat-ops': '💬',
  'deployment': '🚀',
  'monitoring': '📊',
  'security': '🔒',
  'performance': '⚡',
  'analytics': '📈',
  'experiments': '🧪',
  'feature-flags': '🚩',
  'session-replay': '🎬',
  'error-tracking': '❌',
  'surveys': '📝',
  'data-pipelines': '🔗',
  'data-warehouse': '🏭',
  'llm-observability': '🤖',
  'max-ai': '🎯'
};

// Default icons for different file types
const getDefaultIcon = (type: string, name: string, category?: string): string => {
  // Check if there's a specific icon in the name
  const nameLower = name.toLowerCase();
  
  // Check for specific patterns in the name
  if (nameLower.includes('api')) return iconMap['api'];
  if (nameLower.includes('sdk')) return iconMap['sdk'];
  if (nameLower.includes('guide')) return iconMap['guide'];
  if (nameLower.includes('tutorial')) return iconMap['tutorial'];
  if (nameLower.includes('integration')) return iconMap['integration'];
  if (nameLower.includes('migration')) return iconMap['migration'];
  if (nameLower.includes('deployment')) return iconMap['deployment'];
  if (nameLower.includes('monitoring')) return iconMap['monitoring'];
  if (nameLower.includes('security')) return iconMap['security'];
  if (nameLower.includes('performance')) return iconMap['performance'];
  if (nameLower.includes('analytics')) return iconMap['analytics'];
  if (nameLower.includes('experiment')) return iconMap['experiment'];
  if (nameLower.includes('feature')) return iconMap['feature'];
  if (nameLower.includes('survey')) return iconMap['survey'];
  if (nameLower.includes('error')) return iconMap['error'];
  if (nameLower.includes('session')) return iconMap['session'];
  if (nameLower.includes('replay')) return iconMap['replay'];
  if (nameLower.includes('flag')) return iconMap['flag'];
  if (nameLower.includes('pipeline')) return iconMap['pipeline'];
  if (nameLower.includes('warehouse')) return iconMap['warehouse'];
  if (nameLower.includes('ai')) return iconMap['ai'];
  if (nameLower.includes('llm')) return iconMap['llm'];
  if (nameLower.includes('max')) return iconMap['max'];
  if (nameLower.includes('product')) return iconMap['product'];
  if (nameLower.includes('web')) return iconMap['web'];
  if (nameLower.includes('mobile')) return iconMap['mobile'];
  if (nameLower.includes('desktop')) return iconMap['desktop'];
  if (nameLower.includes('cloud')) return iconMap['cloud'];
  if (nameLower.includes('self-host')) return iconMap['self-host'];
  if (nameLower.includes('migrate')) return iconMap['migrate'];
  if (nameLower.includes('reverse-proxy')) return iconMap['reverse-proxy'];
  if (nameLower.includes('billing')) return iconMap['billing'];
  if (nameLower.includes('privacy')) return iconMap['privacy'];
  if (nameLower.includes('contribute')) return iconMap['contribute'];
  if (nameLower.includes('support')) return iconMap['support'];
  if (nameLower.includes('changelog')) return iconMap['changelog'];
  if (nameLower.includes('roadmap')) return iconMap['roadmap'];
  if (nameLower.includes('blog')) return iconMap['blog'];
  if (nameLower.includes('careers')) return iconMap['careers'];
  if (nameLower.includes('investors')) return iconMap['investors'];
  if (nameLower.includes('press')) return iconMap['press'];
  if (nameLower.includes('faq')) return iconMap['faq'];
  if (nameLower.includes('status')) return iconMap['status'];
  if (nameLower.includes('soc2')) return iconMap['soc2'];
  if (nameLower.includes('hipaa')) return iconMap['hipaa'];
  if (nameLower.includes('gdpr')) return iconMap['gdpr'];
  if (nameLower.includes('ccpa')) return iconMap['ccpa'];
  if (nameLower.includes('terms')) return iconMap['terms'];
  if (nameLower.includes('policy')) return iconMap['policy'];
  
  // Check category-based icons
  if (category && categoryIcons[category]) {
    return categoryIcons[category];
  }
  
  // Default icons based on type
  return type === 'directory' ? '📁' : '📄';
};

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
        // Try to get metadata from index.md or README.md
        let metadata: MarkdownContent['data'] = {};
        const indexFiles = ['index.md', 'README.md'];
        
        for (const indexFile of indexFiles) {
          const indexPath = path.join(fullPath, indexFile);
          if (fs.existsSync(indexPath)) {
            try {
              const fileContent = fs.readFileSync(indexPath, 'utf-8');
              const { data } = matter(fileContent);
              metadata = data;
              break;
            } catch (error) {
              console.warn(`Failed to parse metadata from ${indexPath}:`, error);
            }
          }
        }

        const category = relativePath.split('/')[0] || item;
        
        structure.push({
          name: item,
          type: 'directory',
          path: itemRelativePath,
          children,
          title: metadata.title || formatName(item),
          description: metadata.description,
          icon: metadata.icon || getDefaultIcon('directory', item, category),
          category,
          order: metadata.order || 0,
          badge: metadata.badge,
          isExternal: metadata.isExternal || false,
          externalUrl: metadata.externalUrl
        });
      }
    } else if (item.endsWith('.md')) {
      // Skip certain files that are not meant for documentation
      if (!item.startsWith('prompt.') && !item.startsWith('response.') && !item.includes('.not-good.')) {
        try {
          const fileContent = fs.readFileSync(fullPath, 'utf-8');
          const { data } = matter(fileContent);
          const category = relativePath.split('/')[0] || 'general';
          
          structure.push({
            name: item.replace('.md', ''),
            type: 'file',
            path: itemRelativePath.replace('.md', ''),
            title: data.title || formatName(item.replace('.md', '')),
            description: data.description,
            icon: data.icon || getDefaultIcon('file', item.replace('.md', ''), category),
            category,
            order: data.order || 0,
            badge: data.badge,
            isExternal: data.isExternal || false,
            externalUrl: data.externalUrl
          });
        } catch (error) {
          console.warn(`Failed to parse metadata from ${fullPath}:`, error);
          // Fallback without metadata
          const category = relativePath.split('/')[0] || 'general';
          structure.push({
            name: item.replace('.md', ''),
            type: 'file',
            path: itemRelativePath.replace('.md', ''),
            title: formatName(item.replace('.md', '')),
            icon: getDefaultIcon('file', item.replace('.md', ''), category),
            category,
            order: 0
          });
        }
      }
    }
  }

  // Sort by order first, then by type, then by name
  return structure.sort((a, b) => {
    // First by order
    if (a.order !== b.order) {
      return (a.order || 0) - (b.order || 0);
    }
    // Then by type (directories first)
    if (a.type !== b.type) {
      return a.type === 'directory' ? -1 : 1;
    }
    // Finally by name
    return a.name.localeCompare(b.name);
  });
}

export function getDocPathFromSlug(slug: string[]): string {
  return slug.join('/');
}

export function getSlugFromPath(filePath: string): string[] {
  return filePath.split('/').filter(Boolean);
}

function formatName(name: string): string {
  // Convert kebab-case or snake_case to Title Case
  return name
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, l => l.toUpperCase())
    .replace(/\s+/g, ' ')
    .trim();
}
