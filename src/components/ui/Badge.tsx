import { cn } from "@/utils/cn";
import { GoDotFill } from "react-icons/go";

interface BadgeProps {
  title: string;
  success: boolean;
  className?: string;
}
const Badge = ({ title, success, className }: BadgeProps) => {
  return (
    <div
      className={cn(
        "flex items-center gap-2 w-fit bg-gentle-gray/[9%] px-3 py-1 rounded-2xl font-medium",
        className
      )}
    >
      <p>{title}</p>
      <GoDotFill className={success ? "text-green-600" : "text-red-600"} />
    </div>
  );
};

export default Badge;
