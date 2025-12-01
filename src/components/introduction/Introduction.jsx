import person from "../../assets/images/person.png";
import "./introduction.css";
import InformationSummary from "./InformationSummary";

// Information summary data
const informationSummaryData = [
  {
    id: 1,
    title: "Experience",
    description: "15 Y.",
  },
  {
    id: 2,
    title: "Projects Completed",
    description: "250+",
  },
  {
    id: 3,
    title: "Happy Clients",
    description: "58",
  },
];

const Introduction = () => {
  return (
    <div
      className="flex flex-col text-center justify-center items-center max-lg:flex-col-reverse sm:justify-between pt-10 pl-32 lg:pt-25 lg:mb-27.5 max-xl:gap-2 p-2 max-xxl:px-4"
      id="introduction"
    >
      <div className="w-full flex flex-col justify-between max-lg:text-center">
        <div className="pt-13 me-31.5 w-full lg:w-auto transition-all duration-500">
          <p className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full">
            Hello, I’m
            <span className="text-nowrap shrink-0 inline-block w-full text-purple-500">
              Tejas Rane
            </span>
            <span className="py-6 text-3xl text-nowrap shrink-0 inline-block w-full">
              Front-end Devloper
            </span>
          </p>
          <p className="text-xs xxs:text-lg lg:text-[18px] my-6">
            Frontend Web Developer skilled in React.js, JavaScript, HTML, CSS, and Tailwind CSS. Experienced in building responsive, user-friendly web applications with clean and efficient code. Passionate about crafting seamless UI and integrating APIs for real-world projects.
          </p>
          <p className="text-center">
            <a
              className="btn-primary btn btn-xs xxs:btn-lg text-white"
              href="public/Tejas_rane_resume.pdf"
              target="blank"
            >
              Download Resume
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
