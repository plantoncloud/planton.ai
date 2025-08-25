import React from 'react';
import { notFound } from 'next/navigation';
import { getTutorialContentBySlug, getAllTutorials, getTutorialsByCategory, getAllCategories } from '@/lib/tutorials';
import { MDXParser } from '@/lib/mdx';
import TutorialDetailClient from '@/app/components/tutorials/TutorialDetailClient';

interface TutorialPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const tutorials = getAllTutorials();
  return tutorials.map((tutorial) => ({
    slug: tutorial.slug,
  }));
}

export default async function TutorialPage({ params }: TutorialPageProps) {
  const { slug } = await params;
  const tutorialContent = getTutorialContentBySlug(slug);

  if (!tutorialContent) {
    notFound();
  }

  const allTutorials = getAllTutorials();
  const currentTutorial = allTutorials.find(t => t.slug === slug);
  
  if (!currentTutorial) {
    notFound();
  }

  const relatedTutorials = getTutorialsByCategory(currentTutorial.category)
    .filter(t => t.slug !== slug)
    .slice(0, 3);

  const categories = getAllCategories();
  const mdxContent = MDXParser.reconstructMDX(tutorialContent);

  return (
    <TutorialDetailClient
      tutorial={currentTutorial}
      relatedTutorials={relatedTutorials}
      categories={categories}
      mdxContent={mdxContent}
    />
  );
}
