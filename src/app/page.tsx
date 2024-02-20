"use client";
import Contact from "@/components/common/Contact";
import Pricing from "@/components/common/Pricing";
import QualityService from "@/components/common/QualityService";
import RecentStories from "@/components/common/RecentStories";
import Team from "@/components/common/Team";
import Footer from "@/components/shared/Footer";
import Banner from "@/components/ui/Home/Banner";
import Help from "@/components/ui/Home/Help";
import Testimonials from "@/components/ui/Home/Testimonials";

export default function Home() {
  return (
    <>
      <Banner />
      <RecentStories />
      <QualityService />
      <Help />
      <Team />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}
