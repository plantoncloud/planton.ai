import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BLOG_DIRECTORY } from '@/lib/constants';

export interface Author {
  name: string;
  title: string;
  bio?: string;
  profilePicture?: string;
  twitter?: string;
  github?: string;
  linkedin?: string;
  website?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: Author[];
  featuredImage?: string;
  featuredImageType?: string;
  featuredVideo?: string;
  tags: string[];
  excerpt?: string;
  content: string;
}

export class MDXParser {
  static reconstructMDX(input: string): string {
    const { data, content } = matter(input);
    
    const authorYaml = (data.author || []).map((author: any) => {
      if (typeof author === 'string') {
        return `  - ${author}`;
      } else {
        const authorFields = [`    title: ${author.title}`];
        if (author.bio) authorFields.push(`    bio: ${author.bio}`);
        if (author.profilePicture) authorFields.push(`    profilePicture: ${author.profilePicture}`);
        if (author.twitter) authorFields.push(`    twitter: ${author.twitter}`);
        if (author.github) authorFields.push(`    github: ${author.github}`);
        if (author.linkedin) authorFields.push(`    linkedin: ${author.linkedin}`);
        if (author.website) authorFields.push(`    website: ${author.website}`);
        
        return `  - name: ${author.name}\n${authorFields.join('\n')}`;
      }
    }).join('\n');

    const frontmatterFields = [
      `title: "${data.title || ''}"`,
      `date: ${data.date || new Date().toISOString()}`,
      `author:\n${authorYaml}`
    ];

    if (data.featuredImage) {
      frontmatterFields.push(`featuredImage: >-\n  ${data.featuredImage}`);
    }
    
    if (data.featuredImageType) {
      frontmatterFields.push(`featuredImageType: ${data.featuredImageType}`);
    }
    
    if (data.featuredVideo) {
      frontmatterFields.push(`featuredVideo: ${data.featuredVideo}`);
    }
    
    if (data.tags && data.tags.length > 0) {
      frontmatterFields.push(`tags:\n${data.tags.map((tag: any) => `  - ${tag}`).join('\n')}`);
    }
    
    if (data.excerpt) {
      frontmatterFields.push(`excerpt: "${data.excerpt}"`);
    }

    return `---\n${frontmatterFields.join('\n')}\n---\n\n${content}`;
  }
}

export function getBlogPostContentBySlug(slug: string): string {
  try {
    let fullPath = path.join(BLOG_DIRECTORY, `${slug}.mdx`);
    
    if (!fs.existsSync(fullPath)) {
      fullPath = path.join(BLOG_DIRECTORY, `${slug}.md`);
      if (!fs.existsSync(fullPath)) {
        return '';
      }
    }

    return fs.readFileSync(fullPath, 'utf8');
  } catch (error) {
    return '';
  }
}

export function getAllBlogPosts(): BlogPost[] {
  try {
    if (!fs.existsSync(BLOG_DIRECTORY)) {
      return [];
    }

    const fileNames = fs.readdirSync(BLOG_DIRECTORY);
    const allPostsData = fileNames
      .filter((fileName) => fileName.endsWith('.mdx') || fileName.endsWith('.md'))
      .map((fileName) => {
        const slug = fileName.replace(/\.(mdx|md)$/, '');
        const fullPath = path.join(BLOG_DIRECTORY, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);
        return {
          slug,
          title: data.title,
          date: data.date,
          author: data.author || [],
          featuredImage: data.featuredImage,
          featuredImageType: data.featuredImageType,
          featuredVideo: data.featuredVideo,
          tags: data.tags || [],
          excerpt: data.excerpt,
          content,
        };
      })
      .filter((post) => post !== null)
      .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

    return allPostsData;
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}

export function getBlogPostsByTag(tag: string): BlogPost[] {
  const allPosts = getAllBlogPosts();
  return allPosts.filter((post) => post.tags.includes(tag));
}

export function getBlogPostsByAuthor(author: string): BlogPost[] {
  const allPosts = getAllBlogPosts();
  return allPosts.filter((post) => post.author.some(a => a.name === author));
}
