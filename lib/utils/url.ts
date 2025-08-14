export function slugify(text: string): string {
  return text
    .toLowerCase()                
    .trim()                       
    .replace(/[\s\W-]+/g, '-') 
    .replace(/^-+|-+$/g, '');
}

export function buildSlugPath(parts: string[]): string {
  return parts
    .filter(Boolean)
    .map(slugify)
    .join('/');
}