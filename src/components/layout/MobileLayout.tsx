import { ReactNode } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Home, FileText, Search, Bell, User } from 'lucide-react';

interface MobileLayoutProps {
  children: ReactNode;
  showNav?: boolean;
}

const navItems = [
  { icon: Home, label: 'Home', path: '/dashboard' },
  { icon: FileText, label: 'Report', path: '/reports' },
  { icon: Search, label: 'Search', path: '/search' },
  { icon: Bell, label: 'Notification', path: '/notifications' },
  { icon: User, label: 'Account', path: '/account' },
];

export const MobileLayout = ({ children, showNav = true }: MobileLayoutProps) => {
  const location = useLocation();
  
  return (
    <div className="min-h-screen bg-background flex flex-col max-w-md mx-auto relative">
      {/* Main Content */}
      <main className={`flex-1 overflow-y-auto ${showNav ? 'pb-20' : ''}`}>
        {children}
      </main>
      
      {/* Bottom Navigation */}
      {showNav && (
        <nav className="fixed bottom-0 left-0 right-0 bg-secondary border-t border-border shadow-lg max-w-md mx-auto rounded-t-3xl">
          <div className="flex items-center justify-around py-3 px-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path || 
                (item.path === '/dashboard' && location.pathname === '/');
              const Icon = item.icon;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all duration-200 ${
                    isActive 
                      ? 'text-primary' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <div className="relative p-1">
                    {/* Active indicator background */}
                    {isActive && item.label === 'Home' && (
                      <div className="absolute inset-0 bg-primary rounded-lg -m-1" />
                    )}
                    <Icon 
                      className={`w-5 h-5 relative z-10 ${isActive && item.label === 'Home' ? 'text-primary-foreground' : ''}`} 
                      strokeWidth={isActive ? 2.5 : 2} 
                    />
                    {item.label === 'Notification' && (
                      <span className="absolute -top-1 -right-1 w-2 h-2 bg-destructive rounded-full" />
                    )}
                  </div>
                  <span className={`text-[10px] mt-1 font-medium ${isActive ? 'text-primary' : ''}`}>
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </div>
  );
};

export default MobileLayout;
