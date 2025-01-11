import Link from "next/link";

interface NavLinkProps {
  href: string;  // Define href as a string (the URL to navigate to)
  title: string; // Define title as a string (the text to display for the link)
}

const NavLink: React.FC<NavLinkProps> = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </Link>
  );
};

export default NavLink;
