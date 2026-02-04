import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MobileLayout } from '@/components/layout/MobileLayout';
import { Button } from '@/components/ui/button';
import { ChevronLeft, X, FileX } from 'lucide-react';

const ReportDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [showRejectedModal, setShowRejectedModal] = useState(false);

  // Mock data
  const report = {
    id: id,
    reportNumber: '24361',
    jobTitle: 'Pharmacists',
    employeeId: '2579426',
    department: 'Emergency',
    prescriptionNumber: 'RX-772428',
    medicationName: 'Insulin glargine',
    errorType: 'wrong dose',
    date: '23 Jun, 2026',
    time: '18:45',
    note: 'Prescribed 5 unit once daily...',
    hasPhoto: true,
  };

  const DetailRow = ({ label, value, suffix }: { label: string; value: string; suffix?: string }) => (
    <div className="flex justify-between py-3 border-b border-border last:border-0">
      <span className="text-primary font-medium">{label}</span>
      <span className="text-foreground">
        {value}
        {suffix && <span className="text-muted-foreground text-sm ml-1">({suffix})</span>}
      </span>
    </div>
  );

  return (
    <MobileLayout showNav={false}>
      <div className="min-h-screen bg-card flex flex-col relative">
        {/* Header */}
        <div className="pt-6 px-4 pb-4 flex items-center gap-4 border-b border-border">
          <button 
            onClick={() => navigate(-1)}
            className="p-2 rounded-full bg-secondary text-foreground hover:bg-accent transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h1 className="text-lg font-bold text-foreground">Report Details</h1>
        </div>

        {/* Content */}
        <div className="flex-1 px-6 pb-8 animate-fade-in">
          <p className="font-semibold text-foreground my-4">Report No: {report.reportNumber}</p>

          <div className="space-y-1">
            <DetailRow label="Job Title" value={report.jobTitle} />
            <DetailRow label="Employee ID" value={report.employeeId} />
            <DetailRow label="Department" value={report.department} />
            <DetailRow label="Prescription Number" value={report.prescriptionNumber} />
            <DetailRow label="Medication Name" value={report.medicationName} />
            <DetailRow label="Error Type" value={report.errorType} />
            <DetailRow label="Data" value={report.date} suffix="Auto Filled" />
            <DetailRow label="Time" value={report.time} suffix="Auto Filled" />
            
            <div className="flex justify-between py-3 border-b border-border">
              <span className="text-primary font-medium">Note</span>
              <span className="text-foreground flex items-center">
                {report.note}
                <span className="text-muted-foreground ml-1">▼</span>
              </span>
            </div>
            
            <div className="flex justify-between py-3">
              <span className="text-primary font-medium">Photo (optional)</span>
              <span className="text-foreground">Prescription image attached</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 space-y-3">
            <Button 
              className="w-full py-6 text-base font-semibold rounded-2xl shadow-button"
            >
              Edit Prescription
            </Button>
            <div className="flex gap-3">
              <Button 
                variant="outline"
                className="flex-1 py-5 rounded-2xl border-primary text-primary hover:bg-primary/5"
              >
                Comment
              </Button>
              <Button 
                variant="outline"
                className="flex-1 py-5 rounded-2xl border-primary text-primary hover:bg-primary/5"
                onClick={() => setShowRejectedModal(true)}
              >
                Rejected
              </Button>
            </div>
          </div>
        </div>

        {/* Rejected Modal */}
        {showRejectedModal && (
          <div className="absolute inset-0 bg-foreground/50 flex items-center justify-center p-6">
            <div className="bg-card rounded-3xl p-8 text-center max-w-xs w-full shadow-xl">
              <div className="w-20 h-20 mx-auto mb-4 bg-secondary rounded-xl flex items-center justify-center border-2 border-dashed border-muted-foreground/30">
                <X className="w-10 h-10 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Report Rejected</h3>
              <button 
                onClick={() => setShowRejectedModal(false)}
                className="mt-6 text-primary font-medium"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </MobileLayout>
  );
};

export default ReportDetails;
