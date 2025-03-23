import { Button } from "antd";

export default function Education() {
  return (
    <div className="flex flex-col gap-3 w-full mt-5">
      <div className="flex justify-between items-center w-full">
        <p className="text-lg text-[#2A2A2A] font-bold">Education</p>
        <button
          type="button"
          className="text-[#198FD9] bg-[#198FD91A] cursor-pointer h-[39px] rounded-tl-md rounded-tr-2xl rounded-b-md px-3 text-base font-medium">
          Update Education
        </button>
      </div>
      <div className="border border-[##EEEEEE] p-5 rounded-xl flex flex-col gap-3">
        <div className="flex flex-col gap-1.5">
          <div className="flex gap-2 items-center">
            <p className="text-[13px] text-[#2A2A2A]">
              Master of Business Administration (MBA)
            </p>
            <Button variant="outlined" color="danger" size="small">
              Edit
            </Button>
          </div>
          <div className="">
            <p className="text-[15px] text-[#7F7F7F] font-medium">
              XYZ University, Thiruvananthapuam, Kerala
            </p>
            <p className="text-[15px] text-[#7F7F7F] font-medium">
              2018 - 2020
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <div className="flex gap-2 items-center">
            <p className="text-[13px] text-[#2A2A2A]">
              Higher Secondary Certificate (HSC)
            </p>
            <Button variant="outlined" color="danger" size="small">
              Edit
            </Button>
          </div>
          <div className="">
            <p className="text-[15px] text-[#7F7F7F] font-medium">
              St. Mary’s Higher Secondary School, Ernakulam, Kerala
            </p>
            <p className="text-[15px] text-[#7F7F7F] font-medium">
              2012 - 2014
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <div className="flex gap-2 items-center">
            <p className="text-[13px] text-[#2A2A2A]">
              Secondary School Certificate (SSC)
            </p>
            <Button variant="outlined" color="danger" size="small">
              Edit
            </Button>
          </div>
          <div className="">
            <p className="text-[15px] text-[#7F7F7F] font-medium">
              Govt. Model School, Alappuzha, Kerala
            </p>
            <p className="text-[15px] text-[#7F7F7F] font-medium">
              2011 - 2012
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
