import AboutUs from "@/features/Landing/AboutUs";
import { NextPageWithAttributes } from "./_app";
import Hero from "@/features/Landing/Hero";
import Introduction from "@/features/Landing/Introduction";
import WhatWeProvide from "@/features/Landing/WhatWeProvide";
import Footer from "@/components/nav/Footer";
import getHeroLayout from "@/layouts/HeroLayout";

const Home: NextPageWithAttributes = () => {
  return (
    <div className="min-h-screen w-full">
      <Hero />
      <Introduction />
      <WhatWeProvide />
      <AboutUs />
      <Footer />
    </div>
  );
};

Home.isPublic = true;
Home.getLayout = getHeroLayout;
export default Home;
