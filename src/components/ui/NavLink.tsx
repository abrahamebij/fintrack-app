import Link from "next/link";

const NavLink = ({ title, active }: { title: string; active?: boolean }) => {
  return (
    <Link
      href={""}
      className={`hover:bg-navlink duration-300 rounded-2xl font-medium py-1.5 px-5 ${
        active && "bg-navlink text-primary"
      }`}
    >
      {title}
    </Link>
  );
};

export default NavLink;
