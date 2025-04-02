import { AuroraText } from "@/components/magicui/aurora-text";
import { BoxReveal } from "../../components/magicui/box-reveal";

export function BoxRevealDemo() {
  return (
    <div className="size-full max-w-lg items-center justify-center overflow-hidden pt-8 px-4 sm:px-8">
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <p className="text-[2rem] sm:text-[3rem] font-semibold">
          AI Sales <AuroraText>Copilot</AuroraText>
          <span className="text-[#5046e6]">.</span>
        </p>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <h2 className="mt-[.5rem] text-[1.5rem] sm:text-[1.7rem]">
          AI Assistant for <span className="text-[#5046e6]">Sales Team</span>
        </h2>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <div className="mt-6">
          <p className="text-sm sm:text-base">
            &gt;
            <span>
              This intelligent AI assistant for your sales team analyzes{" "}
              <span className="font-semibold text-green-500">
                company websites
              </span>{" "}
              and <span className="font-semibold text-green-500">LinkedIn</span>{" "}
              profiles of prospects. It then automatically generates a
              personalized{" "}
              <span className="font-semibold text-green-500">
                pre-call report
              </span>{" "}
              tailored to each individual.
            </span>
          </p>

          <br />
          <p className="text-sm sm:text-base">
            &gt;{" "}
            <span>
              This report highlights potential{" "}
              <span className="font-semibold text-green-500">pain points</span>, anticipates likely{" "}
              <span className="font-semibold text-green-500">objections</span>, and suggests
              questions you might encounter, ultimately empowering your team to close deals
              more effectively.
            </span>
          </p>
        </div>
      </BoxReveal>
    </div>
  );
}
