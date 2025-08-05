type Props = {
  className: string;
}

export default function Footer ({className}: Props) {
  return (
    <div className={`w-full bg-footer-bg text-footer-text ${className}`}>Footer</div>
  )
}
