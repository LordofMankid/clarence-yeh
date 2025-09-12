import { lazy, Suspense } from "react";

interface TechStackIconProps {
  name: string;
  size?: number;
  altStyle?: string;
}
export default function TechStackIcon({
  name,
  size = 24,
  altStyle,
}: TechStackIconProps) {
  const IconComponent = lazy(() => import(`../../icons/${name}.svg?react`));
  return (
    <Suspense fallback={<span />}>
      <IconComponent width={size} height={size} className={altStyle} />
    </Suspense>
  );
}
