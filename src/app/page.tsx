"use client";
import Footer from "@/components/shared/Footer";
import Banner from "@/components/ui/Home/Banner";
import Help from "@/components/ui/Home/Help";
import QualityService from "@/components/ui/Home/QualityService";
import RecentStories from "@/components/ui/Home/RecentStories";

export default function Home() {
  return (
    <>
      <Banner />
      <RecentStories />
      <QualityService />
      <Help />
      <Footer />
    </>
  );
}
