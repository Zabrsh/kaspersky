import { useState } from 'react';
import Link from 'next/link';
import logo from '@/public/assets/sky.svg';
import Image from 'next/image';




const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="sticky top-0 bg-background shadow-md z-50">
      <nav className="container mx-auto p-4 flex justify-between items-center h-16">
        <div className="flex items-center">
          <Image src={logo} alt="Sky Technologies Logo" width={128} height={32} />
        </div>
        <ul className="flex space-x-8">
          <li>
            <Link href="/" legacyBehavior><a className="text-text text-lg">Home</a></Link>
          </li>
          <li>
            <Link href="/business" legacyBehavior><a className="text-text text-lg">Business</a></Link>
          </li>
          <li>
            <Link href="/partners" legacyBehavior><a className="text-text text-lg">Partners</a></Link>
          </li>
          <li>
            <Link href="/about" legacyBehavior><a className="text-text text-lg">About</a></Link>
          </li>
        </ul>
        <div className="flex items-center space-x-8">
          
          <div className='flex space-x-2'>
          <button className="text-text">En</button>
          <button className="text-text">አማ</button>
          </div>
          <button className="bg-primary text-white px-4 py-2 rounded">Call Now!</button>
          
          
        </div>
      </nav>
      {showMenu && (
        <div className="absolute inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-40">
          <div className="bg-background p-8 rounded-lg shadow-lg">
            <ul className="space-y-4">
              <li>
                <Link href="/business/products" legacyBehavior><a className="text-text">Products</a></Link>
              </li>
              <li>
                <Link href="/business/services" legacyBehavior><a className="text-text">Services</a></Link>
              </li>
              <li>
                <Link href="/business/industries" legacyBehavior><a className="text-text">Industries</a></Link>
              </li>
              <li>
                <Link href="/business/solutions" legacyBehavior><a className="text-text">Solutions</a></Link>
              </li>
              <li>
                <button onClick={toggleMenu} className="text-red-500">Close Menu</button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
