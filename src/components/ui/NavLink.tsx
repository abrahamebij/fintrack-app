import Link from "next/link";

const NavLink = ({ title, active }: { title: string; active?: boolean }) => {
  return (
    <Link
      href={""}
      className={`hover:bg-red-100 duration-300 rounded-2xl font-medium py-1 px-5 ${
        active && "bg-red-100 text-primary"
      }`}
    >
      {title}
    </Link>
  );
};

export default NavLink;
