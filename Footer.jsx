import React from 'react';


const Footer = () => {
  return (
    <footer className="bg-blue-950 py-6 text-center text-white">
  <div className="mb-4">
    
    <ul className="flex justify-center space-x-4 my-4">
      <li>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f text-white hover:text-blue-500"></i>
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram text-white hover:text-pink-500"></i>
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-youtube text-white hover:text-red-500"></i>
        </a>
      </li>
      <li>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter text-white hover:text-blue-400"></i>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in text-white hover:text-blue-700"></i>
        </a>
      </li>
    </ul>
    <hr className="border-t-2 border-gray-600" />
  </div>

  <div className="space-x-4">
    <a href="/about" className="hover:underline">About Us</a>
    <a href="/team" className="hover:underline">Team</a>
    <a href="/termpolicy" className="hover:underline">Terms & Conditions</a>
    <a href="/contact" className="hover:underline">Contact</a>
    
  </div>
</footer>

  );
};

export default Footer;