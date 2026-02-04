import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MobileLayout } from '@/components/layout/MobileLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ChevronLeft, Camera } from 'lucide-react';

const SubmitReport = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    jobTitle: 'Pharmacist',
    prescriptionNumber: '',
    medicationName: '',
    errorType: '',
    department: '',
    note: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/success', { state: { type: 'report' } });
  };

  return (
    <MobileLayout showNav={false}>
      <div className="min-h-screen bg-card flex flex-col">
        {/* Header */}
        <div className="pt-6 px-4 pb-2">
          <button 
            onClick={() => navigate(-1)}
            className="p-2 rounded-full bg-secondary hover:bg-accent transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 px-6 pb-8 animate-fade-in">
          <p className="text-primary font-medium mb-6">
            Thank you for notice the error and save lives
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Job Title of Reporter */}
            <div className="space-y-2">
              <Label htmlFor="jobTitle" className="font-semibold">
                Job Title of Reporter
              </Label>
              <Select 
                value={formData.jobTitle}
                onValueChange={(value) => setFormData({ ...formData, jobTitle: value })}
              >
                <SelectTrigger className="py-5 rounded-xl bg-muted/50">
                  <SelectValue placeholder="Select Job Title" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Pharmacist">Pharmacist</SelectItem>
                  <SelectItem value="Nurse">Nurse</SelectItem>
                  <SelectItem value="Physician">Physician</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Prescription Number */}
            <div className="space-y-2">
              <Label htmlFor="prescriptionNumber" className="font-semibold">
                Prescription Number
              </Label>
              <Input
                id="prescriptionNumber"
                placeholder="Ex: 74936250"
                value={formData.prescriptionNumber}
                onChange={(e) => setFormData({ ...formData, prescriptionNumber: e.target.value })}
                className="py-5 rounded-xl bg-muted/50"
              />
            </div>

            {/* Medication Name */}
            <div className="space-y-2">
              <Label htmlFor="medicationName" className="font-semibold">
                Medication Name
              </Label>
              <Input
                id="medicationName"
                placeholder="Ex: Paracetamol"
                value={formData.medicationName}
                onChange={(e) => setFormData({ ...formData, medicationName: e.target.value })}
                className="py-5 rounded-xl bg-muted/50"
              />
            </div>

            {/* Type of Error */}
            <div className="space-y-2">
              <Label htmlFor="errorType" className="font-semibold">
                Type of error
              </Label>
              <Input
                id="errorType"
                placeholder="Ex: Medication dosage error"
                value={formData.errorType}
                onChange={(e) => setFormData({ ...formData, errorType: e.target.value })}
                className="py-5 rounded-xl bg-muted/50"
              />
            </div>

            {/* Department */}
            <div className="space-y-2">
              <Label htmlFor="department" className="font-semibold">
                Department
              </Label>
              <Input
                id="department"
                placeholder="Emergency Department"
                value={formData.department}
                onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                className="py-5 rounded-xl bg-muted/50"
              />
            </div>

            {/* Note */}
            <div className="space-y-2">
              <Label htmlFor="note" className="font-semibold">
                Send a not
              </Label>
              <div className="relative">
                <Textarea
                  id="note"
                  placeholder="Add additional notes..."
                  value={formData.note}
                  onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                  className="min-h-[100px] rounded-xl bg-muted/50 pr-12"
                />
                <button
                  type="button"
                  className="absolute bottom-3 right-3 p-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Camera className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <Button 
              type="submit"
              className="w-full py-6 text-base font-semibold rounded-2xl shadow-button mt-4"
            >
              send
            </Button>
          </form>
        </div>
      </div>
    </MobileLayout>
  );
};

export default SubmitReport;
