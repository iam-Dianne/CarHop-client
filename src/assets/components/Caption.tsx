type CaptionProps = {
  label: string;
  className?: string;
};

const Caption = ({ label, className }: CaptionProps) => {
  return (
    <span
      className={`${className} text-sm text-primary py-2 px-4 bg-text-muted border border-primary-light/30 rounded-2xl shadow-md`}
    >
      {label}
    </span>
  );
};

export default Caption;
