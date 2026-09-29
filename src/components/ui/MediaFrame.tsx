import { SafeImage } from './SafeImage';

interface MediaFrameProps {
  src: string;
  alt?: string;
  aspectRatio?: string;
  objectPosition?: string;
  className?: string;
  filter?: string;
  eager?: boolean;
}

export function MediaFrame({
  src,
  alt = '',
  aspectRatio = '4 / 3',
  objectPosition = 'center center',
  className = '',
  filter,
  eager = false,
}: MediaFrameProps) {
  const frameStyle: React.CSSProperties =
    aspectRatio === 'auto' ? {} : { aspectRatio };

  return (
    <div className={`media-frame ${className}`.trim()} style={frameStyle}>
      <SafeImage
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        fetchPriority={eager ? 'high' : undefined}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition,
          display: 'block',
          filter,
        }}
      />
    </div>
  );
}
