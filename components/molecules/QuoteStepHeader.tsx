"use client";


interface QuoteStepHeaderProps {
  title: string;
  description: string;
  center?: boolean;
}

const QuoteStepHeader = ({ title, description, center = false }: QuoteStepHeaderProps) => {
  return (
    <div className={`space-y-2 ${center ? "text-center" : ""}`}>
      <h2 className="text-2xl font-bold uppercase tracking-tight italic">
        {title}
      </h2>
      <p className="text-sm text-gray-400">
        {description}
      </p>
    </div>
  );
};

export default QuoteStepHeader;
