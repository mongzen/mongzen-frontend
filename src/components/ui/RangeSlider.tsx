'use client';

import { cn } from '@/utils';

interface RangeSliderProps {
  min: number;
  max: number;
  step?: number;
  value: number;
  onChange: (value: number) => void;
  formatLabel?: (value: number) => string;
  className?: string;
}

export function RangeSlider({
  min,
  max,
  step = 1,
  value,
  onChange,
  formatLabel,
  className,
}: RangeSliderProps) {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className={cn('w-full space-y-3', className)}>
      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-2 bg-neutral-60 rounded-lg appearance-none cursor-pointer slider"
          style={{
            background: `linear-gradient(to right, #9EFF00 0%, #9EFF00 ${percentage}%, #333 ${percentage}%, #333 100%)`,
          }}
        />
        <div
          className="absolute top-1/2 w-4 h-4 bg-accent-500 rounded-full transform -translate-y-1/2 -translate-x-1/2 shadow-lg cursor-pointer"
          style={{ left: `${percentage}%` }}
        />
      </div>
      <div className="flex justify-between text-sm text-neutral-20">
        <span>{formatLabel ? formatLabel(min) : min}</span>
        <span className="font-medium text-white">
          {formatLabel ? formatLabel(value) : value}
        </span>
        <span>{formatLabel ? formatLabel(max) : max}</span>
      </div>
    </div>
  );
}

// Add CSS for the slider
const sliderStyles = `
.slider::-webkit-slider-thumb {
  appearance: none;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #9EFF00;
  cursor: pointer;
  box-shadow: 0 0px 0px 10px #4C4C4D;
}

.slider::-moz-range-thumb {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #9EFF00;
  cursor: pointer;
  border: none;
  box-shadow: 0 0px 0px 10px #4C4C4D;
}
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.innerText = sliderStyles;
  document.head.appendChild(styleSheet);
}
