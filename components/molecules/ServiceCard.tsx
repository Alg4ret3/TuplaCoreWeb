"use client";

import { CheckCircle2, LucideIcon } from "lucide-react";

interface ServiceCardProps {
  id: string;
  title: string;
  icon: LucideIcon;
  color: string;
  isActive: boolean;
  onClick: (id: string) => void;
}

const ServiceCard = ({
  id,
  title,
  icon: Icon,
  color,
  isActive,
  onClick,
}: ServiceCardProps) => {
  const colorMap: Record<string, string> = {
    emerald: "border-emerald-500 bg-emerald-500/5 text-emerald-500",
    blue: "border-blue-500 bg-blue-500/5 text-blue-500",
    purple: "border-purple-500 bg-purple-500/5 text-purple-500",
    amber: "border-amber-500 bg-amber-500/5 text-amber-500",
  };

  const bgMap: Record<string, string> = {
    emerald: isActive ? "bg-emerald-500/20" : "bg-emerald-500/10",
    blue: isActive ? "bg-blue-500/20" : "bg-blue-50/10",
    purple: isActive ? "bg-purple-500/20" : "bg-purple-500/10",
    amber: isActive ? "bg-amber-500/20" : "bg-amber-500/10",
  };

  const iconMap: Record<string, string> = {
    emerald: isActive ? "text-emerald-500" : "text-emerald-500/70",
    blue: isActive ? "text-blue-500" : "text-blue-500/70",
    purple: isActive ? "text-purple-500" : "text-purple-500/70",
    amber: isActive ? "text-amber-500" : "text-amber-500/70",
  };

  return (
    <button
      onClick={() => onClick(id)}
      className={`group relative p-6 rounded-2xl border transition-all duration-300 text-left overflow-hidden ${
        isActive
          ? colorMap[color]
          : "border-white/10 hover:border-white/30 bg-white/5"
      }`}
    >
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${bgMap[color]}`}
      >
        <Icon className={`w-6 h-6 ${iconMap[color]}`} />
      </div>
      <h3 className="font-bold text-lg">{title}</h3>
      <div
        className={`absolute top-4 right-4 transition-opacity ${
          isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
      >
        <CheckCircle2 className="w-5 h-5" />
      </div>
    </button>
  );
};

export default ServiceCard;
