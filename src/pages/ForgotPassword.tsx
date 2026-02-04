import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChevronLeft, User, CreditCard, Hash, Phone, Lock, Eye, EyeOff } from 'lucide-react';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-card flex flex-col max-w-md mx-auto">
      {/* Header */}
      <div className="pt-6 px-4 pb-4 flex items-center gap-4">
        <button 
          onClick={() => navigate(-1)}
          className="p-2 rounded-full bg-secondary hover:bg-accent transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-foreground" />
        </button>
        <h1 className="text-xl font-bold text-primary">Forgot password</h1>
      </div>
      
      {/* Content */}
      <div className="flex-1 px-6 py-4 animate-fade-in">
        <form onSubmit={handleReset} className="space-y-4">
          {/* Full Name */}
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              id="fullName"
              type="text"
              placeholder="Full Name"
              className="pl-12 py-5 rounded-full"
            />
          </div>
          
          {/* ID Number */}
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="16" rx="2" />
                <circle cx="9" cy="10" r="2" />
                <path d="M15 8h2" />
                <path d="M15 12h2" />
                <path d="M7 16h10" />
              </svg>
            </div>
            <Input
              id="idNumber"
              type="text"
              placeholder="ID Number"
              className="pl-12 py-5 rounded-full"
            />
          </div>
          
          {/* Employee Number */}
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="16" rx="2" />
                <circle cx="9" cy="10" r="2" />
                <path d="M15 8h2" />
                <path d="M15 12h2" />
                <path d="M7 16h10" />
              </svg>
            </div>
            <Input
              id="employeeNumber"
              type="text"
              placeholder="Employee Number"
              className="pl-12 py-5 rounded-full"
            />
          </div>
          
          {/* Phone Number */}
          <div className="relative">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              id="phoneNumber"
              type="tel"
              placeholder="Phone Number"
              className="pl-12 py-5 rounded-full"
            />
          </div>
          
          {/* New Password */}
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              id="newPassword"
              type={showPassword ? 'text' : 'password'}
              placeholder="New Password"
              className="pl-12 pr-12 py-5 rounded-full"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
          
          {/* Confirm Password */}
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              id="confirmPassword"
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Conform New Password"
              className="pl-12 pr-12 py-5 rounded-full"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground"
            >
              {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
          
          {/* Reset Button */}
          <Button 
            type="submit"
            className="w-full py-6 text-lg font-semibold rounded-full shadow-button mt-6"
          >
            Reset Password
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
