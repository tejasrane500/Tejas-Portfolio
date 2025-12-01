import img1 from "../../assets/images/blog/blog-1.jpg";
import img2 from "../../assets/images/blog/blog-2.jpg";
import img3 from "../../assets/images/blog/blog-3.jpg";
import img4 from "../../assets/images/blog/blog-4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import MonoBlog from "./MonoBlog";
import "swiper/css";
import "swiper/css/pagination";
import "./blog.css";

// Breakpoints for swiperJS
const custom_breakpoints = {
  640: {
    slidesPerView: 2,
    spaceBetween: 15,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 15,
  },
  1220: {
    slidesPerView: 4,
    spaceBetween: 24,
  },
};

const blogData = [
  {
    id: 1,
    image: img1,
    date: "22 Oct, 2020",
    comments: 246,
    title: "Designing Engaging User Interfaces for Modern Web Apps",
    link: "#!",
  },
  {
    id: 2,
    image: img2,
    date: "22 Oct, 2020",
    comments: 246,
    title: "Tips for Effective Dashboard Layouts and Usability",
    link: "#!",
  },
  {
    id: 3,
    image: img3,
    date: "22 Oct, 2020",
    comments: 246,
    title: "How to Visualize Data for Better Product Decisions",
    link: "#!",
  },
  {
    id: 4,
    image: img4,
    date: "22 Oct, 2020",
    comments: 246,
    title: "Responsive Design: Adapting to All Devices Seamlessly",
    link: "#!",
  },
  {
    id: 5,
    image: img2,
    date: "22 Oct, 2020",
    comments: 246,
    title: "Streamlining Workflows with UI/UX Best Practices",
    link: "#!",
  },
  {
    id: 6,
    image: img1,
    date: "22 Oct, 2020",
    comments: 246,
    title: "Optimizing Interface Components for Performance",
    link: "#!",
  },
];

const Blog = () => {
  return (
    <div className="content py-25 px-2 relative" id="blog">
      <div className="max-w-135 text-center mx-auto pb-17.5">
        <h2 className="section-title pb-6">
          Let's <span className="text-purple-500">Connect</span></h2>
        <p className="text-xs xs:text-[16px] md:text-lg text-gray-400">
          I'm always excited to discuss new opportunities and collaborate on interesting projects.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="space-y-8 text-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">I'm currently looking for new opportunities as a Frontend Developer. Whether you have a question, want to discuss a project, or just want to say hello, I'd love to hear from you!</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <a href="https://mail.google.com/mail/u/0/?fs=1&to=rtejas621@gmail.com&tf=cm" className="flex flex-col items-center p-8 bg-gradient-to-r from-gray-50 to-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group hover:border-gray-200 text-center border-gray-200">
              <div className="p-4 rounded-xl bg-gradient-to-r from-red-500 to-pink-500 text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail w-6 h-6" aria-hidden="true"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect x="2" y="4" width="20" height="16" rx="2"></rect></svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">Email</h4>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors">rtejas621@gmail.com</p>
              </div>
            </a>
            <a href="https://github.com/tejasrane500" target="blank" className="flex flex-col items-center p-8 bg-gradient-to-r from-gray-50 to-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group hover:border-gray-200 text-center">
              <div className="p-4 rounded-xl bg-gradient-to-r from-gray-700 to-gray-900 text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github w-6 h-6" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">Git</h4>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors">github.com/tejasrane500</p>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/tejas-rane-a29865250/" target="blank" className="flex flex-col items-center p-8 bg-gradient-to-r from-gray-50 to-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group hover:border-gray-200 text-center">
              <div className="p-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin w-6 h-6" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">Linkdin</h4>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors">linkedin.com/in/tejas-rane-a29865250/</p>
              </div>
            </a>
            <a href="tele: +919370351341" className="flex flex-col items-center p-8 bg-gradient-to-r from-gray-50 to-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group hover:border-gray-200 text-center">
              <div className="p-4 rounded-xl bg-gradient-to-r from-green-500 to-green-700 text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone w-6 h-6" aria-hidden="true"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">Phone</h4>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors">+91 9370351341</p>
              </div>
            </a>
          </div>
          <div className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl max-w-md mx-auto text-center">
            <div className="flex flex-col items-center gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin w-6 h-6 text-blue-600" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Location</h4>
                <p className="text-gray-600">Bhusawal, India</p>
                <span className="text-sm text-gray-600 mt-0">Open to remote opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
