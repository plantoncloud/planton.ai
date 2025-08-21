/**
 * Formats a date string into a human-readable format.
 * 
 * @param dateString - The date string to format (ISO format: YYYY-MM-DD)
 * @returns A formatted date string (e.g., "July 21, 2025")
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

/**
 * Formats a date string into a short, compact format.
 * 
 * @param dateString - The date string to format (ISO format: YYYY-MM-DD)
 * @returns A formatted date string (e.g., "Jul 21, 2025")
 */
export function formatShortDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
} 