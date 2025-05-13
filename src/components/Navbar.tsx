
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, Book } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white border-b border-gray-200 py-4 px-4 md:px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3">
          <Book className="h-6 w-6 text-primary" />
          <span className="font-semibold text-lg text-gray-800">Life of Rizal</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`font-medium ${isActive('/') ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}
          >
            Home
          </Link>
          <Link 
            to="/chapter1" 
            className={`font-medium ${isActive('/chapter1') ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}
          >
            Chapter 1
          </Link>
          <Link 
            to="/chapter2" 
            className={`font-medium ${isActive('/chapter2') ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}
          >
            Chapter 2
          </Link>
          <Link to="/chapter3" className="text-gray-700 hover:text-primary font-medium">Chapter 3</Link>
          <Link 
            to="/chapter4" 
            className={`font-medium ${isActive('/chapter4') ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}
          >
            Chapter 4
          </Link>
          <Link to="/chapter5" className="text-gray-700 hover:text-primary font-medium">Chapter 5</Link>
          <Button variant="outline" className="ml-4">Resources</Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 absolute left-0 right-0 shadow-lg z-50">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              onClick={() => setIsMenuOpen(false)}
              className={`font-medium py-2 ${isActive('/') ? 'text-primary' : 'text-gray-700'}`}
            >
              Home
            </Link>
            <Link 
              to="/chapter1" 
              onClick={() => setIsMenuOpen(false)}
              className={`font-medium py-2 ${isActive('/chapter1') ? 'text-primary' : 'text-gray-700'}`}
            >
              Chapter 1
            </Link>
            <Link 
              to="/chapter2" 
              onClick={() => setIsMenuOpen(false)}
              className={`font-medium py-2 ${isActive('/chapter2') ? 'text-primary' : 'text-gray-700'}`}
            >
              Chapter 2
            </Link>
            <Link 
              to="/chapter3" 
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 font-medium py-2"
            >
              Chapter 3
            </Link>
            <Link 
              to="/chapter4" 
              onClick={() => setIsMenuOpen(false)}
              className={`font-medium py-2 ${isActive('/chapter4') ? 'text-primary' : 'text-gray-700'}`}
            >
              Chapter 4
            </Link>
            <Link 
              to="/chapter5" 
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 font-medium py-2"
            >
              Chapter 5
            </Link>
            <Button variant="outline" className="w-full">Resources</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
