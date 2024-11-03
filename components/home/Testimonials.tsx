import React, { useState } from 'react';

interface Testimonial {
  name: string;
  content: string;
  role: string;
}

const testimonials: Testimonial[] = [
  { name: 'John Doe', content: 'Sky Technologies transformed our business operations with their AI solutions.', role: 'CEO, TechCorp' },
  { name: 'Jane Smith', content: 'The SaaS products from Sky Technologies are top-notch and have greatly improved our efficiency.', role: 'CTO, Innovate Ltd' },
  { name: 'Emily Johnson', content: 'Excellent customer service and support. We felt truly valued as clients.', role: 'Manager, FinBank' },
  { name: 'Michael Brown', content: 'Their cloud consultancy helped us migrate seamlessly. Highly recommend!', role: 'IT Head, SoftNet' },
  { name: 'Lisa White', content: 'The team at Sky Technologies is professional and extremely knowledgeable.', role: 'HR Manager, GlobalCom' },
  { name: 'Tom Wilson', content: 'Innovative solutions that met all our requirements. Very satisfied with their service.', role: 'Operations Manager, GreenTech' },
];

const Testimonials: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleNextSlide = (index: number) => {
    setActiveSlide(index);
  };

  return (
    <section className="text-center p-8 bg-accent1 mt-16">
      <h2 className="text-4xl font-bold text-primary mb-8">What Our Clients Say</h2>
      <div className="flex justify-center overflow-hidden">
        <div className={`w-full flex transition-transform duration-500 transform ${activeSlide === 0 ? 'translate-x-0' : '-translate-x-full'}`}>
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 m-4 w-1/3 flex-shrink-0">
              <p className="text-text mb-4">"{testimonial.content}"</p>
              <h4 className="text-primary font-bold">{testimonial.name}</h4>
              <p className="text-accent2">{testimonial.role}</p>
            </div>
          ))}
          {testimonials.slice(3, 6).map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 m-4 w-1/3 flex-shrink-0">
              <p className="text-text mb-4">"{testimonial.content}"</p>
              <h4 className="text-primary font-bold">{testimonial.name}</h4>
              <p className="text-accent2">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-8">
        {[0, 1].map((index) => (
          <button 
            key={index} 
            className={`w-4 h-4 rounded-full mx-2 ${activeSlide === index ? 'bg-primary' : 'bg-gray-300'}`}
            onClick={() => handleNextSlide(index)}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
