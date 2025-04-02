import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { AuroraText } from "@/components/magicui/aurora-text";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

export function AuroraTextDemo() {
  return (
    <div className="flex flex-col items-center text-center space-y-4">
      {/* Main Heading */}
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-7xl">
        Elevate with <AuroraText>MKW</AuroraText>
      </h1>

      {/* Typing Animation with Green Gradient (Fully Responsive) */}
      <TypingAnimation className="text-base sm:text-lg md:text-xl lg:text-3xl font-bold leading-tight bg-gradient-to-r from-green-400 to-green-700 bg-clip-text text-transparent">
        Sales Training
      </TypingAnimation>

      <div className="group relative mx-auto flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] ">
        <span
          className={cn(
            "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]"
          )}
          style={{
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "destination-out",
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "subtract",
            WebkitClipPath: "padding-box",
          }}
        />
        🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
        <AnimatedGradientText className="text-sm font-medium">
          MKW Closers
        </AnimatedGradientText>
        <ChevronRight
          className="ml-1 size-4 stroke-neutral-500 transition-transform
 duration-300 ease-in-out group-hover:translate-x-0.5"
        />
      </div>
    </div>
  );
}

