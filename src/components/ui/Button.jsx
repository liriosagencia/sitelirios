//src/components/ui/Button.jsx
export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const baseStyle = "px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg inline-block";
  
  const variants = {
    primary: "bg-gradient-to-r from-brand-primary to-brand-secondary text-white hover:shadow-brand-primary/50",
    secondary: "border-2 border-white/30 text-white hover:bg-white/10",
    outline: "border border-gray-300 text-gray-700 hover:border-brand-primary hover:text-brand-primary bg-white"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}