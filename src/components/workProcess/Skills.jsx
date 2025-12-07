import { FaHtml5, FaCss3Alt, FaReact, FaPython } from "react-icons/fa";
import { SiJavascript, SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-4xl" />, level: 90, color: "bg-orange-500" },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-4xl" />, level: 85, color: "bg-blue-500" },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-500 text-4xl" />, level: 90, color: "bg-yellow-500" },
  { name: "ReactJS", icon: <FaReact className="text-cyan-500 text-4xl" />, level: 85, color: "bg-cyan-500" },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500 text-4xl" />, level: 85, color: "bg-teal-500" },
  // { name: "Python", icon: <FaPython className="text-green-500 text-2xl" />, level: 70, color: "bg-green-500" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">
          My <span className="text-purple-600">Skills</span>
        </h2>
        <p className="text-gray-600 mb-10 text-2xl">
          Technologies and tools I work with to bring ideas to life
        </p>

        <h3 className="text-2xl font-bold mb-8">Core Technologies</h3>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md flex flex-col">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2">
                  {skill.icon}
                  <span className="font-semibold text-gray-800">{skill.name}</span>
                </div>
                <span className="text-gray-600 font-medium">{skill.level}%</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div
                  className={`${skill.color} h-2 rounded-full`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tools & Technologies  */}
      <div className="mt-16 max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Tools & Technologies</h3>
        <div className="grid grid-cols-4 small:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center group-hover:scale-105">
            <div className="text-3xl mb-3 group-hover:animate-bounce">📦</div>
            <h4 className="text-sm font-medium text-gray-800 leading-tight">Git & Github</h4>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center group-hover:scale-105">
            <div className="text-3xl mb-3 group-hover:animate-bounce">💻</div>
            <h4 className="text-sm font-medium text-gray-800 leading-tight">VS Code</h4>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center group-hover:scale-105">
            <div className="text-3xl mb-3 group-hover:animate-bounce">📱</div>
            <h4 className="text-sm font-medium text-gray-800 leading-tight">Responsive Design</h4>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center group-hover:scale-105">
            <div className="text-3xl mb-3 group-hover:animate-bounce">📋</div>
            <h4 className="text-sm font-medium text-gray-800 leading-tight">NPM</h4>
          </div>
        </div>
      </div>

      <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 text-center">

        <div className="text-center p-6 bg-white rounded-xl shadow-lg">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🎨</span>
          </div>
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Frontend Devlopment</h4>
          <p className="text-gray-600 text-sm">Building responsive and interactive user interfaces with modern frameworks and libraries</p>
        </div>

        <div className="text-center p-6 bg-white rounded-xl shadow-lg">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">📱</span>
          </div>
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Responsive Design</h4>
          <p className="text-gray-600 text-sm">Creating mobile-first designs that work seamlessly across all devices and screen sizes</p>
        </div>

        <div className="text-center p-6 bg-white rounded-xl shadow-lg">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">⚡</span>
          </div>
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Performance</h4>
          <p className="text-gray-600 text-sm">Optimizing web applications for speed, accessibility, and excellent user experience</p>
        </div>

      </div>
    </section>
  );
};

export default Skills;
