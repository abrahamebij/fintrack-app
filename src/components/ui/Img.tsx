import { ImgProps } from "@/types";
import { cn } from "@/utils/cn";
import Image, { ImageProps } from "next/image";

const Img = ({ src, alt, className = "", ...rest }: ImgProps) => {
  return (
    <Image
      src={`/img/${src}`}
      alt={alt}
      width={0}
      height={0}
      sizes="100vw"
      className={cn(`w-full h-fit bg-gray/20 ${className}`)}
      {...rest}
    />
  );
};

export default Img;
