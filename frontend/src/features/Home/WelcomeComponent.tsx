import NiceLink from "@/components/links/NiceLink";
import Image from "next/image";
import { FcInfo } from "react-icons/fc";
import { IoChevronForwardCircleSharp } from "react-icons/io5";

const pending = [
  {
    name: "Mid Term Quiz",
    id: "123",
    course: {
      name: "Computer Architecture",
      img: "/random-image.jpg",
    },
  },
  {
    name: "Mid Term Quiz",
    id: "456",
    course: {
      name: "Computer Architecture",
      img: "/random-image.jpg",
    },
  },
  {
    name: "Mid Term Quiz",
    id: "234",
    course: {
      name: "Computer Architecture Advanced",
      img: "/random-image.jpg",
    },
  },
];

const WelcomeComponent = () => {
  return (
    <div className="grid grid-cols-4 rounded-lg border-4 border-solid border-white bg-indigo-50 px-8 shadow-sm">
      <div className="col-span-3 py-6">
        <h3 className="text-xl font-semibold">Welcome back, Shen Yien!</h3>
        <div className="mb-2 mt-3 flex items-center space-x-2">
          <FcInfo size={24} />
          <div>You still have some pending quizzes to complete</div>
        </div>
        <div className="space-y-1 pl-10">
          {pending.map((quiz) => (
            <div key={quiz.id} className="flex items-start space-x-2">
              <NiceLink
                href={`/quiz/${quiz.id}`}
                className="flex items-center space-x-2"
              >
                <span className="whitespace-nowrap">{quiz.name} </span>
                <IoChevronForwardCircleSharp size={20} />
              </NiceLink>
              <div className="flex space-x-2 font-light text-slate-500">
                <div>&mdash;</div>
                <div>{quiz.course.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Image
        src="/images/assets/hello.png"
        alt="Welcome"
        width="200"
        height="300"
        className="mt-6"
      />
    </div>
  );
};

export default WelcomeComponent;
