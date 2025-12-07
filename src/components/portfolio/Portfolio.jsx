import weather from "../../assets/weather.png";
import weatherVideo from "../../assets/weatherVideo.mp4";
import imagefinder from "../../assets/imagefinder.png";
import imagefinderVideo from "../../assets/imagefinderVideo.mp4";
import Blog from "../../assets/Blog.png";
import BlogVideo from "../../assets/BlogVideo.mp4";
import Admission from "../../assets/Admission.png";
import AdmissionVideo from "../../assets/AdmissionVideo.mp4";

const projects = [
  {
    title: "Image Finder App",
    description:
      "Built a responsive Image Finder application leveraging React.js and Tailwind CSS, integrating the Unsplash API for real-time image search and infinite scroll functionality.and adaptive layouts for all devices.",
    tech: ["ReactJS", "Tailwind CSS", "Open API" , "JavaScript(ES6+)" , "Unsplash API"],
    image: imagefinder,
    links: { demo: "https://lively-bienenstitch-41f09d.netlify.app/", code: "https://github.com/tejasrane500/Image-finder", preview: imagefinderVideo },
  },
  {
    title: "Weather Forecast App",
    description:
      "A responsive weather application that provides real-time, location-based forecasts with a detailed 7-day outlook. It integrates the OpenWeather API for accurate data and uses Leaflet.js to display interactive maps with overlays.",
    tech: ["ReactJS", "Tailwind CSS", "OpenWeatherMap API", "JavaScript(ES6+)"],
    image: weather,
    links: { demo: "https://dainty-klepon-983b27.netlify.app/", code: "https://github.com/tejasrane500/Weather-App", preview: weatherVideo }, 
  },
  {
    title: "Blogging App",
    description:
      "A full-stack blog platform built using the MERN stack. Features include user authentication, post creation and editing, comment system, and responsive design for seamless usability across devices.",
    tech: ["ReactJS", "Tailwind CSS", "Mongo DB", "Lucide Icons", "JavaScript(ES6+)"],
    image: Blog,
    links: { demo: "https://magnificent-profiterole-60910a.netlify.app/", code: "https://github.com/tejasrane500/zidio_final_project", preview: BlogVideo },
  },
  {
    title: "Admission Process Module",
    description:
      "I've Developed an Admission Process Module to streamline student registration, and course allocation. Implemented secure authentication, and admin dashboards for efficient management. Integrated email notifications and dynamic form validation to enhance user experience and reduce manual workload.",
    tech: ["ReactJS", "Tailwind CSS", "Framer Motion", "Mongo DB" , "Javascript(ES6+)"],
    image: Admission,
    links: { demo: "#", code: "https://github.com/tejasrane500/admission-module-frontend", preview: AdmissionVideo },
  },
];

export default function Projects() {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto" id="portfolio">
      <h2 className="text-center text-4xl font-bold mb-2">
        My <span className="text-purple-500">Projects</span>
      </h2>
      <p className="text-center text-gray-600 mb-12">
        Here are some of the projects I've built to showcase my frontend
        development skills
      </p>

      {/* Project Grid */}
      <div className="grid md:grid-cols-2 gap-8 place-items-center">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col w-[500px]"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-72 object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-700"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-auto flex gap-3">
                <a
                  href={project.links.demo}
                  className="px-4 py-2 rounded-lg bg-purple-600 text-white text-sm font-medium hover:bg-purple-700"
                >
                  Live Demo
                </a>
                <a
                  href={project.links.code}
                  className="px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium hover:bg-gray-100"
                >
                  Code
                </a>
                <a
                  href={project.links.preview}
                  className="px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium hover:bg-gray-100"
                >
                  Preview
                </a>
              </div>
            </div >
          </div>
        ))}
      </div>

      {/* GitHub Button */}
      <div className="text-center mt-12">
        <a
          href="https://github.com/tejasrane500?tab=repositories"
          className="px-6 py-3 rounded-lg bg-black text-white text-sm font-medium hover:bg-gray-800"
        >
          View All Projects on GitHub
        </a>
      </div>
    </section>
  );
}
