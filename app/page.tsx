import BentoLayout from "./components/BentoLayout";
import { GridPatternLinearGradient } from "./components/GridPattern";
import { AuroraTextDemo } from "./components/Head";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { AnimatedBeamMultipleOutputDemo } from "./components/Ai_sales";
import { BoxRevealDemo } from "./components/Ai_Sales_Text";
import { DarkPricing } from "./components/Pricing";
import TypeformEmbed from "./components/Form";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen pt-20 bg-gradient-to-br from-green-400 to-green-700">
      {/* Grid Background */}
      <div className="absolute inset-0">
        <GridPatternLinearGradient />
      </div>

      {/* Aurora Text - Centered Below Navbar */}
      <div className="relative flex items-center justify-center w-full mt-24 md:mt-36 lg:mt-48 px-6">
        <AuroraTextDemo />
      </div>

      {/* Bento Layout */}
      <div className="w-full px-6 md:px-10 lg:px-20">
        <BentoLayout />
      </div>

      {/* Sparkles Text and AI Sales Copilot */}
      <div className="mt-16 w-full px-6 md:px-10 lg:px-20">
        <SparklesText
          text="Not only this, Meet our AI Sales Copilot"
          className="text-2xl sm:text-base md:text-lg lg:text-3xl xl:text-4xl mb-8 lg:mb-12 text-center"
        />
        <div className="flex flex-col md:flex-row justify-between items-center gap-y-8 md:gap-y-0 md:gap-x-8 lg:gap-x-16 xl:gap-x-20">
          <BoxRevealDemo />
          <AnimatedBeamMultipleOutputDemo />
        </div>
      </div>

      <DarkPricing />
      <TypeformEmbed />
      
    </div>
  );
}


