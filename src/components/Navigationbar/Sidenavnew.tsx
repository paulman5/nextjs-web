import { useState } from "react";
import "../../styles/Sidebarstyling/Sidenavnew.css";
import { navData3 } from "../../lib/SidebarData/navData3";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export default function Sidenavnew() {
  const [Expanded, setExpanded] = useState(false);
  const router = useRouter();
  const currentRoute = usePathname();

  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-60 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Sidebar"
    >
      <div className="flex flex-col h-full px-3 py-4 pb-4 overflow-y-auto bg-white dark:bg-gray-800 gap-2">
        {navData3.map(({ link, icon: Icon, title: Title }, index) => {
          const activeStyle =
            link === currentRoute ? "bg-gray-700 fill-white" : "";
          return (
            <div key={index} className={`relative`}>
              <Link
                href={`/${link}`}
                className={`row flex flex-row text-center items-center gap-5 rounded-md hover:bg-gray-700 ${activeStyle} p-2`}
              >
                <span className="relative">
                  <Icon />
                </span>
                <span className="text-white font-medium">
                  <Title />
                </span>
              </Link>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
