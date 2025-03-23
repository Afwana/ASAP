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
import SideMenus from "./components/SideMenus";
import Footer from "./components/Layout/Footer";

export default function Home() {
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
            <BasicInformation />
            <PaymentPending />
            <Education />
            <Careers />
            <Skills />
            <Resume />
            <Portfolio />
            <Experiences />
            <Preferences />
            <Documents />
          </div>
          <SideMenus />
        </div>
        <Footer />
      </div>
    </main>
  );
}
