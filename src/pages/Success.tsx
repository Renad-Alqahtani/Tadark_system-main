import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

const Success = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const type = location.state?.type || 'report';

  const messages = {
    report: {
      title: 'Thank You',
      subtitle: 'Report Sent Successfully',
      showDate: true,
    },
    changes: {
      title: 'Thank You',
      subtitle: 'Changes Saved',
      showDate: false,
    },
  };

  const content = messages[type as keyof typeof messages] || messages.report;

  // Get current date/time
  const now = new Date();
  const dateString = now.toLocaleDateString('en-US', { 
    weekday: 'short', 
    day: 'numeric', 
    month: 'short' 
  });
  const timeString = now.toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: false 
  });

  return (
    <div className="min-h-screen bg-card flex flex-col items-center justify-center px-6 max-w-md mx-auto">
      <div className="text-center animate-scale-in">
        <h1 className="text-3xl font-bold text-primary mb-12">{content.title}</h1>
        
        {/* Email Icon */}
        <div className="w-24 h-24 mx-auto mb-6 relative">
          <div className="w-full h-full bg-primary rounded-2xl flex items-end justify-center overflow-hidden">
            <div className="w-full h-3/4 bg-secondary/80 rounded-t-lg relative">
              <div className="absolute top-0 left-0 right-0 h-6 bg-primary" 
                style={{ clipPath: 'polygon(0 0, 50% 100%, 100% 0)' }} />
            </div>
          </div>
        </div>
        
        <p className="text-xl font-semibold text-foreground mb-2">{content.subtitle}</p>
        
        {content.showDate && (
          <p className="text-muted-foreground mb-8">
            {dateString} at {timeString}
          </p>
        )}
        
        <div className="space-y-3 w-full mt-8">
          <Button 
            onClick={() => navigate('/reports')}
            className="w-full py-6 text-base font-semibold rounded-2xl shadow-button"
          >
            View the Report
          </Button>
          <Button 
            onClick={() => navigate('/dashboard')}
            className="w-full py-6 text-base font-semibold rounded-2xl shadow-button"
          >
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Success;
