"use client";

import { Button, DatePicker, Input, Modal, Radio } from "antd";
import { MdVerified, MdWarning } from "react-icons/md";
import { useState } from "react";
import dayjs from "dayjs";
import { useUser } from "../hooks/useAuth";
import { useProfile } from "../hooks/useProfile";

export default function BasicInformation() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const userMutation = useUser();

  const userId = userMutation?.data?._id;

  const { data: user, isLoading, isError } = useProfile(userId);
  console.log(isLoading, isError);

  return (
    <>
      <div className="flex flex-col gap-3 w-full">
        <div className="flex justify-between items-center w-full">
          <p className="text-lg text-[#2A2A2A] font-bold">Basic Information</p>
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="text-[#198FD9] bg-[#198FD91A] cursor-pointer h-[39px] rounded-tl-md rounded-tr-2xl rounded-b-md px-3 text-base font-medium">
            Update
          </button>
        </div>
        <div className="border border-[#EEEEEE] p-5 rounded-xl flex flex-col gap-3">
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
            <div className="flex flex-col gap-1.5">
              <p className="text-[13px] text-[#2A2A2A]">Full Name</p>
              <p className="text-[15px] text-[#7F7F7F]">{user?.name}hjjh</p>
            </div>
            <div className="flex w-full justify-start gap-20 items-center">
              <div className="flex flex-col gap-1.5">
                <p className="text-[13px] text-[#2A2A2A]">Date of Birth</p>
                <p className="text-[15px] text-[#7F7F7F]">18/10/1999</p>
              </div>
              <div className="flex flex-col gap-1.5 justify-start items-start">
                <p className="text-[13px] text-[#2A2A2A]">Gender</p>
                <p className="text-[15px] text-[#3d3333]">Male</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
            <div className="flex flex-col gap-1.5">
              <p className="text-[13px] text-[#2A2A2A]">Mobile</p>
              <p className="text-[15px] text-[#7F7F7F] flex gap-1 items-center">
                +91 9876543210 <MdVerified size={15} color="#5CB01A" />
              </p>
            </div>
            <div className="flex flex-col gap-1.5">
              <p className="text-[13px] text-[#2A2A2A]">Email</p>
              <p className="text-[15px] text-[#7F7F7F] flex gap-1 items-center">
                abhishekshankar123@gmail.com{" "}
                <MdVerified size={15} color="#5CB01A" />
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
            <div className="flex flex-col gap-1.5">
              <p className="text-[13px] text-[#2A2A2A]">Aadhar</p>
              <p className="text-[15px] text-[#7F7F7F]">
                33XX XXXX XXXX XX22{" "}
                <Button variant="solid" color="danger" size="small">
                  Verify
                </Button>
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
            <div className="flex flex-col col-span-2 gap-1.5">
              <p className="text-[13px] text-[#2A2A2A]">Address</p>
              <p className="text-[15px] text-[#7F7F7F]">
                Sweet Home, Evergreen Street, Varkala, Thiruvananthapuram,
                Kerala,
                <br />
                695001, India
              </p>
            </div>
          </div>
        </div>
      </div>
      <Modal
        title="Basic Information"
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        classNames={{
          header: "text-[#2A2A2A] text-xl font-bold",
        }}
        width={800}
        footer={
          <div className="flex justify-end items-center gap-5 mt-5">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="text-[#7F7F7F] border border-[#7F7F7F] cursor-pointer h-[49px] rounded-tl-md rounded-tr-2xl rounded-b-md px-3 text-base font-medium">
              Cancel
            </button>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="text-white bg-[#F9444A] cursor-pointer h-[49px] rounded-tl-md rounded-tr-2xl rounded-b-md px-3 text-base font-medium">
              Save Changes
            </button>
          </div>
        }>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 mt-5">
          <div className="flex flex-col gap-1">
            <label className="label">
              First Name <span className="text-[#F9444A]">*</span>
            </label>
            <input className="input-box" value={"Abhishek"} />
          </div>
          <div className="flex flex-col gap-1">
            <label className="label">Last Name</label>
            <input className="input-box" value={"Abhishek"} />
          </div>
          <div className="flex flex-col gap-1">
            <label className="label">
              Date of Birth <span className="text-[#F9444A]">*</span>
            </label>
            <DatePicker
              defaultValue={dayjs("01/01/2015", "DD/MM/YYYY")}
              format={"DD/MM/YYYY"}
              className="input-box"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="label">
              Gender <span className="text-[#F9444A]">*</span>
            </label>
            <Radio.Group
              // value={value}
              // onChange={(e) => setValue(e.target.value)}
              className="custom-radio-group"
              size="large">
              <Radio.Button value="Male">Male</Radio.Button>
              <Radio.Button value="Female">Female</Radio.Button>
              <Radio.Button value="Non-Binary">Non-Binary</Radio.Button>
            </Radio.Group>
          </div>
          <div className="flex flex-col gap-1">
            <label className="label">
              Mobile <span className="text-[#F9444A]">*</span>
            </label>
            <Input
              className="input-box"
              value={"Abhishek"}
              suffix={<MdVerified size={18} color="#5CB01A" />}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="label">
              Email <span className="text-[#F9444A]">*</span>
            </label>
            <Input
              className="input-box"
              value={"Abhishek"}
              suffix={<MdVerified size={18} color="#5CB01A" />}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="label">
              Aadhar <span className="text-[#F9444A]">*</span>
            </label>
            <Input
              className="input-box"
              value={"Abhishek"}
              suffix={<MdWarning size={18} color="#FFC422" />}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="label">
              Address <span className="text-[#F9444A]">*</span>
            </label>
            <input className="input-box" value={"Abhishek"} />
          </div>
          <div className="col-span-2 grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="flex flex-col gap-1">
              <label className="label">
                State <span className="text-[#F9444A]">*</span>
              </label>
              <input className="input-box" value={"Abhishek"} />
            </div>
            <div className="flex flex-col gap-1">
              <label className="label">
                District <span className="text-[#F9444A]">*</span>
              </label>
              <input className="input-box" value={"Abhishek"} />
            </div>
            <div className="flex flex-col gap-1">
              <label className="label">
                Pincode <span className="text-[#F9444A]">*</span>
              </label>
              <input className="input-box" value={"Abhishek"} />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label className="label">
              Parent / Guardian Name <span className="text-[#F9444A]">*</span>
            </label>
            <input className="input-box" value={"Abhishek"} />
          </div>
          <div className="flex flex-col gap-1">
            <label className="label">
              Parent / Guardian Number <span className="text-[#F9444A]">*</span>
            </label>
            <input className="input-box" value={"Abhishek"} />
          </div>
        </div>
      </Modal>
    </>
  );
}
