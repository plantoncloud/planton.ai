'use client';

import React, { useEffect, useState } from 'react';
import { BlogPost } from '@/lib/mdx';
import Avatar from '@/app/components/ui/Avatar';

interface RightSidebarProps {
  posts: BlogPost[];
  currentSlug?: string;
}

interface HeadingItem {
  id: string;
  text: string;
  level: number;
}

const RightSidebar: React.FC<RightSidebarProps> = ({ posts, currentSlug }) => {
  const [headings, setHeadings] = useState<HeadingItem[]>([]);
  const [currentPost, setCurrentPost] = useState<BlogPost | null>(null);

  // Get current post data
  useEffect(() => {
    if (currentSlug) {
      const post = posts.find(p => p.slug === currentSlug);
      setCurrentPost(post || null);
    }
  }, [currentSlug, posts]);

  // Extract headings from the current post content
  useEffect(() => {
    if (currentPost?.content) {
      const headingRegex = /^(#{1,6})\s+(.+)$/gm;
      const extractedHeadings: HeadingItem[] = [];
      let match;

      while ((match = headingRegex.exec(currentPost.content)) !== null) {
        const level = match[1].length;
        const text = match[2].trim();
        const id = text
          .toLowerCase()
          .replace(/[^a-z0-9\s-]/g, '')
          .replace(/\s+/g, '-');

        extractedHeadings.push({ id, text, level });
      }

      setHeadings(extractedHeadings);
    }
  }, [currentPost]);

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

  if (!currentPost) {
    return (
      <div className="w-80 bg-black/95 border-l border-gray-800 h-full flex flex-col">
        <div className="p-4 flex-shrink-0">
          <p className="text-gray-400">Select a blog post to view details</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-80 bg-black/95 border-l border-gray-800 h-full flex flex-col">
      {/* Posted by Section - Fixed */}
      {currentPost.author && currentPost.author.length > 0 && (
        <div className="p-4 border-b border-gray-800 flex-shrink-0">
          <h3 className="text-lg font-semibold text-white mb-4">
            Posted by
          </h3>
          {currentPost.author.map((author, index) => (
            <div key={index} className="mb-4">
              <div className="flex items-start gap-3">
                {author.profilePicture ? (
                  <Avatar
                    src={author.profilePicture}
                    alt={author.name}
                    size="md"
                  />
                ) : (
                  <Avatar
                    alt={author.name}
                    size="md"
                  />
                )}
                <div className="flex-1">
                  <h4 className="font-semibold text-white text-sm">{author.name}</h4>
                  <p className="text-xs text-gray-400">{author.title}</p>
                  {author.bio && (
                    <p className="text-xs text-gray-400 mt-1">{author.bio}</p>
                  )}
                  <div className="flex gap-2 mt-2">
                    {author.twitter && (
                      <a
                        href={author.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
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
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
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
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
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
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* On this page Section - Scrollable */}
      {headings.length > 0 && (
        <div className="flex-1 overflow-y-auto p-4">
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
  );
};

export default RightSidebar; 