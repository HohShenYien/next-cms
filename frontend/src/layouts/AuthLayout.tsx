import { HasChildren } from "@/utils/types/props";
import { ReactElement, useEffect, useRef } from "react";
import { AnimatePresence, Variant, Variants } from "framer-motion";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { clsx } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/buttons/Button";
import { BsArrowLeftCircle } from "react-icons/bs";

const variants: Variants = {
  initial: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0, transition: { opacity: { duration: 0, delay: 0 } } },
};

export const AuthLayout = ({ children }: HasChildren) => {
  const router = useRouter();
  const isRegister = router.pathname === "/auth/login";
  const scrollableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const resetScrollPosition = () => {
      scrollableRef?.current?.scrollTo({ top: 0 });
    };
    resetScrollPosition();
  }, [router.pathname]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <div
        className={clsx("flex h-screen overflow-auto")}
        style={{
          flexDirection: isRegister ? "row" : "row-reverse",
        }}
        ref={scrollableRef}
      >
        <motion.div
          layout
          className="sticky top-0 flex-[2]"
          transition={{
            ease: "easeIn",
            duration: 0.3,
          }}
        >
          <div className="relative h-screen p-6">
            <Image
              src="/images/online-class.jpg"
              alt="Background image"
              height="1200"
              width="1200"
              className={clsx(
                "h-full w-full rounded-3xl object-cover shadow-md"
              )}
            />
            <motion.div
              className={clsx(
                "absolute top-6 rounded-2xl bg-blue-100/25 px-8 py-6 backdrop-blur-sm",
                isRegister ? "left-6" : "right-6 text-end"
              )}
              layout
              transition={{
                ease: "easeIn",
                duration: 0.3,
              }}
            >
              <div className="text-4xl font-semibold text-blue-400">
                Online learning is not the next big thing,
                <br /> it is the now <b className="text-blue-700">big thing</b>.
              </div>
              <div className="mt-4 text-xl">- Donna J. Abernathy</div>
            </motion.div>
          </div>
        </motion.div>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            className="flex flex-1 justify-center"
            variants={variants}
            key={router.pathname}
            initial="initial"
            animate="enter"
            exit="exit"
            transition={{
              ease: "easeIn",
              duration: 0.2,
              delay: 0.3,
            }}
          >
            <div className="flex max-w-[450px] flex-1 flex-col py-6">
              <div className="self-start">
                <Link href="/">
                  <Button variant="link" color="blue">
                    <BsArrowLeftCircle size="24" className="mr-3" /> Back to
                    homepage
                  </Button>
                </Link>
              </div>
              <div className="flex-1" />
              <div className="">{children}</div>
              <div className="flex-[2]" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </AnimatePresence>
  );
};
export default function getAuthLayout(page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
}
