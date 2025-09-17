import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-8 px-6 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8">
        {[
          {
            title: "Company",
            links: ["About Netflix", "Jobs", "Press", "Blog"],
          },
          {
            title: "Community",
            links: ["For Developers", "Support", "Guidelines", "Forum"],
          },
          {
            title: "Legal",
            links: ["Terms of Use", "Privacy Policy", "Cookie Preferences", "Legal Notices"],
          },
          {
            title: "Contact",
            links: ["Help Center", "Media Center", "Investor Relations", "Jobs"],
          },
        ].map((section) => (
          <div key={section.title} className="space-y-2">
            <h4 className="text-white font-semibold mb-2">{section.title}</h4>
            {section.links.map((link) => (
              <a key={link} href="#" className="block hover:text-white transition-colors duration-200">
                {link}
              </a>
            ))}
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col sm:flex-row items-center justify-between border-t border-gray-700 pt-6">
        <div className="flex space-x-4 mb-4 sm:mb-0">
          {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube].map((Icon, idx) => (
            <Icon key={idx} className="hover:text-white transition-colors duration-300 cursor-pointer" />
          ))}
        </div>

        <select className="bg-gray-800 text-gray-400 p-2 rounded border border-gray-700 transition-all duration-300 hover:border-white">
          <option>English</option>
          <option>Italiano</option>
          <option>Español</option>
          <option>Français</option>
        </select>
      </div>

      <div className="mt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Netflix React. Built with React + Vite + Tailwind.
      </div>
    </footer>
  );
}

export default Footer;
