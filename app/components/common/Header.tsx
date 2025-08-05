type Props = {
  className: string;
}

export default function Header ({className}: Props) {
  return (
    <div className={`flex justify-between items-center w-full bg-base-bg text-base-text border-b-1 border-base-border ${className}`}>
      <div className="flex">
        Logo + Menus
      </div>
      <div className="flex">
        Window menus
      </div>
    </div>
  )
}
