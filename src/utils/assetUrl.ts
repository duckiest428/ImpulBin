export function getAssetUrl(path: string): string {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const base = import.meta.env.BASE_URL || './';
  if (base === './' || base === '' || base === '/') {
    return `./${cleanPath}`;
  }
  return `${base.replace(/\/$/, '')}/${cleanPath}`;
}
