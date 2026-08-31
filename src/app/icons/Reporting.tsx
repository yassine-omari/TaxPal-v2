import { useId } from "react";

const Reporting = () => {
  const gradientId = useId();

  return (
    <svg aria-hidden="true" className="h-9 w-9" fill="none">
      <defs>
        <linearGradient
          id={gradientId}
          x1="11.5"
          y1="18"
          x2="36"
          y2="15.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".194" stopColor="#fff" />
          <stop offset="1" stopColor="#6692F1" />
        </linearGradient>
      </defs>
      <path
        d="m30 15-4 5-4-11-4 18-4-11-4 7-4-5"
        stroke={`url(#${gradientId})`}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Reporting;
