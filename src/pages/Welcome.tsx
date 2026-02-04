import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TadarakLogo } from '@/components/shared/TadarakLogo';
import { Button } from '@/components/ui/button';

const Welcome = () => {
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleGetStarted = () => {
    setIsAnimating(true);
    setTimeout(() => {
      navigate('/login');
    }, 300);
  };

  return (
    <div className={`min-h-screen gradient-header flex flex-col items-center justify-between py-16 px-6 max-w-md mx-auto transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
      {/* Top spacer */}
      <div className="flex-1" />
      
      {/* Center content */}
      <div className="flex flex-col items-center animate-fade-in">
        <TadarakLogo size="lg" />
        
        <div className="mt-8 text-center">
          <p className="text-primary font-semibold text-lg">Beyond Documentation</p>
          <p className="text-primary font-semibold text-lg">Toward Safety</p>
        </div>
      </div>
      
      {/* Bottom button */}
      <div className="flex-1 flex items-end w-full">
        <div className="w-full bg-secondary/50 rounded-3xl p-4 animate-slide-up">
          <Button 
            onClick={handleGetStarted}
            className="w-full py-6 text-lg font-semibold rounded-2xl shadow-button"
          >
            Get started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
