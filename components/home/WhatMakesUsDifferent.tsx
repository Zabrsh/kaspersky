import React, { useState } from 'react';
import Image from 'next/image';
import one from '@/public/assets/pumpkin.jpg'
import { FaCheckCircle } from 'react-icons/fa';
interface Difference {
  title: string;
  description: string;
  imageUrl: string;
  characteristics: string[];
}

const differences: Difference[] = [
  {
    title: 'Innovative Solutions',
    description: 'We bring AI-driven and cutting-edge technology to solve complex problems.',
    imageUrl: one.src, // Replace with your image path
    characteristics: ['Personalized support', 'Comprehensive training', 'Client-focused strategies']
  },
  {
    title: 'Scalable Growth',
    description: 'Our solutions are designed to grow with your business, ensuring sustainable development.',
    imageUrl: one.src, 
    characteristics: ['Personalized support', 'Comprehensive training', 'Client-focused strategies']// Replace with your image path
  },
  {
    title: 'Customer-Centric',
    description: 'We put our customers first, offering personalized support and comprehensive training.',
    imageUrl: one.src, 
    characteristics: ['Personalized support', 'Comprehensive training', 'Client-focused strategies']
  },
];

const WhatMakesUsDifferent: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="text-center p-8 bg-background mt-16 w-full">
      <h2 className="text-4xl font-bold text-primary mb-8">What Makes Us Different</h2>
      <div className="flex justify-center mb-8">
        {differences.map((_, index) => (
          <button 
            key={index} 
            className={`w-12 h-12 rounded-full mx-2 ${activeIndex === index ? 'bg-primary text-white' : 'bg-accent1 text-primary'}`}
            onClick={() => setActiveIndex(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <div className="flex  justify-center items-center">
        <div className="flex w-full bg-white p-6 gap-5">
          
          <div className="text-left w-2/3">
            <h3 className="text-2xl font-bold text-primary mb-2">{differences[activeIndex].title}</h3>
            <p className="text-text">{differences[activeIndex].description}</p>
            <ul className="list-right text-left pl-6 pt-4">
            {differences[activeIndex].characteristics.map((characteristic, idx) => (
              <li key={idx} className="flex items-center mb-2 text-text">
              <FaCheckCircle className="text-primary mr-2" />
              {characteristic}
            </li>
            ))}
           </ul>
          </div>
          <div className="w-1/3 h-64 relative">
            <Image src={differences[activeIndex].imageUrl} alt={differences[activeIndex].title} layout="fill" objectFit="cover" className="rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatMakesUsDifferent;