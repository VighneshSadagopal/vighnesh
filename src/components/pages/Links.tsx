import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Globe,
  Mail,
} from "lucide-react";
import Image from "next/image";

export default function Links() {
  return (
    <article className="contact active" data-page="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>
      <section className="contact-form">
        <div className="rounded-2xl shadow-lg p-8 w-full text-center">
          {/* Profile Avatar */}
          <div className="mb-6">
            <div className="w-40 h-40 mx-auto rounded-full bg-gray-300 flex items-center justify-center profile-avatar">
              <img
                src="/profileAvatar.png"
                alt="Profile photo"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-3xl font-bold text-white mb-2">
            Vighnesh Sadagopal
          </h1>
          <p className="text-white mb-6">
            Full Stack Engineer - Drupal | React | Node.js | AI Enthusiast
          </p>

          {/* Description */}
          <p className="text-white leading-relaxed mb-8">
            Passionate about creating beautiful, functional web experiences.
            Let's connect and build something amazing together!
          </p>

          {/* Connect With Me Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-6">
              Connect With Me
            </h2>

            {/* Social Icons */}
            <div className="flex justify-center space-x-4 mb-8 social-icons">
              <a
                href="https://github.com/VighneshSadagopal"
                className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/vighnesh-sadagopal/"
                className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://x.com/_vighnesh_vs"
                className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.instagram.com/vighnesh__.p/"
                className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="www.vighneshsadagopal.com"
                className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
                aria-label="Website"
              >
                <Globe className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.drupal.org/u/vighneshh"
                className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
                aria-label="Drupal"
              >
                <svg
                  fill="#FFFFFF"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="20px"
                  height="20px"
                >
                  <path d="M 13.449219 4.550781 C 12.75 4.449219 11.699219 2.800781 11.148438 1.949219 L 10.5 1 L 10.25 2.148438 C 10.097656 2.699219 9.449219 4.550781 8.597656 4.851563 C 4.648438 6.050781 2 9.648438 2 13.699219 C 2 18.800781 6.25 23 11.5 23 C 16.75 23 21 18.800781 21 13.699219 C 21 9.300781 17.800781 5.449219 13.449219 4.550781 Z M 15.949219 20.101563 C 15.847656 20.199219 14.949219 20.800781 13.847656 20.898438 C 12.800781 21 11.347656 21.050781 10.449219 20.300781 C 10.300781 20.148438 10.347656 19.949219 10.449219 19.898438 C 10.550781 19.800781 10.648438 19.75 10.75 19.75 C 10.847656 19.75 10.898438 19.75 10.949219 19.800781 C 11.347656 20.101563 11.949219 20.351563 13.199219 20.351563 C 14.449219 20.351563 15.347656 20 15.75 19.699219 C 15.949219 19.550781 16 19.699219 16.050781 19.75 C 16.050781 19.851563 16.097656 19.949219 15.949219 20.101563 Z M 12.550781 18.351563 C 12.75 18.148438 13.097656 17.851563 13.449219 17.699219 C 13.75 17.550781 13.949219 17.601563 14.25 17.601563 C 14.550781 17.601563 14.898438 17.601563 15.148438 17.75 C 15.398438 17.898438 15.550781 18.25 15.597656 18.449219 C 15.699219 18.648438 15.597656 18.75 15.449219 18.851563 C 15.300781 18.949219 15.300781 18.898438 15.148438 18.648438 C 15 18.398438 14.898438 18.148438 14.199219 18.148438 C 13.5 18.148438 13.300781 18.398438 12.949219 18.648438 C 12.597656 18.898438 12.5 19 12.398438 18.851563 C 12.300781 18.699219 12.300781 18.550781 12.550781 18.351563 Z M 17.949219 17.898438 C 17.25 17.851563 15.800781 15.800781 14.898438 15.75 C 13.75 15.699219 11.25 18 9.300781 18 C 8.097656 18 7.75 17.851563 7.347656 17.601563 C 6.800781 17.199219 6.5 16.601563 6.5 15.800781 C 6.5 14.351563 7.949219 13 9.800781 13 C 12.097656 13 13.75 15.148438 14.898438 15.101563 C 15.898438 15.101563 17.800781 13.25 18.75 13.25 C 19.75 13.25 20 14.199219 20 14.800781 C 20 15.351563 19.800781 16.398438 19.300781 17.050781 C 18.800781 17.699219 18.550781 17.949219 17.949219 17.898438 Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Action Buttons */}
          <a href="mailto:vighneshp65@gmail.com" className="contact-link">
          <div className="grid justify-items-center">
            <button className="bg-gray-700 rounded-xl p-4 text-center hover:bg-gray-600 transition-colors">
              <div className="flex items-center justify-center mb-2">
                  <Mail className="w-5 h-5 text-white mr-2" />
                  <span className="font-semibold text-white">Email Me</span>
              </div>
              <p className="text-sm text-white ">Quick Compose</p>
            </button>
          </div>
          </a>
        </div>
      </section>
    </article>
  );
}
