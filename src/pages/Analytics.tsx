import { MobileLayout } from '@/components/layout/MobileLayout';
import { TadarakLogo } from '@/components/shared/TadarakLogo';
import { Bell, User } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, BarChart, Bar, Cell, Tooltip } from 'recharts';

const Analytics = () => {
  const dailyReportData = [
    { name: 'Feb 1', value: 4 },
    { name: 'Feb 4', value: 16 },
    { name: 'Feb 7', value: 12 },
    { name: 'Feb 10', value: 21 },
    { name: 'Feb 13', value: 8 },
    { name: 'Feb 16', value: 8 },
    { name: 'Feb 19', value: 17 },
    { name: 'Feb 22', value: 14 },
    { name: 'Feb 25', value: 6 },
    { name: 'Feb 28', value: 18 },
  ];

  const heatmapData = [
    { department: 'Emergency', morning: 22, afternoon: 17, evening: 12, night: 12 },
    { department: 'Outpatient', morning: 6, afternoon: 7, evening: 6, night: 10 },
    { department: 'Inpatient', morning: 8, afternoon: 8, evening: 8, night: 8 },
    { department: 'ICU', morning: 10, afternoon: 5, evening: 9, night: 10 },
    { department: 'NICU', morning: 7, afternoon: 11, evening: 11, night: 8 },
    { department: 'Operating', morning: 1, afternoon: 1, evening: 1, night: 1 },
    { department: 'Anesthesia', morning: 6, afternoon: 4, evening: 5, night: 6 },
    { department: 'OB/GYN', morning: 8, afternoon: 8, evening: 11, night: 8 },
    { department: 'Pediatrics', morning: 6, afternoon: 8, evening: 6, night: 5 },
    { department: 'Internal', morning: 3, afternoon: 3, evening: 8, night: 5 },
  ];

  const errorTypeData = [
    { name: 'Drug-drug Interaction', value: 25 },
    { name: 'Wrong Dosage Form', value: 30 },
    { name: 'Wrong Duration', value: 22 },
    { name: 'Wrong Dose', value: 35 },
    { name: 'Wrong Frequency', value: 40 },
  ];

  const topMedicationsData = [
    { name: 'Insulin', value: 35 },
    { name: 'Heparin', value: 32 },
    { name: 'Vancomycin', value: 28 },
    { name: 'Warfarin', value: 22 },
    { name: 'Potassium KCI', value: 18 },
  ];

  const reporterData = [
    { name: 'Pharmacists', value: 50 },
    { name: 'Nurses', value: 30 },
    { name: 'Physicians', value: 22 },
    { name: 'Others', value: 20 },
  ];

  const weeklyActionData = [
    { day: 'Sun', accepted: 15, pending: 12, rejected: 5 },
    { day: 'Mon', accepted: 22, pending: 18, rejected: 8 },
    { day: 'Tue', accepted: 18, pending: 15, rejected: 10 },
    { day: 'Wed', accepted: 20, pending: 18, rejected: 8 },
    { day: 'Thu', accepted: 15, pending: 22, rejected: 10 },
    { day: 'Fri', accepted: 22, pending: 25, rejected: 12 },
    { day: 'Sat', accepted: 18, pending: 20, rejected: 8 },
  ];

  const getHeatmapColor = (value: number) => {
    if (value >= 15) return 'bg-primary text-primary-foreground';
    if (value >= 10) return 'bg-primary/70 text-primary-foreground';
    if (value >= 5) return 'bg-primary/40 text-foreground';
    return 'bg-primary/20 text-foreground';
  };

  return (
    <MobileLayout>
      {/* Header */}
      <div className="gradient-header px-5 pt-6 pb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <TadarakLogo size="sm" showText={false} />
            <div>
              <h1 className="text-lg font-bold text-foreground">March 1, 2026</h1>
              <p className="text-sm text-muted-foreground">Wednesday, 6 Tasks Today</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-full hover:bg-secondary transition-colors">
              <Bell className="w-5 h-5 text-foreground" />
            </button>
            <Avatar className="w-10 h-10 border-2 border-primary">
              <AvatarFallback className="bg-secondary text-foreground">MS</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>

      {/* Content Card */}
      <div className="bg-card -mt-4 rounded-t-3xl px-5 py-6 space-y-6 animate-fade-in">
        <h2 className="text-xl font-bold text-foreground">Medication Error Dashboard</h2>

        {/* Summary Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-secondary rounded-2xl p-4 text-center">
            <p className="text-2xl font-bold text-foreground">12</p>
            <p className="text-xs text-muted-foreground">Today<br/>Report</p>
          </div>
          <div className="bg-secondary rounded-2xl p-4 text-center">
            <p className="text-2xl font-bold text-foreground">87</p>
            <p className="text-xs text-muted-foreground">This Week<br/>Report</p>
          </div>
          <div className="bg-secondary rounded-2xl p-4 text-center">
            <p className="text-2xl font-bold text-foreground">342</p>
            <p className="text-xs text-muted-foreground">This Month<br/>Report</p>
          </div>
        </div>

        {/* Daily Report Chart */}
        <div className="bg-secondary rounded-2xl p-4">
          <h3 className="text-sm font-semibold text-foreground mb-4">Daily Medication Error Report - Last 30 Days</h3>
          <ResponsiveContainer width="100%" height={150}>
            <LineChart data={dailyReportData}>
              <XAxis dataKey="name" tick={{ fontSize: 10 }} />
              <YAxis tick={{ fontSize: 10 }} />
              <Line type="monotone" dataKey="value" stroke="hsl(var(--primary))" strokeWidth={2} dot={{ fill: 'hsl(var(--primary))' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Heatmap */}
        <div className="bg-secondary rounded-2xl p-4">
          <h3 className="text-sm font-semibold text-foreground mb-4">Medication error heat map by department and day time</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr>
                  <th className="text-left text-muted-foreground py-1"></th>
                  {heatmapData.map((d, i) => (
                    <th key={i} className="text-center text-muted-foreground py-1 px-1" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', fontSize: '8px' }}>
                      {d.department}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-muted-foreground py-1 text-[8px]">Morning</td>
                  {heatmapData.map((d, i) => (
                    <td key={i} className={`text-center py-1 px-1 ${getHeatmapColor(d.morning)}`}>
                      {d.morning}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="text-muted-foreground py-1 text-[8px]">Afternoon</td>
                  {heatmapData.map((d, i) => (
                    <td key={i} className={`text-center py-1 px-1 ${getHeatmapColor(d.afternoon)}`}>
                      {d.afternoon}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="text-muted-foreground py-1 text-[8px]">Evening</td>
                  {heatmapData.map((d, i) => (
                    <td key={i} className={`text-center py-1 px-1 ${getHeatmapColor(d.evening)}`}>
                      {d.evening}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="text-muted-foreground py-1 text-[8px]">Night</td>
                  {heatmapData.map((d, i) => (
                    <td key={i} className={`text-center py-1 px-1 ${getHeatmapColor(d.night)}`}>
                      {d.night}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex justify-end mt-2 gap-2 text-[8px]">
            <span className="flex items-center gap-1"><span className="w-3 h-3 bg-primary/20 rounded"></span>Low</span>
            <span className="flex items-center gap-1"><span className="w-3 h-3 bg-primary/40 rounded"></span>Moderate</span>
            <span className="flex items-center gap-1"><span className="w-3 h-3 bg-primary/70 rounded"></span>High</span>
            <span className="flex items-center gap-1"><span className="w-3 h-3 bg-primary rounded"></span>Very High</span>
          </div>
        </div>

        {/* Error Type Bar Chart */}
        <div className="bg-secondary rounded-2xl p-4">
          <h3 className="text-sm font-semibold text-foreground mb-4">Medication Error Report by Error Type</h3>
          <div className="space-y-2">
            {errorTypeData.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="text-[10px] text-muted-foreground w-28 truncate">{item.name}</span>
                <div className="flex-1 h-4 bg-background rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full" 
                    style={{ width: `${(item.value / 40) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Medications */}
        <div className="bg-secondary rounded-2xl p-4">
          <h3 className="text-sm font-semibold text-foreground mb-4">Top Reported Medication</h3>
          <div className="space-y-2">
            {topMedicationsData.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="text-[10px] text-muted-foreground w-20 truncate">{item.name}</span>
                <div className="flex-1 h-4 bg-background rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full" 
                    style={{ width: `${(item.value / 40) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reporter by Title */}
        <div className="bg-secondary rounded-2xl p-4">
          <h3 className="text-sm font-semibold text-foreground mb-4">Top Reporter by Job Title</h3>
          <ResponsiveContainer width="100%" height={150}>
            <BarChart data={reporterData}>
              <XAxis dataKey="name" tick={{ fontSize: 10 }} />
              <YAxis tick={{ fontSize: 10 }} />
              <Bar dataKey="value" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Weekly Action */}
        <div className="bg-secondary rounded-2xl p-4">
          <h3 className="text-sm font-semibold text-foreground mb-4">Physician Action Over Time</h3>
          <ResponsiveContainer width="100%" height={150}>
            <BarChart data={weeklyActionData}>
              <XAxis dataKey="day" tick={{ fontSize: 10 }} />
              <YAxis tick={{ fontSize: 10 }} />
              <Bar dataKey="accepted" stackId="a" fill="hsl(var(--primary))" />
              <Bar dataKey="pending" stackId="a" fill="hsl(var(--secondary-foreground))" />
              <Bar dataKey="rejected" stackId="a" fill="hsl(var(--destructive))" />
            </BarChart>
          </ResponsiveContainer>
          <div className="flex justify-center gap-4 mt-2 text-[10px]">
            <span className="flex items-center gap-1"><span className="w-3 h-3 bg-primary rounded"></span>Accepted / Modified</span>
            <span className="flex items-center gap-1"><span className="w-3 h-3 bg-secondary-foreground rounded"></span>Pending</span>
            <span className="flex items-center gap-1"><span className="w-3 h-3 bg-destructive rounded"></span>Rejected</span>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
};

export default Analytics;
