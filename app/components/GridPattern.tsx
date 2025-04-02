"use client";

import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/magicui/grid-pattern";

export function GridPatternLinearGradient() {
  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-hidden bg-background">
      <GridPattern
        width={50}  // Smaller grid cells
        height={50} // Adjust the size of boxes
        x={0}
        y={0}
        className={cn(
          "absolute inset-0 [mask-image:linear-gradient(to_bottom_right,white,transparent)]"
        )}
      />
    </div>
  );
}
