type Props = {
  className: string;
}
export default function Sidebar ({className}: Props) {
  return (
    <div className={`bg-amber-50 ${className}`}>
      Sidebar
    </div>
  )
}