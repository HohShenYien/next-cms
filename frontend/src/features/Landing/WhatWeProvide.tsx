import { IconType } from "react-icons";
import {
  MdOutlineCalendarMonth,
  MdOutlineChecklist,
  MdOutlineDashboard,
} from "react-icons/md";
import { BsArrowUpRight } from "react-icons/bs";
import LandingContainer from "./LandingContainer";
import Button from "@/components/buttons/Button";
import { Tooltip } from "@mantine/core";
import Image from "next/image";

type FeatureCardProps = {
  title: string;
  description: string;
  Icon: IconType;
  image: string;
};

const FeatureCard = ({ title, description, Icon, image }: FeatureCardProps) => {
  return (
    <div className="relative flex-[3] rounded-lg border-2 border-gray-200 px-6 py-12">
      <div className="absolute left-[50%] top-0 -translate-x-[50%] -translate-y-[50%] rounded-full bg-blue-100 p-3">
        <Icon className="text-blue-600" size="32" />
      </div>
      <h3 className="mb-4 text-xl font-medium">{title}</h3>
      <p className="font-light text-slate-600">{description}</p>
      <div className="absolute bottom-0 left-[50%] -translate-x-[50%] translate-y-[50%] bg-white">
        <Tooltip.Floating
          label={
            <Image src={image} height="300" width="400" alt="Test Image " />
          }
          offset={-200}
          classNames={{ tooltip: "p-0 shadow-md rounded-md overflow-hidden" }}
        >
          <Button variant="outline" className="px-12">
            <BsArrowUpRight />
          </Button>
        </Tooltip.Floating>
      </div>
    </div>
  );
};

const features: FeatureCardProps[] = [
  {
    title: "Course Management",
    description:
      "Easily create new courses and begin to upload course materials and create quizzes",
    Icon: MdOutlineDashboard,
    image: "/images/landing/elearn4.jpg",
  },
  {
    title: "Attendance System",
    description:
      "Stop calling the students' names one-by-one, the students can just input the codes to mark their attendance",
    Icon: MdOutlineChecklist,
    image: "/images/landing/elearn4.jpg",
  },
  {
    title: "Schedule Management",
    description:
      "Manage and arrange the time table of the classes effectively online ",
    Icon: MdOutlineCalendarMonth,
    image: "/images/landing/elearn4.jpg",
  },
];

const WhatWeProvide = () => {
  return (
    <LandingContainer innerClass="text-center">
      <h2 className="text-5xl">What We Provide</h2>
      <div className="mx-auto mt-3 h-1.5 w-40 -translate-x-[60%] rounded-full bg-blue-600" />
      <div className="mt-4 text-slate-600">
        A comprehensive course management system that takes care of <br />
        all your needs to digitalize your education system.
      </div>
      <div className="mt-20 flex justify-center space-x-6">
        <div className="flex-1" />
        {features.map((feature, idx) => (
          <FeatureCard {...feature} key={idx} />
        ))}
        <div className="flex-1" />
      </div>
    </LandingContainer>
  );
};

export default WhatWeProvide;
