"use-client";

import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../../public/images/asap-logo.png";
import { Drawer } from "antd";
import HamburgerSidebar from "./HamburgerSidebar";
import { IoMenu } from "react-icons/io5";
import { useAuth } from "@/app/hooks/useAuth";

const NAVIGATIONS = [
  { label: "Jobs", link: "/jobs" },
  { label: "Internship", link: "/internship" },
  { label: "Job Fair", link: "/jobFair" },
  { label: "Companies", link: "/companies" },
  { label: "Support", link: "/support" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { user, getUser } = useAuth();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <header className="flex sticky top-0 z-50 px-5 py-2 bg-white">
      <div className="flex justify-between items-center w-full">
        <div className="flex gap-5 items-center">
          <div className="w-[182px] h-[80px] relative">
            <Image src={logo} alt="asap Logo" fill objectFit="cover" />
          </div>
          <div className="hidden lg:flex justify-start items-start">
            <nav className="flex gap-5">
              {NAVIGATIONS.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="text-base text-[#2A2A2A]">
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
        {user ? (
          <div className="hidden lg:flex gap-2.5 items-center">
            <div className="h-11 w-11 rounded-full bg-[#F9444A] flex items-center justify-center text-xl font-bold">
              {user?.name[0].toUpperCase()}
            </div>
            <div className="flex flex-col">
              <p className="text-[#7F7F7F] text-[13px]">Hi,</p>
              <p className="text-[#2A2A2A] text-base">{user?.name}</p>
            </div>
          </div>
        ) : (
          <p className="text-[#2A2A2A] text-xs">Loading...</p>
        )}
        <div className="flex justify-end lg:hidden">
          <IoMenu
            size={24}
            className="lg:hidden"
            onClick={showDrawer}
            color="black"
          />
        </div>
      </div>

      <Drawer
        placement="left"
        closable={false}
        onClose={onClose}
        size="large"
        open={open}
        style={{ width: "100%", height: "100%" }}>
        <HamburgerSidebar onClose={onClose} />
      </Drawer>
    </header>
  );
}
