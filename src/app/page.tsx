"use client";
import Footer from "@/components/shared/Footer";
import Banner from "@/components/ui/Home/Banner";
import Contact from "@/components/ui/Home/Contact";
import Help from "@/components/ui/Home/Help";
import LatestNews from "@/components/ui/Home/LatestNews";
import Pricing from "@/components/ui/Home/Pricing";
import QualityService from "@/components/ui/Home/QualityService";
import RecentStories from "@/components/ui/Home/RecentStories";
import Team from "@/components/ui/Home/Team";
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
      <LatestNews />
      <Contact />
      <Footer />
    </>
  );
}
