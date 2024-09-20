import React from "react";

export default function BackgroundWrapper({ children }: React.PropsWithChildren) {
  return <div className="absolute inset-0 overflow-hidden z-[-1]">{children}</div>;
}
