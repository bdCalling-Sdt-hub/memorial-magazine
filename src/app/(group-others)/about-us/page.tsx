import Contact from "@/components/common/Contact";
import RecentStories from "@/components/common/RecentStories";
import More from "@/components/ui/About/More";

const AboutPage = () => {
  return (
    <div className="container my-20">
      <More />
      <RecentStories />
      {/* <Team /> */}
      <Contact />
    </div>
  );
};

export default AboutPage;
