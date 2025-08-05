type Props = {
  className?: string;
}
export default function MainContent({className}: Props) {
  return (
    <div className={`flex w-full bg-editor-bg text-editor-text ${className}`}>
    </div>
  )
}