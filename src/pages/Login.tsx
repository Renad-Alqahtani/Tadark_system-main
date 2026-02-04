import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { TadarakLogo } from '@/components/shared/TadarakLogo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { User, Lock, Eye, EyeOff } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [employeeId, setEmployeeId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo: navigate to dashboard
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-card flex flex-col max-w-md mx-auto">
      {/* Header section with gradient background and logo */}
      <div className="gradient-header pt-8 pb-6 flex justify-center rounded-b-3xl">
        <TadarakLogo size="md" showText={false} />
      </div>
      
      {/* Login Form */}
      <div className="flex-1 px-6 py-8 animate-fade-in">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-primary">Login account</h1>
          <p className="text-muted-foreground mt-2">Use your credential to continue</p>
        </div>
        
        <form onSubmit={handleLogin} className="space-y-5">
          {/* Employee ID */}
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
              id="employeeId"
              type="text"
              placeholder="Enter Employee ID"
              value={employeeId}
              onChange={(e) => setEmployeeId(e.target.value)}
              className="pl-12 py-6 rounded-full border-border bg-background"
            />
          </div>
          
          {/* Password */}
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-12 pr-12 py-6 rounded-full border-border bg-background"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
          
          {/* Forgot Password Link */}
          <div className="flex justify-center">
            <Link to="/forgot-password" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Forgot password?
            </Link>
          </div>
          
          {/* Login Button */}
          <Button 
            type="submit"
            className="w-full py-6 text-lg font-semibold rounded-full shadow-button mt-6"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
