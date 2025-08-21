'use client';

import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';
import matter from 'gray-matter';
import { formatDate } from '@/lib/utils';
import { Author } from '@/lib/mdx';

interface BlogPost {
  title: string;
  date: string;
  author: Author[];
  featuredImage?: string;
  featuredImageType?: string;
  featuredVideo?: string;
  tags: string[];
  content: string;
}

interface MDXRendererProps {
  mdxContent: string;
}

interface HeadingItem {
  id: string;
  text: string;
  level: number;
}

const MDXRenderer: React.FC<MDXRendererProps> = ({ mdxContent }) => {
  // Parse the MDX content with gray-matter
  const { data, content } = matter(mdxContent);
  const post: BlogPost = data as BlogPost;
  const [headings, setHeadings] = useState<HeadingItem[]>([]);
  const [brokenImages, setBrokenImages] = useState<Set<string>>(new Set());

  // Extract headings from the content
  useEffect(() => {
    const headingRegex = /^(#{1,6})\s+(.+)$/gm;
    const extractedHeadings: HeadingItem[] = [];
    let match;

    while ((match = headingRegex.exec(content)) !== null) {
      const level = match[1].length;
      const text = match[2].trim();
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-');

      extractedHeadings.push({ id, text, level });
    }

    setHeadings(extractedHeadings);
  }, [content]);

  // Handle image load errors
  const handleImageError = (imageUrl: string) => {
    console.log('Image failed to load:', imageUrl);
    setBrokenImages(prev => new Set(prev).add(imageUrl));
  };

  // Handle image load success
  const handleImageLoad = (imageUrl: string) => {
    console.log('Image loaded successfully:', imageUrl);
    setBrokenImages(prev => {
      const newSet = new Set(prev);
      newSet.delete(imageUrl);
      return newSet;
    });
  };

  // Handle smooth scrolling for navigation links
  const handleNavigationClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
    // Update the URL hash
    window.history.pushState(null, '', `#${targetId}`);
    
    // Smooth scroll to the target element
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content - 3 columns */}
          <div className="lg:col-span-3">
            <article>
              {/* Header */}
              <header className="mb-8">
                <h1 className="text-4xl font-bold text-white mb-4">
                  {post.title}
                </h1>
                
                <div className="flex items-center gap-4 text-gray-300 mb-6">
                  <time dateTime={post.date}>
                    {formatDate(post.date)}
                  </time>
                  <span>•</span>
                  <div className="flex gap-2">
                    {post.author.map((author, index) => (
                      <span key={index} className="font-medium">
                        {author.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex gap-2 mb-6">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-900 text-blue-200 text-sm font-medium rounded-full border border-blue-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Featured Image */}
                {post.featuredImage && (
                  <div className="mb-6">
                    <img
                      src={post.featuredImage}
                      alt={post.title}
                      className={`w-full rounded-lg shadow-lg ${
                        post.featuredImageType === 'full' ? 'h-96 object-cover' : 'max-h-96 object-contain'
                      }`}
                    />
                  </div>
                )}

                {/* Featured Video */}
                {post.featuredVideo && (
                  <div className="mb-6">
                    <div className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden shadow-lg">
                      <iframe
                        src={post.featuredVideo}
                        title={post.title}
                        className="absolute top-0 left-0 w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                )}
              </header>

              {/* Content */}
              <div className="prose prose-lg max-w-none prose-invert">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw, rehypeHighlight]}
                  components={{
                    h1: ({ children }) => {
                      const id = children?.toString()
                        .toLowerCase()
                        .replace(/[^a-z0-9\s-]/g, '')
                        .replace(/\s+/g, '-');
                      
                      return (
                        <h1 id={id} className="text-3xl font-bold text-white mt-8 mb-4">
                          {children}
                        </h1>
                      );
                    },
                    h2: ({ children }) => {
                      const id = children?.toString()
                        .toLowerCase()
                        .replace(/[^a-z0-9\s-]/g, '')
                        .replace(/\s+/g, '-');
                      
                      return (
                        <h2 id={id} className="text-2xl font-bold text-white mt-6 mb-3">
                          {children}
                        </h2>
                      );
                    },
                    h3: ({ children }) => {
                      const id = children?.toString()
                        .toLowerCase()
                        .replace(/[^a-z0-9\s-]/g, '')
                        .replace(/\s+/g, '-');
                      
                      return (
                        <h3 id={id} className="text-xl font-bold text-white mt-5 mb-2">
                          {children}
                        </h3>
                      );
                    },
                    p: ({ children }) => (
                      <p className="text-gray-300 leading-relaxed mb-4">
                        {children}
                      </p>
                    ),
                    ul: ({ children }) => (
                      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
                        {children}
                      </ul>
                    ),
                    ol: ({ children }) => (
                      <ol className="list-decimal list-inside text-gray-300 mb-4 space-y-1">
                        {children}
                      </ol>
                    ),
                    li: ({ children }) => (
                      <li className="text-gray-300">
                        {children}
                      </li>
                    ),
                    strong: ({ children }) => (
                      <strong className="font-semibold text-white">
                        {children}
                      </strong>
                    ),
                    em: ({ children }) => (
                      <em className="italic text-gray-300">
                        {children}
                      </em>
                    ),
                    a: ({ href, children }) => (
                      <a
                        href={href}
                        className="text-blue-400 hover:text-blue-300 underline transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {children}
                      </a>
                    ),
                    // Custom image component that handles videos as video players
                    img: ({ src, alt }) => {
                      if (!src) return null;
                      
                      // Check if it's a video file
                      const isVideo = /\.(mp4|webm|ogg|mov|avi|mkv|wmv|flv)$/i.test(src);
                      
                      if (isVideo) {
                        // Render video files as actual video players
                        return (
                          <div className="my-4">
                            <video 
                              src={src}
                              controls
                              className="w-full max-w-full h-auto rounded-lg shadow-lg"
                              preload="metadata"
                              title={alt || 'Video content'}
                            >
                              Your browser does not support the video tag.
                            </video>
                            {alt && (
                              <p className="text-sm text-gray-400 mt-2 text-center">
                                {alt}
                              </p>
                            )}
                          </div>
                        );
                      }
                      
                      // For actual images, render normally
                      return (
                        <img 
                          src={src} 
                          alt={alt || ''} 
                          className="max-w-full h-auto rounded-lg shadow-lg my-4"
                        />
                      );
                    },
                    blockquote: ({ children }) => (
                      <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-400 my-4 bg-gray-800 py-2 rounded-r">
                        {children}
                      </blockquote>
                    ),
                    code: ({ children, className }) => {
                      const isInlineCode = !className;
                      
                      if (isInlineCode) {
                        // Inline code styling
                        return (
                          <code className="bg-gray-800 text-gray-200 px-1.5 py-0.5 rounded text-sm font-mono border border-gray-600">
                            {children}
                          </code>
                        );
                      }
                      
                      // Block code - let rehype-highlight handle the styling
                      return (
                        <code className={className}>
                          {children}
                        </code>
                      );
                    },
                    pre: ({ children }) => (
                      <pre className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto my-6 border border-gray-600 shadow-lg">
                        <code className="text-sm font-mono leading-relaxed">
                          {children}
                        </code>
                      </pre>
                    ),
                    hr: () => (
                      <hr className="border-gray-600 my-8" />
                    ),
                  }}
                >
                  {content}
                </ReactMarkdown>
              </div>
            </article>
          </div>

          {/* Right Sidebar - 1 column */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6 max-h-screen overflow-y-auto">
              {/* Posted by */}
              {post.author.map((author, index) => (
                <div key={index} className="bg-gray-800 rounded-lg shadow-lg border border-gray-700 p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Posted by
                  </h3>
                  <div className="flex items-start gap-4">
                    {author.profilePicture && !brokenImages.has(author.profilePicture) ? (
                      <img
                        src={author.profilePicture}
                        alt={author.name}
                        className="w-16 h-16 rounded-full object-cover"
                        onError={() => author.profilePicture && handleImageError(author.profilePicture)}
                        onLoad={() => author.profilePicture && handleImageLoad(author.profilePicture)}
                      />
                    ) : (
                      <div className="w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center">
                        <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                        </svg>
                      </div>
                    )}
                    <div className="flex-1">
                      <h4 className="font-semibold text-white">{author.name}</h4>
                      <p className="text-sm text-gray-400">{author.title}</p>
                      {author.bio && (
                        <p className="text-sm text-gray-400 mt-2">{author.bio}</p>
                      )}
                      <div className="flex gap-2 mt-3">
                        {author.twitter && (
                          <a
                            href={author.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                            </svg>
                          </a>
                        )}
                        {author.github && (
                          <a
                            href={author.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-gray-300"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                          </a>
                        )}
                        {author.linkedin && (
                          <a
                            href={author.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-400"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                          </a>
                        )}
                        {author.website && (
                          <a
                            href={author.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-gray-300"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* On this page */}
              {headings.length > 0 && (
                <div className="bg-gray-800 rounded-lg shadow-lg border border-gray-700 p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    On this page
                  </h3>
                  <nav className="space-y-2">
                    {headings.map((heading) => (
                      <a
                        key={heading.id}
                        href={`#${heading.id}`}
                        onClick={(e) => handleNavigationClick(e, heading.id)}
                        className={`block text-sm text-gray-400 hover:text-white transition-colors cursor-pointer ${
                          heading.level === 1 ? 'font-semibold' : 
                          heading.level === 2 ? 'ml-0' : 
                          heading.level === 3 ? 'ml-4' : 'ml-6'
                        }`}
                      >
                        {heading.text}
                      </a>
                    ))}
                  </nav>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MDXRenderer; 