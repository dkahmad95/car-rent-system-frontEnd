import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";

const links = [
  { name: "Home", href: "/" },
  { name: "Create Client", href: "/createClient" },
  { name: "Cars", href: "/cars" },
  { name: "Accounting", href: "/accounting" },
];

export default function NavLinks() {
  const { pathname } = useLocation();
  return (
    <div className="flex flex-col items-center gap-y-5 ">
      {links.map((link) => (
        <Link
          key={link.name}
          to={link.href}
          className={clsx(
            "flex items-center justify-center gap-2 rounded-md p-3 text-lg font-medium hover:bg-sky-100",
            {
              "bg-sky-100 text-blue-600": pathname === link.href,
            }
          )}
        >
          <p className="">{link.name}</p>
        </Link>
      ))}
    </div>
  );
}
