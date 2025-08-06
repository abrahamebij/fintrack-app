import { cn } from "@/utils/cn";
import Image, { ImageProps } from "next/image";

type ImgProps = {
  src: string;
  alt: string;
  className?: string;
} & Omit<ImageProps, "src" | "alt" | "className">;

const Img = ({ src, alt, className = "", ...rest }: ImgProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={0}
      height={0}
      sizes="100vw"
      className={cn(`w-full h-fit bg-gray-600/20 ${className}`)}
      {...rest}
    />
  );
};

export default Img;
