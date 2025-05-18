import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Menu, X, Zap, ZapIcon, User, LogOut } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Mock authentication state

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full glass-card bg-lightning-dark/90 border-b border-white/10 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Zap className="h-8 w-8 text-lightning mr-2" />
              <span className="text-xl font-bold bg-gradient-to-r from-lightning to-lightning-secondary bg-clip-text text-transparent">
                SatsStream
              </span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/" className="text-white/80 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              {isLoggedIn && (
                <>
                  <Link to="/dashboard" className="text-white/80 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Dashboard
                  </Link>
                  <Link to="/api-access" className="text-white/80 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    API Access
                  </Link>
                </>
              )}
              <Link to="/about" className="text-white/80 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>
            </div>
          </div>
          
          <div className="hidden md:block">
            {isLoggedIn ? (
              <div className="flex items-center">
                <div className="mr-4 text-sm font-medium text-white/80">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-lightning/20 text-xs font-medium text-lightning">
                    <ZapIcon className="mr-1 h-3 w-3" />
                    2,500 sats
                  </span>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Avatar className="h-8 w-8 cursor-pointer hover:ring-2 hover:ring-lightning transition-all">
                      <AvatarImage src="" alt="User" />
                      <AvatarFallback className="bg-lightning/20 text-lightning">JS</AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link to="/profile" className="cursor-pointer flex items-center">
                        <User className="mr-2 h-4 w-4" /> Profile
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout} className="text-red-500 cursor-pointer flex items-center">
                      <LogOut className="mr-2 h-4 w-4" /> Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <Button onClick={handleLogin} variant="outline" className="border-lightning text-lightning hover:bg-lightning hover:text-white transition-colors">
                Connect Wallet
              </Button>
            )}
          </div>
          
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white/80 hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {mobileMenuOpen && (
        <div className="md:hidden glass-card bg-lightning-dark/95 animate-slide-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" onClick={toggleMobileMenu} className="text-white block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            {isLoggedIn && (
              <>
                <Link to="/dashboard" onClick={toggleMobileMenu} className="text-white/80 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Dashboard
                </Link>
                <Link to="/api-access" onClick={toggleMobileMenu} className="text-white/80 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  API Access
                </Link>
              </>
            )}
            <Link to="/about" onClick={toggleMobileMenu} className="text-white/80 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              About
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-white/10">
            {isLoggedIn ? (
              <>
                <div className="flex items-center px-5">
                  <div className="flex-shrink-0">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-lightning/20 text-lightning">JS</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-white">John Smith</div>
                    <div className="text-sm font-medium text-white/60">john@example.com</div>
                  </div>
                  <div className="ml-auto flex-shrink-0">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-lightning/20 text-xs font-medium text-lightning">
                      <ZapIcon className="mr-1 h-3 w-3" /> 2,500 sats
                    </span>
                  </div>
                </div>
                <div className="mt-3 px-2 space-y-1">
                  <Link to="/profile" onClick={toggleMobileMenu} className="block px-3 py-2 rounded-md text-base font-medium text-white/80 hover:text-white">
                    Your Profile
                  </Link>
                  <button onClick={() => { handleLogout(); toggleMobileMenu(); }} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-red-500 hover:bg-white/5">
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <div className="px-5 py-3">
                <Button onClick={() => { handleLogin(); toggleMobileMenu(); }} className="w-full border-lightning text-lightning hover:bg-lightning hover:text-white transition-colors">
                  Connect Wallet
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
