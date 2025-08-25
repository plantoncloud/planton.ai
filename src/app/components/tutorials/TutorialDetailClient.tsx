'use client';

import React from 'react';
import { Tutorial } from '@/lib/tutorials';
import TutorialsSidebar from './TutorialsSidebar';
import TutorialCard from './TutorialCard';
import Link from 'next/link';
import Image from 'next/image';

interface TutorialDetailClientProps {
  tutorial: Tutorial;
  relatedTutorials: Tutorial[];
  categories: string[];
  mdxContent: string;
}

export default function TutorialDetailClient({ 
  tutorial, 
  relatedTutorials, 
  categories,
  mdxContent 
}: TutorialDetailClientProps) {
  const [selectedCategory, setSelectedCategory] = React.useState(tutorial.category);
  const [selectedTag, setSelectedTag] = React.useState('');

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSelectedTag('');
  };

  const handleTagClick = (tag: string) => {
    setSelectedTag(tag);
    setSelectedCategory('all');
  };

  return (
    <div className="min-h-screen font-work-sans antialiased bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-400">
            <li>
              <Link href="/tutorials" className="hover:text-white transition-colors">
                Tutorials
              </Link>
            </li>
            <li>
              <span className="mx-2">/</span>
            </li>
            <li>
              <button 
                onClick={() => handleCategoryChange(tutorial.category)}
                className="hover:text-white transition-colors"
              >
                {tutorial.category.charAt(0).toUpperCase() + tutorial.category.slice(1)}
              </button>
            </li>
            <li>
              <span className="mx-2">/</span>
            </li>
            <li className="text-white">{tutorial.title}</li>
          </ol>
        </nav>

        <div className="flex gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* Tutorial Header */}
            <header className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-block bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
                  {tutorial.category}
                </span>
                {tutorial.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-gray-600 text-gray-300 text-sm px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <h1 className="text-4xl font-bold text-white mb-4">
                {tutorial.title}
              </h1>
              
              {tutorial.excerpt && (
                <p className="text-xl text-gray-300 mb-6">
                  {tutorial.excerpt}
                </p>
              )}
              
              <div className="flex items-center gap-4 text-gray-400">
                <div className="flex items-center gap-2">
                  {tutorial.author[0]?.profilePicture && (
                    <Image
                      src={tutorial.author[0].profilePicture}
                      alt={tutorial.author[0].name}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                  )}
                  <span>{tutorial.author[0]?.name || 'Planton Team'}</span>
                </div>
                <span>•</span>
                <span>
                  {new Date(tutorial.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
            </header>

            {/* Featured Image */}
            {tutorial.featuredImage && (
              <div className="mb-8">
                <div className="relative h-64 w-full rounded-lg overflow-hidden">
                  <Image
                    src={tutorial.featuredImage}
                    alt={tutorial.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            )}

            {/* Tutorial Content */}
            <article className="prose prose-invert prose-lg max-w-none mb-12">
              <div dangerouslySetInnerHTML={{ __html: mdxContent }} />
            </article>

            {/* Related Tutorials */}
            {relatedTutorials.length > 0 && (
              <section className="border-t border-gray-700 pt-8">
                <h2 className="text-2xl font-semibold text-white mb-6">
                  Related Tutorials
                </h2>
                <div className="grid gap-6 md:grid-cols-3">
                  {relatedTutorials.map((relatedTutorial) => (
                    <TutorialCard key={relatedTutorial.slug} tutorial={relatedTutorial} />
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            <TutorialsSidebar 
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryChange}
              onTagClick={handleTagClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
