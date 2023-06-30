import React from "react";

export default function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center  p-6  border border-slate-300 border-solid rounded-md shadow-md ${className}`}
    >
      {children}
    </div>
  );
}
