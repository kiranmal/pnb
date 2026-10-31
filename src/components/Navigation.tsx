import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Menu, X, Phone, MapPin, ChevronDown, Download, ExternalLink } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact Us', path: '/contact' },
    {name: 'Career', path: '/career'},
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-background/98 backdrop-blur-md border-b border-border sticky top-0 z-50 w-full overflow-hidden">
      {/* Top contact bar */}
      <div className="bg-primary text-primary-foreground py-2 hidden sm:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>(470) 665-6050</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Conyers, GA, 30013</span>
            </div>
          </div>
          <div className="hidden lg:block">
            <span>Excellence in Neurological Care</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4 max-w-7xl">
        <div className="flex justify-between items-center min-h-[60px]">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 lg:space-x-3">
            <img src="/logo.jpg" alt="Prana Brain and Nerve Health" className="h-10 w-auto lg:h-12" />
            <div className="hidden sm:block">
              <h2 className="text-lg lg:text-lg font-bold text-primary">Prana Brain & Nerve Health</h2>
              <p className="text-xs lg:text-sm text-muted-foreground">Neurology Clinic</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition-colors hover:text-primary text-sm lg:text-base ${
                  isActive(item.path) ? 'text-primary' : 'text-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Patient Resources Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 font-medium transition-colors hover:text-primary text-sm lg:text-base text-foreground">
                Patient Resources
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64 bg-background/98 backdrop-blur-md border border-border shadow-lg z-50">
                <DropdownMenuItem asChild>
                  <a
                    href="https://mychart.piedmont.org/prd/Authentication/Login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Patient Portal
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a
                    href="/forms/PBNH_Patient_Information_Form.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <Download className="h-4 w-4" />
                    New Patient Intake Form
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a
                    href="/forms/PBNH_New_Headache_Patient_Intake_Form.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <Download className="h-4 w-4" />
                    New Headache Patient Intake Form
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a
                    href="/forms/PBNH_Referral_Form.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <Download className="h-4 w-4" />
                    Patient Referral Form
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link to="/contact">
              <Button variant="default" size="sm" className="bg-medical hover:bg-medical/90 text-sm">
                Book Appointment
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border bg-background/98 backdrop-blur-md rounded-lg shadow-lg max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col space-y-3 pt-4 px-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-medium transition-colors hover:text-primary py-2 ${
                    isActive(item.path) ? 'text-primary' : 'text-foreground'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Patient Resources Mobile Section */}
              <div className="pt-2 border-t border-border mt-2">
                <div className="font-medium text-foreground py-2 mb-2 text-base">Patient Resources</div>
                <div className="pl-4 space-y-3">
                  <a
                    href="https://mychart.piedmont.org/prd/Authentication/Login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors py-2 text-sm bg-accent/50 rounded-lg px-3"
                    onClick={() => setIsOpen(false)}
                  >
                    <ExternalLink className="h-4 w-4 flex-shrink-0" />
                    <span>Patient Portal</span>
                  </a>
                  <a
                    href="/forms/PBNH_Patient_Information_Form.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors py-2 text-sm bg-accent/50 rounded-lg px-3"
                    onClick={() => setIsOpen(false)}
                  >
                    <Download className="h-4 w-4 flex-shrink-0" />
                    <span>New Patient Intake Form</span>
                  </a>
                  <a
                    href="/forms/PBNH_New_Headache_Patient_Intake_Form.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors py-2 text-sm bg-accent/50 rounded-lg px-3"
                    onClick={() => setIsOpen(false)}
                  >
                    <Download className="h-4 w-4 flex-shrink-0" />
                    <span>New Headache Patient Intake Form</span>
                  </a>
                  <a
                    href="/forms/PBNH_Referral_Form.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors py-2 text-sm bg-accent/50 rounded-lg px-3"
                    onClick={() => setIsOpen(false)}
                  >
                    <Download className="h-4 w-4 flex-shrink-0" />
                    <span>Patient Referral Form</span>
                  </a>
                </div>
              </div>
              <div className="pt-2">
                <Link to="/contact">
                  <Button variant="default" size="sm" className="bg-medical hover:bg-medical/90 w-full sm:w-auto">
                    Book Appointment
                  </Button>
                </Link>
              </div>
              <div className="sm:hidden pt-2 border-t border-border mt-4">
                <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span>(470) 665-6050</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>Conyers, GA, 30013</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;