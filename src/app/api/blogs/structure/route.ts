import { NextResponse } from 'next/server';
import { getBlogsStructure } from '../../../blogs/utils/fileSystem';

export async function GET() {
  try {
    const structure = await getBlogsStructure();
    return NextResponse.json(structure);
  } catch (error) {
    console.error('Error loading blogs structure:', error);
    return NextResponse.json({ error: 'Failed to load blogs structure' }, { status: 500 });
  }
} 