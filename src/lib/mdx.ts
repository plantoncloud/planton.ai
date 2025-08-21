import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

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

const postsDirectory = path.join(process.cwd(), 'workspace/blog-content');

export function getBlogPostBySlug(slug: string): BlogPost | null {
  try {
    // Try .mdx first, then .md
    let fullPath = path.join(postsDirectory, `${slug}.mdx`);
    
    if (!fs.existsSync(fullPath)) {
      fullPath = path.join(postsDirectory, `${slug}.md`);
      if (!fs.existsSync(fullPath)) {
        return null;
      }
    }

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
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    return null;
  }
}

export function getAllBlogPosts(): BlogPost[] {
  try {
    if (!fs.existsSync(postsDirectory)) {
      return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames
      .filter((fileName) => fileName.endsWith('.mdx') || fileName.endsWith('.md'))
      .map((fileName) => {
        const slug = fileName.replace(/\.(mdx|md)$/, '');
        return getBlogPostBySlug(slug);
      })
      .filter((post): post is BlogPost => post !== null)
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

/**
 * Reconstructs MDX content with frontmatter from a BlogPost object.
 * This function takes a parsed BlogPost and recreates the original MDX string
 * format that can be passed to the MDXRenderer component.
 * 
 * @param post - The BlogPost object containing frontmatter and content
 * @returns A complete MDX string with frontmatter and content
 */
export function reconstructMDXContent(post: BlogPost): string {
  const authorYaml = post.author.map(author => {
    if (typeof author === 'string') {
      return `  - ${author}`;
    } else {
      return `  - name: ${author.name}
    title: ${author.title}
    ${author.bio ? `bio: ${author.bio}` : ''}
    ${author.profilePicture ? `profilePicture: ${author.profilePicture}` : ''}
    ${author.twitter ? `twitter: ${author.twitter}` : ''}
    ${author.github ? `github: ${author.github}` : ''}
    ${author.linkedin ? `linkedin: ${author.linkedin}` : ''}
    ${author.website ? `website: ${author.website}` : ''}`;
    }
  }).join('\n');

  return `---
title: "${post.title}"
date: ${post.date}
author:
${authorYaml}
${post.featuredImage ? `featuredImage: >-\n  ${post.featuredImage}` : ''}
${post.featuredImageType ? `featuredImageType: ${post.featuredImageType}` : ''}
${post.featuredVideo ? `featuredVideo: ${post.featuredVideo}` : ''}
tags:
${post.tags.map(tag => `  - ${tag}`).join('\n')}
${post.excerpt ? `excerpt: "${post.excerpt}"` : ''}
---

${post.content}`;
} 