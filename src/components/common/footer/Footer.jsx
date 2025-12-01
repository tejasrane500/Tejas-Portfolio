import logo from "../../../assets/logo.png";
import { Link } from "react-scroll";

/* Footer nabLinks */
const navItems = [
  { id: 1, name: "Home", url: "Home" },
  { id: 2, name: "About", url: "About" },
  { id: 3, name: "Process", url: "Process" },
  { id: 4, name: "Portfolio", url: "Portfolio" },
  { id: 5, name: "Blog", url: "Blog" },
  { id: 6, name: "Services", url: "Services" },
  { id: 7, name: "Contact", url: "Contact" },
];
const copyrightYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white relative">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">

            <div className="md:col-span-1">
              <h3 className="text-2xl font-bold bg-purple-500 bg-clip-text text-transparent mb-4">Tejas Rane</h3>
              <p className="text-gray-300 leading-relaxed mb-4">Passionate Frontend Developer creating beautiful and functional web experiences. Always learning, always growing, and ready for new challenges.</p>
              <p className="text-gray-400 text-sm">Bhusawal, India</p>
            </div>

            <div className="md:col-span-1">
              <h4 className="text-lg font-semibold mb-4"></h4>
              <div className="grid grid-cols-2 gap-2">
                <a href="#introduction" class="text-gray-300 hover:text-blue-400 transition-colors duration-300 py-1">Home</a>
                <a href="#profile" class="text-gray-300 hover:text-blue-400 transition-colors duration-300 py-1">About</a>
                <a href="#skills" class="text-gray-300 hover:text-blue-400 transition-colors duration-300 py-1">Skills</a>
                <a href="#portfolio" class="text-gray-300 hover:text-blue-400 transition-colors duration-300 py-1">Project</a>
                <a href="#blog" class="text-gray-300 hover:text-blue-400 transition-colors duration-300 py-1">Contacts</a>
              </div>
            </div>

            <div className="md:col-span-1">
              <h4 class="text-lg font-semibold mb-4">Let's Connect</h4>
              <div class="space-y-3">
                <a href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=rtejas621@gmail.com" class="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-300">rtejas621@gmail.com</a>
                <a href="https://github.com/tejasrane500?tab=repositories" target="_blank" rel="noopener noreferrer" class="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-300">GitHub Profile</a>
                <a href="https://www.linkedin.com/in/tejas-rane-a29865250/" target="_blank" rel="noopener noreferrer" class="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-300">LinkedIn Profile</a></div>
            </div>

          </div>

          <div class="border-t border-gray-700 pt-8">
            <div class="flex flex-col md:flex-row justify-between items-center gap-4">
              <div class="flex items-center gap-2 text-gray-400 text-sm">
                <span>© 2025 Tejas Rane</span>
              </div>
              <div class="flex items-center gap-4 text-sm text-gray-400">
                <span>Made with:</span>
                <div class="flex gap-2">
                  <span class="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs">React</span>
                  <span class="bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded text-xs">Tailwind CSS</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
