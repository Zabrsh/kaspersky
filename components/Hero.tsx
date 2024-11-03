import { useState } from 'react';
import office from '@/public/assets/office.jpg';
import Image from 'next/image';
import business from '@/public/assets/business.jpg';


const Hero = () => {
  const [activeHero, setActiveHero] = useState('hero1');

  return (
    <section className={`flex justify-between items-center w-full h-[80vh] ${activeHero === 'hero1' ? 'bg-primary' : 'bg-accent2'}`}>
      <div className="w-3/5 h-full flex flex-col justify-center p-8">
        {activeHero === 'hero1' && (
          <div>
            <h1 className="text-5xl font-bold text-white mb-4">Transform Your Business with AI</h1>
            <p className="text-accent1 mb-4">Our AI solutions help you stay competitive and efficient.</p>
          </div>
        )}
        {activeHero === 'hero2' && (
          <div>
            <h1 className="text-5xl font-bold text-highlight mb-4">Innovate with Cutting-Edge Technology</h1>
            <p className="text-accent1 mb-4">Leverage our SaaS products to streamline your operations.</p>
          </div>
        )}
        <div>
          <button 
            className={`px-4 py-2 rounded mr-4 ${activeHero === 'hero1' ? 'bg-white text-primary border border-primary' : 'bg-gray-200 text-text'}`}
            onClick={() => setActiveHero('hero1')}
          >
            AI Solutions
          </button>
          <button 
            className={`px-4 py-2 rounded ${activeHero === 'hero2' ? 'bg-white text-highlight border border-highlight' : 'bg-gray-200 text-text'}`}
            onClick={() => setActiveHero('hero2')}
          >
            SaaS Products
          </button>
        </div>
      </div>
      <div className="w-2/5 h-full flex justify-center items-center">
        <div className="w-full h-full irregular-shape relative shadow-lg">
          {activeHero === 'hero1' ? (
            <Image src={business} alt="Hero 1" layout="fill" objectFit="cover" />
          ) : (
            <Image src={office} alt="Hero 2" layout="fill" objectFit="cover"  />
          )}
        </div>
      </div>
      <style jsx>{`
        .irregular-shape {
          clip-path: polygon(27% 0, 10% 19%, 23% 87%, 100% 100%, 100% 80%, 100% 57%, 100% 20%, 100% 0, 57% 0);
          
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Hero;
