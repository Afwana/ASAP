export default function Documents() {
  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="flex justify-between items-center w-full mt-5">
        <p className="text-lg text-[#2A2A2A] font-bold">
          Documents & Certificates
        </p>
        <button
          type="button"
          className="text-[#198FD9] bg-[#198FD91A] cursor-pointer h-[39px] rounded-tl-md rounded-tr-2xl rounded-b-md px-3 text-base font-medium">
          Add Documents
        </button>
      </div>
      {/* <div className="border border-[##EEEEEE] p-5 rounded-xl flex flex-col gap-5"></div> */}
    </div>
  );
}
