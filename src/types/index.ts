import { ImageProps } from "next/image";
import { Dispatch, SetStateAction } from "react";

export type MenuContextType = {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
};

export type ImgProps = {
  src: string;
  alt: string;
  className?: string;
} & Omit<ImageProps, "src" | "alt" | "className">;

export interface BadgeProps {
  title: string;
  success: boolean;
  className?: string;
}

export interface AvatarProps {
  src: string;
  alt: string;
  className?: string;
}

export interface Transaction {
  id: string;
  date: string;
  remark: string;
  amount: number;
  currency: string;
  type: "Credit" | "Debit";
}
