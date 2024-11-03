import React from 'react';
import value1 from '@/public/assets/value-1.svg';
import value2 from '@/public/assets/value-2.svg';
import value3 from '@/public/assets/value-3.svg'
import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa';
interface ValueProps {
  title: string;
  imageUrl: string;
  characteristics: string[];
}

const values: ValueProps[] = [
  {
    title: 'Innovative Solutions',
    imageUrl: value1, // Replace with your image path
    characteristics: ['AI-driven approaches', 'Cutting-edge technology', 'Custom software development'],
  },
  {
    title: 'Scalable Growth',
    imageUrl: value2, // Replace with your image path
    characteristics: ['Cloud consultancy', 'SaaS products', 'Efficient processes'],
  },
  {
    title: 'Customer-Centric',
    imageUrl: value3, // Replace with your image path
    characteristics: ['Personalized support', 'Comprehensive training', 'Client-focused strategies'],
  },
];

const ValueProposition: React.FC = () => (
  <section className="text-center p-8 bg-background mt-16">
    <h2 className="text-4xl font-bold text-primary mb-8">Our Value Proposition</h2>
    <div className="flex justify-around">
      {values.map((value, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6 w-1/3 mx-4">
          <div className="flex flex-col justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-primary">{value.title}</h3>
            <div className="rounded-full p-2">
              <Image src={value.imageUrl} alt={value.title} className="h-24 w-32" />
            </div>
          </div>
          <div className='flex justify-start'>
           <ul className="list-right text-left pl-6">
            {value.characteristics.map((characteristic, idx) => (
              <li key={idx} className="flex items-center mb-2 text-text">
              <FaCheckCircle className="text-primary mr-2" />
              {characteristic}
            </li>
            ))}
           </ul>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ValueProposition;
