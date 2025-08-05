type Props = {
  className: string;
}

export default function Footer ({className}: Props) {
  return (
    <div className={`flex flex-row justify-between items-center w-full bg-footer-bg text-footer-text ${className}`}>
      <div className="">
        Narae's Profile
      </div>

      <div>
        UTF-8
      </div>
    </div>
  )
}
