import LeftFooter from "./LeftFooter";
import RightFooter from "./RightFooter";

type Props = {
  className: string;
}

export default function Footer ({className}: Props) {
  return (
    <div className={`flex flex-row justify-between items-center w-full bg-footer-bg text-footer-text ${className}`}>
      <LeftFooter />
      <RightFooter />
    </div>
  )
}
