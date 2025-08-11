// Icon.tsx
import { IconMap } from "@/lib/utils/iconMap";
import { IconBaseProps } from "react-icons";

type IconProps = Omit<IconBaseProps, "name"> & {
  name: keyof typeof IconMap;
};

export default function Icon({ name, ...rest }: IconProps) {
  const IconComponent = IconMap[name];
  if (!IconComponent) return null;

  return <IconComponent {...rest} />;
}
