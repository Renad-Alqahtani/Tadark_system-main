import { useNavigate } from 'react-router-dom';
import { MobileLayout } from '@/components/layout/MobileLayout';
import { ChevronLeft } from 'lucide-react';

const Profile = () => {
  const navigate = useNavigate();

  const profileData = [
    { label: 'Full Name', value: 'Sara Ali' },
    { label: 'ID Number', value: '1127457084' },
    { label: 'Employee Number', value: '309845' },
    { label: 'Job Title', value: 'Pharmacist' },
    { label: 'Phone Number', value: '+966541179900' },
    { label: 'Country', value: 'Saudi Arabia' },
    { label: 'Gender', value: 'Female' },
  ];

  return (
    <MobileLayout>
      <div className="min-h-screen bg-card">
        {/* Header */}
        <div className="pt-6 px-4 pb-4 flex items-center gap-4 border-b border-border">
          <button 
            onClick={() => navigate(-1)}
            className="p-2 rounded-full bg-secondary text-foreground hover:bg-accent transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h1 className="text-lg font-bold text-foreground">View profile information</h1>
        </div>

        {/* Profile Info */}
        <div className="px-6 py-4 animate-fade-in">
          {profileData.map((item, idx) => (
            <div key={idx} className="py-4 border-b border-border last:border-0">
              <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
              <p className="text-base font-semibold text-foreground">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </MobileLayout>
  );
};

export default Profile;
