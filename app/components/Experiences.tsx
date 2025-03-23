import { Button } from "antd";

export default function Experiences() {
  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="flex justify-between items-center w-full mt-5">
        <p className="text-lg text-[#2A2A2A] font-bold">Work Experience</p>
        <button
          type="button"
          className="text-[#198FD9] bg-[#198FD91A] cursor-pointer h-[39px] rounded-tl-md rounded-tr-2xl rounded-b-md px-3 text-base font-medium">
          Add Experience
        </button>
      </div>
      <div className="border border-[##EEEEEE] p-5 rounded-xl flex flex-col gap-5">
        <div className="flex flex-col gap-1.5">
          <div className="flex gap-2 items-center">
            <p className="text-[13px] text-[#2A2A2A]">Software Developer</p>
            <Button variant="outlined" color="orange" size="small">
              Edit
            </Button>
          </div>
          <div className="text-[15px] font-medium text-[#7F7F7F]">
            <p>Tech Innovations Inc., Kozhikode,</p>
            <p>Software Developer</p>
            <p>January 2021 - Present</p>
          </div>
          <div className="text-[13px]">
            <p className="text-[#2A2A2A]">Top Projects</p>
            <div className="flex justify-start items-center gap-3 mt-1">
              {[
                "ASAP CSC",
                "Kannur International Airport",
                "Kerala Police",
              ].map((item, index) => (
                <div
                  key={index}
                  className="h-[40px] border border-[#EEEEEE] rounded-[20px] p-2 text-sm font-medium text-[#7F7F7F] text-center">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <div className="flex gap-2 items-center">
            <p className="text-[13px] text-[#2A2A2A]">Project Manager</p>
            <Button variant="outlined" color="orange" size="small">
              Edit
            </Button>
          </div>
          <div className="text-[15px] font-medium text-[#7F7F7F]">
            <p>BuildRight Construction Co., Pune</p>
            <p>Project Manager </p>
            <p>June 2016 - November 2021</p>
          </div>
        </div>
      </div>
    </div>
  );
}
