import Button from "@/components/buttons/Button";
import { Avatar, Menu } from "@mantine/core";
import { BiChevronDown, BiLogOut } from "react-icons/bi";
import { RxTriangleDown } from "react-icons/rx";

const Appbar = () => {
  return (
    <div className="fixed left-72 right-0 top-0 flex justify-center border-b-2 border-gray-200 bg-white px-4 py-3">
      <div className="flex max-w-6xl flex-1">
        <div className="flex-1" />
        <Menu offset={2} width="target">
          <Menu.Target>
            <Button variant="light" size="xs">
              <div className="flex items-center text-slate-600">
                <Avatar
                  radius="md"
                  variant="outline"
                  src="/random-image.jpg"
                  alt="it's me"
                  className="mr-2"
                />
                <div className="text-base">Shen Yien</div>
                <RxTriangleDown size="24" />
              </div>
            </Button>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item icon={<BiLogOut />}>Logout</Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </div>
    </div>
  );
};

export default Appbar;
