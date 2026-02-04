interface TadarakLogoProps {
  size?: 'sm' | 'md' | 'lg';
}

export const TadarakLogo = ({ size = 'lg' }: TadarakLogoProps) => {
  const sizes = {
    sm: 40,
    md: 60,
    lg: 180,
  };

  const iconSize = sizes[size];

  return (
    <div className="flex flex-col items-center gap-2">
      <img
        src="/11.jpeg"
        alt="Tadarak Logo"
        style={{ width: iconSize * 1.5, height: iconSize }}
        className="object-contain"
      />
    </div>
  );
};

export default TadarakLogo;
