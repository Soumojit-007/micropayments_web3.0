
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ZapIcon } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-lightning-dark px-4">
      <div className="relative w-32 h-32 mb-8">
        <div className="absolute inset-0 rounded-full bg-lightning/20 blur-2xl" />
        <div className="absolute inset-8 rounded-full bg-gradient-to-br from-lightning to-lightning-secondary opacity-30 animate-pulse-glow" />
        <div className="absolute inset-0 flex items-center justify-center">
          <ZapIcon className="w-16 h-16 text-lightning" />
        </div>
      </div>
      
      <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">404</h1>
      <p className="text-xl text-white/70 mb-8">Page not found</p>
      <p className="text-center text-white/50 max-w-md mb-8">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      
      <Button 
        onClick={() => navigate('/')} 
        className="bg-lightning text-white hover:bg-lightning/90"
      >
        Return to Home
      </Button>
    </div>
  );
};

export default NotFound;
