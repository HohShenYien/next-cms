import { clsx } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import { IconType } from "react-icons";

type SidebarButtonProps = {
  label: string;
  Icon: IconType;
  href: string;
};

const SidebarButton = ({ label, Icon, href }: SidebarButtonProps) => {
  const router = useRouter();
  const isActive = router.pathname === href;
  return (
    <Link href={href}>
      <button
        className={clsx(
          "flex w-full items-center space-x-2 rounded-md px-4 py-3 transition-all",
          {
            "bg-blue-600 font-semibold text-white": isActive,
            "bg-white text-black hover:bg-blue-100 active:bg-blue-200":
              !isActive,
          }
        )}
      >
        <Icon size={30} />
        <span>{label}</span>
      </button>
    </Link>
  );
};

export default SidebarButton;
