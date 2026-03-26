"use client";

import { Progress } from "@/components/atoms/progress";

interface QuoteProgressProps {
  progress: number;
}

const QuoteProgress = ({ progress }: QuoteProgressProps) => {
  return (
    <div className="mb-12 space-y-4">
      <Progress
        value={progress}
        className="h-1.5 bg-gray-100 dark:bg-white/5"
      />
      <div className="flex justify-between text-[0.65rem] font-bold uppercase tracking-widest text-gray-400">
        <span>Servicio</span>
        <span>Detalles</span>
        <span>Alcance</span>
        <span>Contacto</span>
      </div>
    </div>
  );
};

export default QuoteProgress;
