import Logo from "@/components/branding/Logo";
import { ActionIcon } from "@mantine/core";
import Link from "next/link";
import { IconType } from "react-icons";
import { FaFacebook, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const socials: { Icon: IconType; link: string }[] = [
  { Icon: FaGithub, link: "https://github.com/HohShenYien/next-lms" },
  { Icon: FaFacebook, link: "https://facebook.com" },
  { Icon: FaLinkedin, link: "https://linkedin.com" },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="flex justify-center px-12">
        <div className="max-w-6xl flex-1">
          <div className="grid grid-cols-12 gap-12 py-12">
            <div className="col-span-4 space-y-6">
              <div className="flex items-center space-x-4">
                <Logo size={48} />
                <div className="text-3xl font-semibold text-white">
                  Next LMS
                </div>
              </div>
              <div className="text-slate-400">
                Reshaping the Education in a 21st century way. Moving forward
                with online teaching and learning, where everyone can learn
                anywhere, anytime.
              </div>
            </div>
            <div className="col-span-8 grid grid-cols-3 pt-6">
              <div className="flex flex-col space-y-4 text-slate-400">
                <b className="text-white">Services</b>
                <Link href="#">Course Management</Link>
                <Link href="#">Attendance System</Link>
                <Link href="#">Schedule Management</Link>
              </div>
              <div className="flex flex-col space-y-4 text-slate-400">
                <b className="text-white">Legal</b>
                <Link href="#">General Info</Link>
                <Link href="#">Privacy Policy</Link>
                <Link href="#">Terms of services</Link>
                <Link href="#">Consultations</Link>
                <Link href="#">How it Works</Link>
              </div>
              <div className="flex flex-col space-y-4 text-slate-400">
                <b className="text-white">Talk to Us</b>
                <span className="flex space-x-2">
                  <GrMail className="text-slate-300" />
                  <Link href="#">hello@next-lms.com</Link>
                </span>
                <span className="flex space-x-2">
                  <GrMail className="text-slate-300" />
                  <Link href="#">support@next-lms.com</Link>
                </span>
                <span className="flex space-x-2">
                  <FaPhoneAlt className="text-slate-300" />
                  <Link href="#">+6012-3456789</Link>
                </span>
                <span className="flex space-x-2">
                  <FaPhoneAlt className="text-slate-300" />
                  <Link href="#">+6012-3456789</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen border-t-2 border-t-slate-400" />
      <div className="flex justify-center px-12">
        <div className="flex max-w-6xl flex-1 justify-between py-4">
          <div className="text-slate-300">
            @2023 Next LMS. No rights reserved.
          </div>
          <div className="flex space-x-4">
            {socials.map(({ Icon, link }, idx) => (
              <Link key={idx} href={link}>
                <Icon
                  size="32"
                  className="text-slate-400 transition-all hover:text-slate-300"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
