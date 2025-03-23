import Image from "next/image";
import PaymentLogo from "../../public/images/Payment.png";

export default function PaymentPending() {
  return (
    <div className="bg-[#5CB01A1A] rounded-xl flex justify-between items-center px-5 mt-5">
      <div className="flex items-center gap-5 pt-3">
        <div className="w-[110px] h-[110px] relative">
          <Image src={PaymentLogo} alt="Payment logo" />
        </div>
        <div className="flex flex-col gap-[5px]">
          <p className="text-lg font-bold text-[#2A2A2A]">Payment Pending</p>
          <p className="text-[13px] text-[#7F7F7F]">
            Registration fee 500 rupees pending.
            <br /> Pay now and get access to all services.
          </p>
        </div>
      </div>
      <button
        type="button"
        className="text-white bg-[#F9444A] cursor-pointer h-[50px] rounded-tl-md rounded-tr-2xl rounded-b-md w-[130px] text-base font-medium">
        Pay Now
      </button>
    </div>
  );
}
