const SKILLS = [
  "Communication",
  "Ui Designing",
  "Ui Development",
  "Leadership",
  "Human Resource",
  "php",
  "Accounting",
  "Data Science",
];
export default function Skills() {
  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="flex justify-between items-center w-full mt-5">
        <p className="text-lg text-[#2A2A2A] font-bold">Key Skills</p>
        <button
          type="button"
          className="text-[#198FD9] bg-[#198FD91A] cursor-pointer h-[39px] rounded-tl-md rounded-tr-2xl rounded-b-md px-3 text-base font-medium">
          Update Skills
        </button>
      </div>
      <div className="border border-[##EEEEEE] p-5 rounded-xl flex flex-col gap-3">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {SKILLS.map((item, index) => (
            <div
              key={index}
              className="h-[33px] border border-[#EEEEEE] rounded-[20px] p-1 text-sm font-medium text-[#7F7F7F] text-center">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
