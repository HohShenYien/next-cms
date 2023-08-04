import Image from "next/image";
import LandingContainer from "./LandingContainer";

type PersonDescribeProps = {
  name: string;
  description: string;
};

const PersonDescribe = ({ name, description }: PersonDescribeProps) => {
  return (
    <div>
      <div className="relative font-semibold">
        <div className="absolute -left-[24px] top-1 rounded-full border-2 border-blue-800 bg-white p-0.5">
          <div className="h-3 w-3 rounded-full bg-blue-600" />
        </div>
        {name}
      </div>
      <div className="font-light">{description}</div>
    </div>
  );
};

const people: PersonDescribeProps[] = [
  {
    name: "Mr. James Watt",
    description:
      "A vetaran high school teacher who knows exactly the problems of physical education.",
  },
  {
    name: "Dr. Kara Maclay",
    description:
      "A University Professor who is leading the digitalization movement in education.",
  },
  {
    name: "Ms. Iris West",
    description:
      "Principal of high school who has been bringing digitalization into her school.",
  },
];

const AboutUs = () => {
  return (
    <LandingContainer
      containerClass="bg-blue-50"
      innerClass="grid grid-cols-2 gap-6"
    >
      <div className="flex items-center justify-center">
        <Image
          src="/images/landing/us.png"
          height="600"
          width="600"
          alt="About Us"
        />
      </div>
      <div className="pr-24">
        <h2 className="text-5xl">About Us</h2>
        <div className="mt-3 h-1.5 w-28 rounded-full bg-blue-600" />
        <div className="mt-4  text-slate-600">
          We are a group of online education advocates who came together to
          build Next LMS using the Next Generation Technology. We were once
          teachers like you too, and we know the pain of managing everything
          through pen and paper.
        </div>
        <div className="relative mt-6 space-y-4 pl-8">
          <div className="absolute bottom-0 left-4 top-0 w-0.5 bg-blue-400" />
          {people.map((person, idx) => (
            <PersonDescribe {...person} key={idx} />
          ))}
        </div>
      </div>
    </LandingContainer>
  );
};

export default AboutUs;
