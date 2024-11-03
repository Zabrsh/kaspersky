import React, { useState } from 'react';
import Image from 'next/image';
import backgroundImg from '@/public/assets/background.jpg';
import worldMapImg from '@/public/assets/map.png';
import diamondIcon from '@/public/assets/icon.png';


interface OfficeLocation {
  city: string;
  address: string;
  description: string;
  position: { top: string; left: string };
  mapLink: string;
}

const locations: OfficeLocation[] = [

  {
    city: 'Addis Ababa',
    address: '789 Bole Rd, Addis Ababa, Ethiopia',
    description: 'Our African office in Addis Ababa.',
    position: { top: '60%', left: '55%' },
    mapLink: 'https://www.google.com/maps?q=Addis+Ababa',
  },
];

const Location: React.FC = () => {
  const [hoveredLocation, setHoveredLocation] = useState<number | null>(null);

  return (
    <section className="relative w-full h-screen bg-cover bg-center mt-16">
      <Image src={backgroundImg} alt="Background" layout="fill" objectFit="cover" />
      <div className="absolute inset-0">
        <Image src={worldMapImg} alt="World Map" layout="fill" objectFit="cover" />
      </div>
      {locations.map((location, index) => (
        <div 
          key={index} 
          className="absolute w-8 h-8 cursor-pointer transform -translate-x-1/2 -translate-y-1/2"
          style={{ top: location.position.top, left: location.position.left }}
          onMouseEnter={() => setHoveredLocation(index)}
          onMouseLeave={() => setHoveredLocation(null)}
          onClick={() => window.open(location.mapLink, '_blank')}
        >
          <Image src={diamondIcon} alt="Location Icon" layout="fill" objectFit="cover" />
          {hoveredLocation === index && (
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-white shadow-lg p-4 rounded-lg w-64">
              <h4 className="text-primary font-bold mb-2">{location.city}</h4>
              <p className="text-text mb-1">{location.address}</p>
              <p className="text-accent2">{location.description}</p>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default Location;
