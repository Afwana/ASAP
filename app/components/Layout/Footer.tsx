import Image from "next/image";
import logo from "../../../public/images/asap-logo.png";
import { MdHeadsetMic } from "react-icons/md";
import { IoMdMailUnread } from "react-icons/io";
import { Button, Input, Space } from "antd";
import Link from "next/link";
import facebook from "../../../public/images/Icons/Facebook.png";
import instagram from "../../../public/images/Icons/Instagram.png";
import twitter from "../../../public/images/Icons/Xtwitter.png";
import linkedin from "../../../public/images/Icons/linkedin.png";
import youtube from "../../../public/images/Icons/youtube.png";

export default function Footer() {
  return (
    <div className="bg-white flex flex-col gap-5 p-10">
      <div className="flex flex-col lg:flex-row lg:justify-between items-start w-full">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col md:flex-row items-center gap-5">
            <div className="w-[182px] h-[80px] relative">
              <Image src={logo} alt="asap Logo" fill objectFit="cover" />
            </div>
            <div className="flex flex-col gap-1.5">
              <p className="text-base text-[#2A2A2A] font-sarabun">
                Quick Links
              </p>
              <div className="flex flex-row lg:flex-col ">
                <div className="flex flex-col lg:flex-row gap-5 items-start lg:items-center">
                  {[
                    "About Us",
                    "Careers",
                    "Blogs",
                    "Press Release",
                    "Jobs",
                    "FAQ's",
                    "Internship",
                    "Job Fair",
                    "Placement",
                  ].map((item, index) => (
                    <div key={index} className="text-[#7F7F7F] text-sm">
                      {item}
                    </div>
                  ))}
                </div>
                <div className="flex flex-col lg:flex-row gap-5 items-start lg:items-center">
                  {[
                    "Testimonials",
                    "Grievances",
                    "Contact Us",
                    "Privacy Policy",
                    "Terms & Conditions",
                    "Sitemap",
                  ].map((item, index) => (
                    <div key={index} className="text-[#7F7F7F] text-sm">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ml-3">
            <div className="flex flex-col gap-2.5">
              <h2 className="text-[#2A2A2A] text-base font-medium">
                Internship by Stream
              </h2>
              <p className="flex flex-col gap-2 text-[#7F7F7F] text-sm">
                <Link href={"/"}>Computer Science</Link>
                <Link href={"/"}>Electronics</Link>
                <Link href={"/"}>Marketing</Link>
                <Link href={"/"}>Finance</Link>
                <Link href={"/"}>Civil</Link>
                <Link href={"/"}>Chemical</Link>
                <Link href={"/"}>View all Internship</Link>
              </p>
            </div>
            <div className="flex flex-col gap-2.5">
              <h2 className="text-[#2A2A2A] text-base font-medium">
                Job by stream
              </h2>
              <p className="flex flex-col gap-2 text-[#7F7F7F] text-sm">
                <Link href={"/"}>Marketing</Link>
                <Link href={"/"}>Web Development</Link>
                <Link href={"/"}>Sales</Link>
                <Link href={"/"}>Finance</Link>
                <Link href={"/"}>Digital Marketing</Link>
                <Link href={"/"}>Content Writing</Link>
                <Link href={"/"}>View all Jobs</Link>
              </p>
            </div>
            <div className="flex flex-col gap-2.5">
              <h2 className="text-[#2A2A2A] text-base font-medium">
                Guaranteed Courses
              </h2>
              <p className="flex flex-col gap-2 text-[#7F7F7F] text-sm">
                <Link href={"/"}>HR Management</Link>
                <Link href={"/"}>Digital Marketing</Link>
                <Link href={"/"}>Electric Vehicle</Link>
                <Link href={"/"}>UI/UX Design</Link>
                <Link href={"/"}>Product Management</Link>
                <Link href={"/"}>Full Stack Development</Link>
                <Link href={"/"}>Data Science</Link>
              </p>
            </div>
            <div className="flex flex-col gap-2.5">
              <h2 className="text-[#2A2A2A] text-base font-medium">
                Explore Companies
              </h2>
              <p className="flex flex-col gap-2 text-[#7F7F7F] text-sm">
                <Link href={"/"}>Top Companies</Link>
                <Link href={"/"}>IT Companies</Link>
                <Link href={"/"}>MNC&apos;s</Link>
                <Link href={"/"}>Startup</Link>
                <Link href={"/"}>Product Based</Link>
                <Link href={"/"}>Govt. PSU</Link>
                <Link href={"/"}>View all Companies</Link>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[30px] justify-start border border-[#EEEEEE] p-5 rounded-[30px]">
          <div className="flex flex-col gap-[15px]">
            <p className="text-base text-[#2A2A2A] font-sarabun font-medium">
              Are you having any issues?
            </p>
            <div className="flex flex-col md:flex-row gap-5">
              <div className="flex gap-2.5">
                <p className="w-11 h-11 rounded-full bg-[#F9444A1A] flex items-center justify-center">
                  <MdHeadsetMic color="#F9444A" size={24} />
                </p>
                <p className="flex flex-col">
                  <span className="text-[13px] text-[#7F7F7F]">
                    Call Support
                  </span>
                  <span className="text-base font-medium text-[#2A2A2A]">
                    +919495999623
                  </span>
                </p>
              </div>
              <div className="flex gap-2.5">
                <p className="w-11 h-11 rounded-full bg-[#198FD91A] flex items-center justify-center">
                  <IoMdMailUnread color="#198FD9" size={24} />
                </p>
                <p className="flex flex-col">
                  <span className="text-[13px] text-[#7F7F7F]">
                    Email Support
                  </span>
                  <span className="text-base font-medium text-[#2A2A2A]">
                    info@asapkerala.gov.in
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[15px]">
            <p className="text-base font-medium text-[#2A2A2A]">ASAP Kerala</p>
            <p className="text-sm text-[#7F7F7F]">
              KINFRA Film and Video Park, Sainik School P.O,
              <br /> Chanthavila, Thiruvananthapuram, Kerala, India-695585
            </p>
          </div>
          <div className="flex flex-col gap-[15px]">
            <p className="text-base font-medium text-[#2A2A2A]">Newsletter</p>
            <div>
              <p className="text-sm text-[#7F7F7F] mb-2">
                Never miss a beat with our newsletter updates!
              </p>
              <Space.Compact style={{ width: "100%" }}>
                <Input defaultValue="Combine input and button" size="large" />
                <Button variant="solid" color="green" size="large">
                  Submit
                </Button>
              </Space.Compact>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center w-full">
        <div className="flex flex-col gap-2 text-[#7F7F7F]">
          <p className="text-base font-semibold">
            © 2024 ASAP Kerala. All Rights Reserved
          </p>
          <p className="text-sm">Powered by SRV InfoTech</p>
        </div>
        <div className="flex gap-2.5 items-center text-[#7F7F7F]">
          <p className="text-sm font-medium">Stay Connected with Us</p>
          <div className="flex gap-2.5">
            <Image src={facebook.src} alt="icon" width={32} height={32} />
            <Image src={instagram} alt="icon" width={32} height={32} />
            <Image src={twitter} alt="icon" width={32} height={32} />
            <Image src={linkedin} alt="icon" width={32} height={32} />
            <Image src={youtube} alt="icon" width={32} height={32} />
          </div>
        </div>
      </div>
    </div>
  );
}
