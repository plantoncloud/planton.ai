'use client';

import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';

interface MDXRendererProps {
  source: string;
  components?: Record<string, React.ComponentType<any>>;
}

export const MDXRenderer: React.FC<MDXRendererProps> = ({ 
  source, 
  components = {} 
}) => {
  try {
    return (
      <MDXRemote 
        source={source} 
        components={components}
      />
    );
  } catch (error) {
    console.error('Error rendering MDX:', error);
    notFound();
  }
}; 