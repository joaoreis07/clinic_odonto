import { useState } from 'react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackClassName?: string;
}

export function SafeImage({ src, alt, fallbackClassName = '', style, className = '', ...props }: SafeImageProps) {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div
        className={`img-placeholder ${fallbackClassName}`}
        role="img"
        aria-label={alt ?? 'Imagem indisponível'}
        style={{ width: '100%', height: '100%', ...style }}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt ?? ''}
      loading="lazy"
      decoding="async"
      className={className}
      onError={() => setError(true)}
      style={style}
      {...props}
    />
  );
}
