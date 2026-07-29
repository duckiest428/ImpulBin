export const blankCardDataUri = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 450">
    <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#9ca3af" />
            <stop offset="50%" stop-color="#6b7280" />
            <stop offset="100%" stop-color="#4b5563" />
        </linearGradient>
        <linearGradient id="shine" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="rgba(255,255,255,0.4)" />
            <stop offset="30%" stop-color="rgba(255,255,255,0)" />
            <stop offset="100%" stop-color="rgba(255,255,255,0)" />
        </linearGradient>
        <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
            <feColorMatrix type="matrix" values="1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 0.08 0" />
            <feBlend mode="overlay" in2="SourceGraphic" />
        </filter>
    </defs>
    <!-- Base Shape -->
    <path d="M 20 20 L 280 20 C 280 20 290 20 290 30 L 290 360 C 290 360 285 410 150 440 C 15 410 10 360 10 360 L 10 30 C 10 20 20 20 20 20 Z" fill="url(#bg)" filter="url(#noise)" />
    <!-- Borders -->
    <path d="M 20 20 L 280 20 C 280 20 290 20 290 30 L 290 360 C 290 360 285 410 150 440 C 15 410 10 360 10 360 L 10 30 C 10 20 20 20 20 20 Z" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="4" />
    <path d="M 25 25 L 275 25 C 275 25 285 25 285 35 L 285 355 C 285 355 280 405 150 432 C 20 405 15 355 15 355 L 15 35 C 15 25 25 25 25 25 Z" fill="none" stroke="rgba(0,0,0,0.4)" stroke-width="2" />
    
    <path d="M 20 20 L 280 20 C 280 20 290 20 290 30 L 290 360 C 290 360 285 410 150 440 C 15 410 10 360 10 360 L 10 30 C 10 20 20 20 20 20 Z" fill="url(#shine)" />
    
    <!-- Separator Line -->
    <rect x="30" y="270" width="240" height="3" fill="rgba(0,0,0,0.15)" />
    <rect x="30" y="273" width="240" height="1" fill="rgba(255,255,255,0.15)" />

    <!-- Text line placeholders (top left) -->
    <rect x="45" y="150" width="60" height="4" fill="rgba(0,0,0,0.15)" />
    <rect x="45" y="170" width="40" height="4" fill="rgba(0,0,0,0.15)" />
    <rect x="45" y="190" width="50" height="4" fill="rgba(0,0,0,0.15)" />
    
    <!-- Bottom Separator -->
    <rect x="130" y="380" width="40" height="3" fill="rgba(0,0,0,0.15)" />
    <rect x="130" y="383" width="40" height="1" fill="rgba(255,255,255,0.15)" />
</svg>
`);
