interface TadarakLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const TadarakLogo = ({ size = 'lg', showText = true }: TadarakLogoProps) => {
  const sizes = {
    sm: 40,
    md: 60,
    lg: 180,
    
  };

  const iconSize = sizes[size];

  return (
    <div className="flex flex-col items-center gap-2">
      <img
        src="public/11.jpeg"
        alt="Tadarak Logo"
        style={{ width: iconSize * 1.5, height: iconSize }}
        className="object-contain"
      />

      {showText && (
        <div className="text-center">
          <h1 className={`${size === 'sm' ? 'text-lg' : size === 'md' ? 'text-2xl' : 'text-4xl'} font-bold text-primary tracking-tight`}>
            Tadarak
          </h1>
          <p className="text-primary font-semibold text-lg" style={{ fontFamily: 'serif' }}>
            تدارك
          </p>
        </div>
      )}
    </div>
  );
};

export default TadarakLogo;
