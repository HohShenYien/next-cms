import { clsx } from "@mantine/core";
import Image from "next/image";
import LandingContainer from "./LandingContainer";

const Introduction = () => {
  return (
    <LandingContainer innerClass="grid grid-cols-2 gap-6">
      <div className="grid-rows-12 grid h-[600px] grid-cols-2 gap-6">
        {Array(4)
          .fill(1)
          .map((_, idx) => (
            <Image
              key={idx}
              className={clsx(
                "h-full rounded-md object-cover shadow-md",
                idx === 0 || idx === 2 ? "row-span-4" : "row-span-3"
              )}
              src={`/images/landing/elearn${idx + 1}.jpg`}
              alt="Next.js Logo"
              width={400}
              height={400}
            />
          ))}
      </div>
      <div className="flex items-center space-y-6 py-16">
        <div className="space-y-2 pr-6">
          <div className="">
            <h2 className="mb-2 font-bold text-blue-700">Introduction</h2>
            <p className="mb-12 text-5xl font-semibold">
              Why online learning is better than traditional?
            </p>
            <p className="">
              Online learning allows them to take control of their learning
              process.
            </p>
            <p className="mt-4 text-slate-600">
              They can go through the content, re-read chapters, listen to
              audiobooks or take help from external links. This helps them
              undertake courses as per their learning capacity and convenience.
            </p>
          </div>
        </div>
      </div>
    </LandingContainer>
  );
};

export default Introduction;
