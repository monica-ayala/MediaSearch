
import { useContext, createContext, useState, ReactNode } from "react";
import { BsFillTreeFill } from "react-icons/bs";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { ImGithub } from "react-icons/im";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const SidebarContext = createContext({ expanded: false } as {
  expanded: boolean;
});
export interface ISideBarItemProps {
  icon: ReactNode;
  text: string;
  alert?: boolean;
  isGithub?: boolean;
  expandSideBar?: () => void;
}

export default function Sidebar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <nav className="h-screen w-fit flex flex-col bg-white border-r shadow-sm">
      <div className="p-4 pb-2 flex justify-between items-center">
        <img
          src="https://i.ibb.co/zPMhrrh/advent-logo.png"
          className={`overflow-hidden transition-all ${
            expanded ? "w-44" : "w-0"
          }`}
          alt=""
        />
        <button
          onClick={() => setExpanded((curr) => !curr)}
          className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
        >
          {expanded ?  <BsFillTreeFill /> : <BsFillTreeFill />}
        </button>
      </div>

      <SidebarContext.Provider value={{ expanded }}>
        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">
            <SidebarItem
              icon={<BsFillTreeFill />}
              text="Calendario"
              expandSideBar={() => setExpanded((curr) => !curr)}
            />
            <SidebarItem
              icon={<BsFillInfoCircleFill />}
              text="Instrucciones"
              expandSideBar={() => setExpanded((curr) => !curr)}
            />
            <SidebarItem
              icon={<ImGithub />}
              text="Source code"
              expandSideBar={() => setExpanded((curr) => !curr)}
              isGithub={true}
            />
          </ul>
        </SidebarContext.Provider>
      </SidebarContext.Provider>

      <div className="border-t flex p-3">
        <img
          src="https://encaromafloristeria.es/wp-content/uploads/2017/11/El-mu%C3%A9rdago-mucho-m%C3%A1s-que-una-planta-sevilla-dos-hermanas-alcala-de-guadaira.jpg.webp"
          alt=""
          className="w-10 h-10 rounded-md"
        />
        <div
          className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
          `}
        >
          <div className="leading-4">
            <span className="text-xs">Hecho por</span>
            <h4 className="font-semibold">Mónica Ayala</h4>
          </div>
        </div>
      </div>
    </nav>
  );
}

export function SidebarItem({
  icon,
  text,
  alert,
  isGithub,
}: ISideBarItemProps) {
  const { expanded } = useContext(SidebarContext);

  const handleNavigation = () => {
    window.location.href = "https://github.com/monica-ayala/AdventCalendar";
  };

  const location = useLocation();
  const isActive = location.pathname === `/${text}`;

  return (
    <>
      {isGithub ? (
        <li
          onClick={handleNavigation}
          className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          isActive
            ? "bg-gradient-to-tr from-red-200 to-red-100 text-red-800"
            : "hover:bg-red-50"
        }
    `}
        >
          {icon}

          <div
            className={`overflow-hidden transition-all ${
              expanded ? "w-52 ml-3" : "w-0"
            }`}
            onClick={handleNavigation}
          >
            {text}
          </div>

          {alert && (
            <div
              className={`absolute right-2 w-2 h-2 rounded bg-red-400 ${
                expanded ? "" : "top-2"
              }`}
            />
          )}
        </li>
      ) : (
        <Link
            to={`/${text}`}>
        <li
          className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          isActive
            ? "bg-gradient-to-tr from-red-200 to-red-100 text-red-800"
            : "hover:bg-red-50"
        }
    `}
        >
          {icon}

          <span
            className={`overflow-hidden transition-all ${
              expanded ? "w-52 ml-3" : "w-0"
            }`}
          >
            {text}
          </span>
          {alert && (
            <div
              className={`absolute right-2 w-2 h-2 rounded bg-red-400 ${
                expanded ? "" : "top-2"
              }`}
            />
          )}
        </li></Link>
      )}
    </>
  );
}