import { Menu } from "@headlessui/react";
import React from "react";

function Dropdown() {
  return (
    <Menu>
      <Menu.Button className="p-2 underline">More</Menu.Button>
      <Menu.Items className="flex w-[250px] flex-col items-end border-2 border-black bg-gray-100 p-2">
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && "bg-blue-500"}`}
              href="/account-settings"
            >
              Account settings
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && "bg-blue-500"}`}
              href="/account-settings"
            >
              Documentation
            </a>
          )}
        </Menu.Item>
        <Menu.Item disabled>
          <span className="opacity-75">Invite a friend (coming soon!)</span>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}

export default Dropdown;
