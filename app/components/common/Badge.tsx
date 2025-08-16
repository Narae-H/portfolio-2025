type BadgeProps = {
  src: string;
  alt?: string;
  className?: string;
} & React.ImgHTMLAttributes<HTMLImageElement>;

export default function Badge({src, alt, className, ...props}: BadgeProps) {
  return (
    <img
      className={`max-h-10 ${className}`}
      src={src}
      alt={alt}
      {...props}
    />
  )
}