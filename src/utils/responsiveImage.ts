/**
 * Build responsive srcset from a /images/... URL.
 * Mobile/tablet pick smaller high-quality JPEGs; large screens keep the original file.
 * Custom/data/remote URLs are returned unchanged.
 */
export function portraitImageProps(url: string) {
  if (!url.startsWith('/images/')) {
    return { src: url };
  }

  const stem = url.replace(/\.(png|jpe?g|webp)$/i, '');
  return {
    src: url,
    srcSet: `${stem}-640.jpg 640w, ${stem}-960.jpg 960w, ${url} 1122w`,
    sizes: '(max-width: 768px) 92vw, (max-width: 1024px) 50vw, 420px',
  };
}

export function thumbnailImageProps(url: string) {
  if (!url.startsWith('/images/')) {
    return { src: url };
  }

  const stem = url.replace(/\.(png|jpe?g|webp)$/i, '');
  return {
    src: url,
    srcSet: `${stem}-540.jpg 540w, ${stem}-810.jpg 810w, ${url} 1284w`,
    sizes: '(max-width: 640px) 260px, 270px',
  };
}

export function analyticsImageProps(url: string) {
  if (!url.startsWith('/images/analytics_')) {
    return { src: url };
  }

  const stem = url.replace(/\.(png|jpe?g|webp)$/i, '');
  return {
    src: url,
    srcSet: `${stem}-800.jpg 800w, ${stem}-1200.jpg 1200w, ${url} 1920w`,
    sizes: '(max-width: 768px) 92vw, 768px',
  };
}
