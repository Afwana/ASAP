export default function Careers() {
  return (
    <div className="flex flex-col gap-3 w-full mt-5">
      <div className="flex justify-between items-center w-full">
        <p className="text-lg text-[#2A2A2A] font-bold">Career Objective</p>
        <button
          type="button"
          className="text-[#198FD9] bg-[#198FD91A] cursor-pointer h-[39px] rounded-tl-md rounded-tr-2xl rounded-b-md px-3 text-base font-medium">
          Update
        </button>
      </div>
      <div className="border border-[##EEEEEE] p-5 rounded-xl flex flex-col gap-3">
        <div className="flex flex-col gap-1.5">
          <p className="text-[13px] text-[#2A2A2A]">For Entry-Level Position</p>
          <p className="text-[15px] text-[#7F7F7F] font-medium">
            Enthusiastic and highly motivated graduate with a degree in Business
            Administration, eager to apply strong analytical and communication
            skills in a fast-paced corporate environment. Looking for an
            entry-level role in marketing where I can contribute to team success
            while gaining hands-on experience and advancing my career.
          </p>
        </div>
      </div>
    </div>
  );
}
