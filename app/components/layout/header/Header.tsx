
import LeftHeader from '@/app/components/layout/header/LeftHeader';
import RightHeader from '@/app/components/layout/header/RightHeader';

type Props = {
  className: string;
}

export default function Header ({className}: Props) {
  return (
    <div className={`flex justify-between items-center w-full bg-base-bg text-base-text border-b-1 border-base-border ${className}`}>
      <LeftHeader />
      <RightHeader />
    </div>
  )
}
