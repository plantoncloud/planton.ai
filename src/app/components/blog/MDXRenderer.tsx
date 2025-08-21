'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';
import matter from 'gray-matter';
import { formatDate } from '@/lib/utils';

interface BlogPost {
  title: string;
  date: string;
  author: string[];
  featuredImage?: string;
  featuredImageType?: string;
  featuredVideo?: string;
  tags: string[];
  content: string;
}

interface MDXRendererProps {
  mdxContent: string;
}

const MDXRenderer: React.FC<MDXRendererProps> = ({ mdxContent }) => {
  // Parse the MDX content with gray-matter
  const { data, content } = matter(mdxContent);
  const post: BlogPost = data as BlogPost;

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {post.title}
        </h1>
        
        <div className="flex items-center gap-4 text-gray-600 mb-6">
          <time dateTime={post.date}>
            {formatDate(post.date)}
          </time>
          <span>•</span>
          <div className="flex gap-2">
            {post.author.map((author, index) => (
              <span key={index} className="font-medium">
                {author}
              </span>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div className="flex gap-2 mb-6">
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
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
      <div className="prose prose-lg max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw, rehypeHighlight]}
          components={{
            h1: ({ children }) => (
              <h1 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                {children}
              </h1>
            ),
            h2: ({ children }) => (
              <h2 className="text-2xl font-bold text-gray-900 mt-6 mb-3">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-xl font-bold text-gray-900 mt-5 mb-2">
                {children}
              </h3>
            ),
            p: ({ children }) => (
              <p className="text-gray-700 leading-relaxed mb-4">
                {children}
              </p>
            ),
            ul: ({ children }) => (
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                {children}
              </ul>
            ),
            ol: ({ children }) => (
              <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-1">
                {children}
              </ol>
            ),
            li: ({ children }) => (
              <li className="text-gray-700">
                {children}
              </li>
            ),
            strong: ({ children }) => (
              <strong className="font-semibold text-gray-900">
                {children}
              </strong>
            ),
            em: ({ children }) => (
              <em className="italic text-gray-700">
                {children}
              </em>
            ),
            a: ({ href, children }) => (
              <a
                href={href}
                className="text-blue-600 hover:text-blue-800 underline transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {children}
              </a>
            ),
            blockquote: ({ children }) => (
              <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 my-4">
                {children}
              </blockquote>
            ),
            code: ({ children, className }) => {
              const isInlineCode = !className;
              
              if (isInlineCode) {
                // Inline code styling
                return (
                  <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono border">
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
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-6 border shadow-lg">
                <code className="text-sm font-mono leading-relaxed">
                  {children}
                </code>
              </pre>
            ),
            hr: () => (
              <hr className="border-gray-300 my-8" />
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </article>
  );
};

export default MDXRenderer; 