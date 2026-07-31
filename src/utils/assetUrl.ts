/**
 * Static Asset Handling Architecture
 * Loads images and custom fonts safely using inline Data URIs and HTTPS links,
 * completely bypassing local binary file parsing and missing asset errors.
 */

export const PLAYER_SILHOUETTE_SVG_DATA_URI = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
  <circle cx="50" cy="35" r="22" fill="#444444" opacity="0.6"/>
  <path d="M20 100 C 20 65, 32 55, 50 55 C 68 55, 80 65, 80 100 Z" fill="#444444" opacity="0.6"/>
</svg>
`)}`;

// 2. Generic Safe Image Placeholder SVG Data URI
export const GENERIC_PLACEHOLDER_SVG_DATA_URI = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
  <rect width="100" height="100" rx="8" fill="#1e1e1e" stroke="#333333"/>
  <circle cx="50" cy="40" r="18" fill="#333333"/>
  <path d="M25 85 C25 65, 35 58, 50 58 C65 58, 75 65, 75 85 Z" fill="#333333"/>
</svg>
`)}`;

/**
 * Returns safe fallback Data URIs based on requested image category
 */
export function getFallbackDataUri(type: 'coin' | 'card' | 'player' | 'generic' = 'generic'): string {
  switch (type) {
    case 'coin':
      return 'https://cdn.futbin.com/design/img/coins_bin.png';
    case 'card':
      return 'https://duckiest428.github.io/ImpulBin/assets/cards/placeholder.png';
    case 'player':
      return PLAYER_SILHOUETTE_SVG_DATA_URI;
    default:
      return GENERIC_PLACEHOLDER_SVG_DATA_URI;
  }
}

/**
 * Helper to safely format Base64 string into a valid Data URI
 */
export function base64ToDataUri(base64: string, mimeType: string = 'image/png'): string {
  if (!base64) return getFallbackDataUri('generic');
  if (base64.startsWith('data:')) return base64;
  return `data:${mimeType};base64,${base64}`;
}

/**
 * Main asset URL resolution function
 * Maps known asset requests to secure HTTPS URLs or inline Data URIs
 * completely bypassing binary filesystem errors.
 */
export function getAssetUrl(path: string): string {
  if (!path) return getFallbackDataUri('generic');

  // Direct HTTPS / HTTP pass-through
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }

  // Direct Data URI pass-through
  if (path.startsWith('data:')) {
    return path;
  }

  // Clean relative paths for standard local assets
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const base = import.meta.env.BASE_URL || '/';

  if (base === '/' || base === '') {
    return `/${cleanPath}`;
  }

  if (base === './') {
    return `./${cleanPath}`;
  }

  return `${base.replace(/\/$/, '')}/${cleanPath}`;
}
