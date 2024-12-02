"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import Image from "next/image";

export default function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Profile", "My Settings", "Help", "Log Out"];

  return (
    <Navbar className="bg-black" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-white"
        />
        <NavbarBrand>
          <Image
            src={"/aio-logo_v2.svg"}
            className="w-16 h-16"
            alt="Logo"
            width={500}
            height={500}
          />
          <p className="font-bold text-inherit text-white">AIO</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 " justify="center">
        <NavbarItem>
          <Link color="danger" href="#">
            Profile
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="danger" href="#" aria-current="page">
            My Settings
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="danger" href="#">
            Help
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Button as={Link} color="danger" href="#" variant="ghost">
            Logout
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="bg-black text-white">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "secondary"
              }
              className="w-full text-orange-600"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
