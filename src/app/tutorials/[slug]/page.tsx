import React from 'react';
import { notFound } from 'next/navigation';
import { getTutorialContentBySlug, getAllTutorials, MDXParser } from '@/lib/mdx';
import { MDXRenderer } from '@/lib/MDXRenderer';
import { MdxContentLayout } from '@/app/components/common';

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

  const mdxContent = MDXParser.reconstructMDX(tutorialContent);

  return (
    <MdxContentLayout records={allTutorials} currentSlug={slug} sectionTitle="Tutorials">
      <div className="p-8">
        <MDXRenderer mdxContent={mdxContent} markdownContent={tutorialContent} />
      </div>
    </MdxContentLayout>
  );
}
