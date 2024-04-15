import { Burger, Menu } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import React from "react";

const data = [
  { name: "Home", link: "" },
  { name: "About us", link: "" },
  { name: "Community", link: "" },
  { name: "Contact us", link: "" },
];

export const MobileNav = () => {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <Menu
      position="bottom"
      width={200}
      styles={{
        dropdown: {
          background: "#fff",
          border: "1px solid #ccc",
          borderRadius: 8,
        },
      }}
    >
      <Menu.Target>
        <Burger opened={opened} onClick={toggle} size="md" color="#fff" />
      </Menu.Target>
      <Menu.Dropdown>
        <ul className="flex flex-col gap-2">
          {data.map(({ name, link }, idx) => (
            <Link
              className="p-2 hover:bg-[#f5f5f5] cursor-pointer rounded-md text-base"
              key={idx}
              href={link}
            >
              {name}
            </Link>
          ))}
        </ul>
      </Menu.Dropdown>
    </Menu>
  );
};
