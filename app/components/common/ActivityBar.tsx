type Props = {
  className?: string;
}

export default function ActivityBar({className}: Props) {
  return (
    <div className={`bg-amber-800 ${className}`}>
      A
    </div>
  )
}