import { useUser } from "@/app/hooks/useAuth";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
const NAVIGATIONS = [
  { label: "Jobs", link: "/jobs" },
  { label: "Internship", link: "/internship" },
  { label: "Job Fair", link: "/jobFair" },
  { label: "Companies", link: "/companies" },
  { label: "Support", link: "/support" },
];

export default function HamburgerSidebar({ onClose }: { onClose: () => void }) {
  const userMutation = useUser();
  console.log(userMutation.data);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex w-full justify-between items-start mb-5">
        <div className="flex gap-2.5 items-center">
          <div className="h-11 w-11 rounded-full bg-[#F9444A] flex items-center justify-center text-xl font-bold">
            {userMutation.data?.name[0].toUpperCase()}
          </div>
          <div className="flex flex-col">
            <p className="text-[#7F7F7F] text-[13px]">Hi,</p>
            <p className="text-[#2A2A2A] text-base">
              {userMutation?.data?.name}
            </p>
          </div>
        </div>
        <IoClose className="lg:hidden " onClick={() => onClose()} size={24} />
      </div>
      <nav className="flex flex-col gap-5 text-base text-[#2A2A2A]">
        {NAVIGATIONS.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="text-base text-[#2A2A2A]">
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
