import { useNavigate } from 'react-router-dom';
import { MobileLayout } from '@/components/layout/MobileLayout';
import { TadarakLogo } from '@/components/shared/TadarakLogo';
import { StatCard } from '@/components/shared/StatCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Dashboard = () => {
  const navigate = useNavigate();

  const stats = [
    { value: 5, label: 'Pending\nPrescriptions' },
    { value: 35, label: 'Approved\nPrescriptions' },
    { value: 1, label: 'Rejected\nPrescriptions' },
  ];

  const latestReports = [
    {
      id: 1,
      title: 'Medication Error Alert',
      jobTitle: 'Pharmacist',
      department: 'Emergency',
      prescriptionNumber: 'RX-772428',
      isNew: true,
    },
  ];

  return (
    <MobileLayout>
      {/* Header with gradient */}
      <div className="gradient-header px-5 pt-6 pb-8">
        <div className="flex items-center gap-3">
          <TadarakLogo size="sm" showText={false} />
          <h1 className="text-xl font-bold text-foreground">
            Welcome Back <span className="text-2xl">👋</span>
          </h1>
        </div>
      </div>

      <div className="px-5 py-6 space-y-6 animate-fade-in -mt-4">
        {/* Dashboard Stats */}
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-4">Dashboard</h2>
          <div className="grid grid-cols-3 gap-3 p-4 bg-card rounded-2xl border border-border shadow-card">
            {stats.map((stat, idx) => (
              <StatCard key={idx} value={stat.value} label={stat.label} />
            ))}
          </div>
        </section>

        {/* Latest Reports - Only show when there's a new one */}
        {latestReports.some(r => r.isNew) && (
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-4">Latest Reports</h2>
            <div className="space-y-4">
              {latestReports.map((report) => (
                <div 
                  key={report.id}
                  className="bg-secondary rounded-2xl p-4 shadow-card"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-semibold text-foreground">{report.title}</h3>
                    {report.isNew && (
                      <Badge className="bg-destructive text-destructive-foreground text-xs">
                        New
                      </Badge>
                    )}
                  </div>
                  <div className="space-y-2 text-sm border-t border-border/50 pt-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Job Title</span>
                      <span className="font-medium text-foreground">{report.jobTitle}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Department</span>
                      <span className="font-medium text-foreground">{report.department}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Prescription Number</span>
                      <span className="font-medium text-foreground">{report.prescriptionNumber}</span>
                    </div>
                  </div>
                  <div className="flex gap-3 mt-4">
                    <Button 
                      onClick={() => navigate(`/report/${report.id}`)}
                      className="flex-1 py-5 rounded-2xl"
                    >
                      View
                    </Button>
                    <Button 
                      variant="outline"
                      className="flex-1 py-5 rounded-2xl border-primary text-primary hover:bg-primary/5"
                    >
                      Mark as Received
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Action Buttons */}
        <section className="space-y-3">
          <Button 
            onClick={() => navigate('/submit-report')}
            className="w-full py-6 text-base font-semibold rounded-2xl shadow-button"
          >
            Submit a new Report
          </Button>
          <Button 
            onClick={() => navigate('/reports')}
            className="w-full py-6 text-base font-semibold rounded-2xl shadow-button"
          >
            View Latest Report
          </Button>
          <Button 
            onClick={() => navigate('/reports?tab=pending')}
            className="w-full py-6 text-base font-semibold rounded-2xl shadow-button"
          >
            Review Pending Reports
          </Button>
        </section>
      </div>
    </MobileLayout>
  );
};

export default Dashboard;
