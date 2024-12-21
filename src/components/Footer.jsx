import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center gap-6">
          {/* Column 1: Contact Info */}
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-bold">Contact Us</h3>
            <p className="mt-2 text-sm">
              Email: <a href="mailto:support@yourstore.com" className="text-blue-400">support@yourstore.com</a>
            </p>
            <p className="text-sm">Phone: +1 (555) 123-4567</p>
          </div>

          {/* Column 2: Social Media Links */}
          <div className="w-full md:w-1/3 flex justify-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300"
            >
              Twitter
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-400"
            >
              Instagram
            </a>
          </div>

          {/* Column 3: Legal / Copyright */}
          <div className="w-full md:w-1/3 text-center md:text-right">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} YourStore. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
