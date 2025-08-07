import { cn } from "@/utils/cn";
import Img from "./Img";

interface AvatarProps {
  src: string;
  alt: string;
  className?: string;
}
const AvatarGroup = ({ imgData }: { imgData: AvatarProps[] }) => {
  return (
    <div className="flex -space-x-1 overflow-hidden">
      {imgData.map((img, i) => (
        <Img
          key={i}
          src={img.src}
          alt={img.alt}
          className={cn(
            "inline-block size-8 rounded-full ring-2 ring-white outline -outline-offset-1 outline-black/5",
            img.className
          )}
        />
      ))}
    </div>
  );
};

export default AvatarGroup;
