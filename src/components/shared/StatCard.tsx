interface StatCardProps {
  value: number;
  label: string;
  variant?: 'default' | 'highlight';
}

export const StatCard = ({ value, label, variant = 'default' }: StatCardProps) => {
  return (
    <div className={`flex flex-col items-center justify-center p-4 rounded-xl border ${
      variant === 'highlight' 
        ? 'bg-secondary border-primary/20' 
        : 'bg-card border-border'
    }`}>
      <span className="text-2xl font-bold text-foreground">{value}</span>
      <span className="text-xs text-muted-foreground text-center mt-1 leading-tight">{label}</span>
    </div>
  );
};

export default StatCard;
