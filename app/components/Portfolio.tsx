export default function Portfolio() {
  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="flex justify-between items-center w-full mt-5">
        <p className="text-lg text-[#2A2A2A] font-bold">Portfolio</p>
        <button
          type="button"
          className="text-[#198FD9] bg-[#198FD91A] cursor-pointer h-[39px] rounded-tl-md rounded-tr-2xl rounded-b-md px-3 text-base font-medium">
          Update Portfolio
        </button>
      </div>
      <div className="border border-[##EEEEEE] p-5 rounded-xl flex flex-col gap-5">
        <div className="flex flex-col gap-1.5">
          <p className="text-[13px] text-[#2A2A2A] ">GitHub</p>
          <p className="text-[15px] font-medium text-[#7F7F7F]">
            https://github.com/abhishekshankar
          </p>
        </div>
        <div className="flex flex-col gap-1.5">
          <p className="text-[13px] text-[#2A2A2A] ">Behance</p>
          <p className="text-[15px] font-medium text-[#7F7F7F]">
            https://www.behance.net/abhishekshankar
          </p>
        </div>
        <div className="flex flex-col gap-1.5">
          <p className="text-[13px] text-[#2A2A2A] ">Personal Website</p>
          <p className="text-[15px] font-medium text-[#7F7F7F]">
            http://www.abhishekshankar.info
          </p>
        </div>
      </div>
    </div>
  );
}
