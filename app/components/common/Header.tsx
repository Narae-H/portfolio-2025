type Props = {
  className: string;
}

export default function Header ({className}: Props) {
  return (
    <div className={`w-full bg-base-bg text-base-text border-b-2 border-base-border ${className}`}>Header</div>
  )
}
