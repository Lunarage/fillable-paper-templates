import React from "react";

type variantType = "color" | "monocromatic" | "outline";

export function SVGIcon(
  SVGComponent: React.FunctionComponent<React.SVGAttributes<SVGElement>>,
  colors: { primary: string; secondary: string },
) {
  const computeStyle = (variant: variantType): React.CSSProperties => {
    switch (variant) {
      case "color":
        return {
          "--svgPrimaryColor": colors.primary,
          "--svgSecondaryColor": colors.secondary,
        } as React.CSSProperties;
      case "monocromatic":
        return {
          "--svgPrimaryColor": "color-mix(in srgb, currentcolor 100%, white 75%)",
          "--svgSecondaryColor": "color-mix(in srgb, currentcolor 100%, white 100%)",
        } as React.CSSProperties;
      case "outline":
        return {
          "--svgPrimaryColor": "transparent",
          "--svgSecondaryColor": "transparent",
        } as React.CSSProperties;
      default:
        return {};
    }
  };

  return function ({
    variant = "monocromatic",
    className,
  }: {
    variant?: variantType;
    className?: React.HTMLAttributes<HTMLDivElement>["className"];
  }) {
    console.log(computeStyle(variant));
    return (
      <div
        className={`h-[1em] w-[1em] ${className ? className : ""}`}
        style={computeStyle(variant)}
      >
        <SVGComponent />
      </div>
    );
  };
}
