import Navbar from "../components/includes/Navbar";
import SidebarFilters from "../components/SidebarFilters";
import Sidebar from "../components/Sidebar";

export interface IWrapperProps {
  children: JSX.Element;
}

export default function Wrapper({ children }: IWrapperProps) {
  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <Navbar />
      <div className="flex flex-grow overflow-scroll p-10">
        {children}
      </div>
    </div>
  );
}
