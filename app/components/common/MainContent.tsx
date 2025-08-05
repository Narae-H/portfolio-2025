type Props = {
  children: React.ReactNode;
  className?: string;
}
export default function MainContent({children, className}: Props) {
  return (
    <div className={`flex ${className}`}>
      {children}
    </div>
  )
}