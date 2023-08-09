import Logo from "@/components/branding/Logo";
import { HasChildren } from "@/utils/types/props";
import Link from "next/link";

const Sidebar = ({ children }: HasChildren) => {
  return (
    <div className="fixed bottom-0 left-0 top-0  w-72 border-r-[1px] border-solid border-gray-400/10 bg-white px-4 py-7 shadow-[0_0_6px_-4px] shadow-gray-400">
      <Link href="/" className="mb-6 flex items-center space-x-2 px-4">
        <Logo size={48} />
        <h2 className="text-2xl font-semibold text-blue-700">Next LMS</h2>
      </Link>
      <nav className="flex flex-col space-y-2">{children}</nav>
    </div>
  );
};

export default Sidebar;
