"use client";

import Head from "next/head";
import Header from "./components/Layout/Header";
import ProfileSection from "./components/ProfileSection";
import BasicInformation from "./components/BasicInformation";
import PaymentPending from "./components/PaymentPending";
import Education from "./components/Education";
import Careers from "./components/Careers";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Experiences from "./components/Experiences";
import Preferences from "./components/Preferences";
import Documents from "./components/Documents";
import Footer from "./components/Layout/Footer";
import { Radio, RadioChangeEvent } from "antd";
import { CheckboxGroupProps } from "antd/es/checkbox";
import { useEffect, useRef, useState } from "react";

const plainOptions: CheckboxGroupProps<string>["options"] = [
  "Basic Information",
  "Education",
  "Career Objective",
  "Key Skills",
  "Resume/Portfolio",
  "Preferences",
  "Work Experiences",
  "Additional Documents",
];

export default function Home() {
  const [selectedOption, setSelectedOption] = useState("Basic Information");

  const basicInfoRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const careerRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const resumePortfolioRef = useRef<HTMLDivElement>(null);
  const preferencesRef = useRef<HTMLDivElement>(null);
  const experiencesRef = useRef<HTMLDivElement>(null);
  const documentsRef = useRef<HTMLDivElement>(null);

  const handleRadioChange = ({ target: { value } }: RadioChangeEvent) => {
    console.log("radio option selected:", value);
    setSelectedOption(value);
  };

  useEffect(() => {
    const scrollToComponent = () => {
      let ref;
      switch (selectedOption) {
        case "Basic Information":
          ref = basicInfoRef;
          break;
        case "Education":
          ref = educationRef;
          break;
        case "Career Objective":
          ref = careerRef;
          break;
        case "Key Skills":
          ref = skillsRef;
          break;
        case "Resume/Portfolio":
          ref = resumePortfolioRef;
          break;
        case "Preferences":
          ref = preferencesRef;
          break;
        case "Work Experiences":
          ref = experiencesRef;
          break;
        case "Additional Documents":
          ref = documentsRef;
          break;
        default:
          return;
      }

      if (ref?.current) {
        ref.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    scrollToComponent();
  }, [selectedOption]);

  return (
    <main>
      <Head>
        <title>Home - ASAP</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Additional skill acquisition programme"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="ASAP" />
        <meta property="og:url" content="https://asap.co" />
        <meta property="og:image" content="" />
        <meta
          property="og:description"
          content="Additional skill acquisition programme"
        />
      </Head>
      <div className="bg-white">
        <Header />
        <div className="flex flex-col lg:flex-row w-full items-start gap-10 px-10 mt-5">
          <ProfileSection />
          <div className="">
            <div ref={basicInfoRef}>
              <BasicInformation />
            </div>
            <PaymentPending />
            <div ref={educationRef}>
              <Education />
            </div>
            <div ref={careerRef}>
              <Careers />
            </div>
            <div ref={skillsRef}>
              <Skills />
            </div>
            <div ref={resumePortfolioRef}>
              <Resume />
              <Portfolio />
            </div>
            <div ref={experiencesRef}>
              <Experiences />
            </div>
            <div ref={preferencesRef}>
              <Preferences />
            </div>
            <div ref={documentsRef}>
              <Documents />
            </div>
          </div>
          <div className="w-1/2">
            <Radio.Group
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
                //   color: "#9420CA",
              }}
              options={plainOptions}
              onChange={handleRadioChange}
              value={selectedOption}
            />
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
