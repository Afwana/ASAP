import Image from "next/image";
import user from "../../public/images/user.png";
import { Progress } from "antd";
import {
  MdOutlineAccountBox,
  MdOutlineMail,
  MdOutlinePhone,
  MdOutlineWorkspacePremium,
  MdVerified,
  MdWarning,
} from "react-icons/md";
import { BiSolidEditAlt } from "react-icons/bi";
import { TbContract } from "react-icons/tb";
import { useLogout, useUser } from "../hooks/useAuth";
import { useRouter } from "next/navigation";

export default function ProfileSection() {
  const router = useRouter();
  const logoutMutation = useLogout();
  const userMutation = useUser();

  const handleLogout = async () => {
    await logoutMutation.mutateAsync();
    router.push("/login");
  };

  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="flex flex-col gap-5 border border-[#EEEEEE] p-5 rounded-[10px]">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col justify-center items-center gap-3 p-2">
            <div className="w-[130px] h-[130px] rounded-full border-2 border-dotted border-[#FFC422] relative">
              <Image src={user} alt="user image" fill />
            </div>
            <div className="flex flex-col w-full">
              <Progress percent={60} strokeColor={"#FFC422"} />
              <div className="flex flex-col mt-2 items-center justify-center">
                <p className="text-lg font-bold text-[#2A2A2A]">
                  {userMutation?.data?.name}
                </p>
                <p className="text-sm font-medium text-[#7F7F7F]">
                  @{userMutation?.data?.name?.toLowerCase()}2025
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 justify-start items-start">
            <div className="flex gap-2 items-center">
              <MdOutlinePhone size={20} color="black" />
              <p className="text-[#7F7F7F] text-base font-medium">
                {userMutation?.data?.phone
                  ? `+91 ${userMutation?.data?.phone}`
                  : "-"}
              </p>
              <MdVerified size={18} color="#5CB01A" />
            </div>
            <div className="flex gap-2 items-center">
              <MdOutlineMail size={20} color="black" />
              <p className="text-[#7F7F7F] text-base font-medium">
                {userMutation?.data?.email}
              </p>
              <MdWarning size={18} color="#FFC422" />
            </div>
            <button type="button" className="text-[#198FD9] cursor-pointer">
              <p className="flex itemss-center gap-2">
                <span>
                  <BiSolidEditAlt color="#198FD9" size={20} />
                </span>
                <span className="text-base font-medium">
                  Edit/Update Profile
                </span>
              </p>
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <button type="button" className="text-black cursor-pointer h-[30px]">
            <p className="flex gap-2">
              <span>
                <MdOutlineAccountBox size={20} />
              </span>
              <span className="text-base font-medium text-[#7F7F7F]">
                My Profile
              </span>
            </p>
          </button>
          <button type="button" className="text-black cursor-pointer h-[30px]">
            <p className="flex gap-2">
              <span>
                <MdOutlineWorkspacePremium size={20} />
              </span>
              <span className="text-base font-medium  text-[#7F7F7F]">
                Payments
              </span>
            </p>
          </button>
          <button type="button" className="text-black cursor-pointer h-[30px]">
            <p className="flex gap-2">
              <span>
                <TbContract size={20} />
              </span>
              <span className="text-base font-medium  text-[#7F7F7F]">
                Application Status
              </span>
            </p>
          </button>
          <button
            onClick={handleLogout}
            type="button"
            className="text-[#F26F22] border border-[#F26F22] cursor-pointer h-[39px] rounded-tl-md rounded-tr-2xl rounded-b-md w-[89px] text-base font-medium">
            Logout
          </button>
        </div>
      </div>
      <p className="text-[#7F7F7F] text-sm">
        Last updated on <span className="font-medium">10 Oct 2024</span>
      </p>
    </div>
  );
}
