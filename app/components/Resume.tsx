import { message, Upload, UploadProps } from "antd";

export default function Resume() {
  const { Dragger } = Upload;

  const props: UploadProps = {
    name: "file",
    multiple: true,
    action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between items-center w-full mt-5">
        <p className="text-lg text-[#2A2A2A] font-bold">Resume</p>
      </div>
      <div className="border border-[##EEEEEE] p-5 rounded-xl flex flex-col gap-3">
        <div className="flex gap-5 justify-center">
          <div className="uploaded file to show"></div>
          <Dragger {...props} className="w-1/2">
            <button
              type="button"
              className="text-[#198FD9] bg-[#198FD91A] cursor-pointer h-[39px] rounded-tl-md rounded-tr-2xl rounded-b-md px-3 text-base font-medium">
              Upload Resume
            </button>
            <p className="text-[13px] text-[#7F7F7F]">
              doc, docx, pdf upto 2 MB
            </p>
          </Dragger>
        </div>
        <div className="flex gap-5 justify-center">
          <div className="uploaded file to show"></div>
          <Dragger {...props} className="w-1/2">
            <button
              type="button"
              className="text-[#198FD9] bg-[#198FD91A] cursor-pointer h-[39px] rounded-tl-md rounded-tr-2xl rounded-b-md px-3 text-base font-medium">
              Add Video Resume
            </button>
            <p className="text-[13px] text-[#7F7F7F]">mp4, mkv uto 20 MB</p>
          </Dragger>
        </div>
      </div>
    </div>
  );
}
