import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useRef } from "react";

const news = [
  {
    title:
      "Headmaster is retiring! Everyone please go and have some good celebration and stuffs you know",
    img: "/random-image.jpg",
    id: "asdfasdf",
  },
  {
    title: "Headmaster retiring!",
    img: "/random-image.jpg",
    id: "asdfasdf",
  },
  {
    title: "Headmaster retiring!",
    img: "/random-image.jpg",
    id: "asdfasdf",
  },
];

const SimpleNewsCarousel = () => {
  const autoplay = useRef(Autoplay({ delay: 6000 }));
  return (
    <div className="flex-1 px-4 py-4">
      <h3 className="mb-2 text-lg font-semibold">News</h3>
      <Carousel
        className="w-full rounded-md"
        maw={320}
        mx="auto"
        withIndicators
        classNames={{
          indicator: "w-2 h-2",
          indicators: "bottom-2",
          viewport: "rounded-md",
        }}
        loop
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        {news.map((item, idx) => (
          <Carousel.Slide key={idx}>
            <div className="relative h-full min-h-[260px] w-full">
              <Image fill src={item.img} alt={item.title} />
              <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-t from-blue-900/70 via-transparent to-transparent">
                <span className="absolute bottom-6 line-clamp-2 px-2 font-medium text-white">
                  {item.title}
                </span>
              </div>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default SimpleNewsCarousel;
