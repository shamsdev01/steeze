import React from "react";
import Container from "./Container";

export function Footer() {
  return (
    <>
      <div className="w-full border-t-8 border-[#302d2d3b] dark:border-trueGray-700 mt-20"></div>
      <footer className="w-full bg-[linear-gradient(0deg,#001F3F_0%,rgba(0,81,165,0.8)_100%)] py-16 mt-8">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="col-span-1 md:col-span-2 lg:col-span-1">
              <h3 className="font-bold text-white text-2xl mb-6">About Us</h3>
              <p className="text-gray-300 dark:text-gray-400">
                Cryptosteeze is your trusted companion for navigating the exciting world of cryptocurrency, providing expert insights, innovative tools, and a supportive community to help you achieve financial success.
              </p>
            </div>
            {/* <div>
              <h3 className="font-bold text-white text-2xl mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>*/}
            <div> 
              <h3 className="font-bold text-white text-2xl mb-6">Contact Us</h3>
              <div className="space-y-4">
                <a href="tel:+2347856903456" className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                  <PhoneIcon />
                  <span>+234 785 690 3456</span>
                </a>
                <a href="mailto:cryptosteeze@gmail.com" className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                  <FacebookIcon />
                  <span>cryptosteeze@gmail.com</span>
                </a>
                <div className="flex space-x-4 mt-6">
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    <InstagramIcon />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    <LinkedInIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-700">
            <p className="text-center text-gray-400">&copy; 2024 Cryptosteeze. All rights reserved.</p>
          </div>
        </Container>
      </footer>
    </>
  );
}

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25a.85.85 0 11.9-1.44L12 11l6.7-4.19a.85.85 0 11.9 1.44z" />
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

export default Footer;