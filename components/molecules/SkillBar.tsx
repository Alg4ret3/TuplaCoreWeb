import React from 'react';

interface SkillBarProps {
  name: string;
  pct: number;
  accentColor: string;
  animate: boolean;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, pct, accentColor, animate }) => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-[14px] min-w-[74px]" style={{ color: "rgba(255,255,255,0.45)" }}>
        {name}
      </span>
      <div className="flex-1 h-[2px] rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.1)" }}>
        <div
          className="h-[2px] rounded-full transition-all duration-1000 ease-out"
          style={{
            width: animate ? `${pct}%` : "0%",
            background: accentColor,
            transitionTimingFunction: "cubic-bezier(0.4,0,0.2,1)",
          }}
        />
      </div>
      <span className="text-[12px] min-w-[26px] text-right" style={{ color: "rgba(255,255,255,0.35)" }}>
        {pct}%
      </span>
    </div>
  );
};

export default SkillBar;
