import Image from "next/image";
import LandingContainer from "./LandingContainer";

const Hero = () => {
  return (
    <LandingContainer
      containerClass="bg-blue-50"
      innerClass="grid grid-cols-3 gap-6"
    >
      <div className="col-span-2 flex items-center space-y-6 py-16">
        <div className="space-y-2 pr-6">
          <div className="">
            <p className="text-xl font-light">
              Digitalize your education with Next CMS
            </p>
            <div className="-mt-2 text-8xl font-bold text-blue-700">
              Learn without limits.
            </div>
            <p className="mt-4 text-2xl">
              Learning without boundary, anywhere, anytime where Internet is
              present.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <Image
          className="relative"
          src="/images/landing/hero.png"
          alt="Hero Image"
          width={400}
          height={400}
        />
      </div>
    </LandingContainer>
  );
};

export default Hero;
