import React from "react";

export function A4VerticalPage({ children }: React.PropsWithChildren) {
  return (
    <div className="relative w-a4x h-a4y p-5mm border border-black print:border-transparent">
      {children}
    </div>
  );
}

export function A5VerticalPage({ children }: React.PropsWithChildren) {
  return (
    <div className="relative w-a5x h-a5y p-5mm border border-black print:border-transparent">
      {children}
    </div>
  );
}
