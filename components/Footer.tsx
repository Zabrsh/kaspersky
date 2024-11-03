import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background text-text py-32">
      <div className="container mx-auto">

        {/* Section 1: Home Solutions (4 Divs in a Single Row) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 items-start">
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-bold">SaaS Solutions</h3>
            <ul className="mt-2">
              <li className='hover:text-highlight'>Sky Affiliate</li>
              <li className='hover:text-highlight'>Sky Ecommerce</li>
              <li className='hover:text-highlight'>Sky ERP</li>
              {/* Add other products here */}
            </ul>
          </div>
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-bold">AI & Analytics</h3>
            <ul className="mt-2">
              <li className='hover:text-highlight'>Sky Chatbot</li>
              {/* Add other products here */}
            </ul>
          </div>
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-bold">Development services</h3>
            <ul className="mt-2">
              <li className='hover:text-highlight'>Website development</li>
              <li className='hover:text-highlight'>App development</li>
              <li className='hover:text-highlight'>Custom softwares</li>
              {/* Add other products here */}
            </ul>
          </div>
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-bold">Consultancy Services</h3>
            <ul className="mt-2">
              <li className='hover:text-highlight'>AI Adoption Consultancy</li>
              <li className='hover:text-highlight'>Cloud Migration Consultancy</li>

              {/* Add other products here */}
            </ul>
          </div>
        </div>

        {/* Horizontal Line */}
        <div className="border-t border-accent2 my-4"></div>

        {/* Section 3: Copyright and Social Media Icons */}
        <div className="flex justify-between mb-4 text-sm">
          <div>© 2024 Skylabs. All rights reserved.</div>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="hover:text-highlight">Facebook</a>
            <a href="#" aria-label="Twitter" className="hover:text-highlight">Twitter</a>
            <a href="#" aria-label="LinkedIn" className="hover:text-highlight">LinkedIn</a>
            {/* Add more social media icons as needed */}
          </div>
        </div>

        {/* Section 4: Links */}
        <div className="my-4 text-sm">
          <a href="#" className="hover:text-highlight">Privacy Policy</a> | 
          <a href="#" className="hover:text-highlight">Cookies</a> | 
          <a href="#" className="hover:text-highlight">Online Dispute Resolution</a> | 
          <a href="#" className="hover:text-highlight">Anti-Corruption Policy</a> | 
          <a href="#" className="hover:text-highlight">License Agreement</a> | 
          <a href="#" className="hover:text-highlight">Privacy Agreement</a> | 
          <a href="#" className="hover:text-highlight">EULA Agreement</a> | 
          <a href="#" className="hover:text-highlight">B2B Agreement</a>
        </div>

        {/* Section 5: Language Selector */}
        <div className="language-selector text-end mb-4">
          <select className="border border-accent2 p-2 bg-white text-text">
            <option value="en">English</option>
            <option value="amh">Amharic</option>
            {/* Add other language options here */}
          </select>
        </div>

        {/* Horizontal Line */}
        <div className="border-t border-accent2 my-4"></div>

      </div>
    </footer>
  );
};

export default Footer;