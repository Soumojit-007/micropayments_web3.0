
import { Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-auto py-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Zap className="h-6 w-6 text-lightning mr-2" />
            <span className="text-lg font-bold bg-gradient-to-r from-lightning to-lightning-secondary bg-clip-text text-transparent">
              SatsStream
            </span>
          </div>
          
          <div className="text-white/60 text-sm">
            &copy; {new Date().getFullYear()} SatsStream. All rights reserved.
          </div>
          
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="#" className="text-white/60 hover:text-lightning transition-colors">
              Privacy
            </a>
            <a href="#" className="text-white/60 hover:text-lightning transition-colors">
              Terms
            </a>
            <a href="#" className="text-white/60 hover:text-lightning transition-colors">
              Contact
            </a>
          </div>
        </div>
        <div className="mt-6 text-center text-white/40 text-xs">
          Built with ⚡ for Bitcoin Hackathon 2025
        </div>
      </div>
    </footer>
  );
};

export default Footer;
