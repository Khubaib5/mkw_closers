"use client";

import type React from "react";
import type { ReactNode, CSSProperties } from "react";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const DarkPricing = () => {
  // Replace with your actual calendar link
  // const consultationLink = "YOUR_CALENDAR_LINK_HERE";

  return (
    <section className="relative overflow-hidden text-zinc-200 selection:bg-zinc-600" id="booking">
      <div className="relative z-10 mx-auto max-w-5xl px-4 py-20 md:px-8">
        <div className="mb-12 space-y-3">
          <h2 className="text-center text-3xl font-semibold leading-tight sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
            Pricing
          </h2>
          <p className="text-center text-base text-zinc-400 md:text-lg"></p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2"> {/* Changed to md:grid-cols-2 */}
          <PriceCard
            tier="Premium"
            price="PKR 50k/mo"
            bestFor="Best for individual professionals seeking personalized coaching & AI"
            CTA={
              <LinkButton href={"https://app.lemcal.com/@m-khubaib-wasim/appointment"} target="_blank"  className="w-full  bg-zinc-50 text-zinc-950 hover:bg-zinc-200 hover:text-zinc-900"> {/* Added your calendar link */}
                Book a Free Consultation
              </LinkButton>
            }
            benefits={[
              { text: "Dedicated 1:1 Coaching Calls with You", checked: true },
              { text: "Full Access to AI Sales Copilot", checked: true },
              { text: "Exclusive Sales Resources & Templates", checked: true },
              { text: "Priority Email Support", checked: true },
              { text: "Personalized Strategy Sessions", checked: true },
              {
                text: "Access to Our Community (if applicable)",
                checked: true,
              },
            ]}
          />
          <PriceCard
            tier="AI Copilot Pro"
            price="PKR 75k/mo"
            bestFor="Best for teams (5-50 users) looking to empower their sales with AI"
            CTA={
                <LinkButton href={"https://app.lemcal.com/@m-khubaib-wasim/appointment"} target="_blank"  className="w-full  bg-zinc-50 text-zinc-950 hover:bg-zinc-200 hover:text-zinc-900"> {/* Added your calendar link */}
                Book a Free Consultation
              </LinkButton>
            }
            benefits={[
              { text: "Access to All AI Copilot Features", checked: true },
              { text: "Exclusive Sales Resources & Templates", checked: true },
              { text: "Priority Email Support", checked: true },
              { text: "Customizable AI Prompts & Workflows", checked: true },
              { text: "Dedicated Support for AI Copilot", checked: true },
              {
                text: "Access to Our Community (if applicable)",
                checked: true,
              },
              // You can add or modify benefits as per your AI Copilot's features
            ]}
          />
        </div>
      </div>
    </section>
  );
};

const PriceCard = ({ tier, price, bestFor, CTA, benefits }: PriceCardProps) => {
  return (
    <Card>
      <div className="flex flex-col items-center border-b border-zinc-700 pb-6">
        <span className="mb-6 inline-block text-zinc-50">{tier}</span>
        <span className="mb-3 inline-block text-4xl font-medium ">{price}</span>
        <span className="bg-gradient-to-br from-zinc-200 to-zinc-500 bg-clip-text text-center text-transparent">
          {bestFor}
        </span>
      </div>

      <div className="space-y-4 py-9">
        {benefits.map((b, i) => (
          <Benefit {...b} key={i} />
        ))}
      </div>

      {CTA}
    </Card>
  );
};

const Benefit = ({ text, checked }: BenefitType) => {
  return (
    <div className="flex items-center gap-3">
      {checked ? (
        <span className="grid size-5 place-content-center rounded-full bg-blue-600 text-sm text-zinc-50">
          <Check className="h-3 w-3" />
        </span>
      ) : (
        <span className="grid size-5 place-content-center rounded-full bg-zinc-800 text-sm text-zinc-400">
          <X className="h-3 w-3" />
        </span>
      )}
      <span className="text-sm text-zinc-300">{text}</span>
    </div>
  );
};

const Card = ({ className, children, style = {} }: CardProps) => {
  return (
    <motion.div
      initial={{
        filter: "blur(2px)",
      }}
      whileInView={{
        filter: "blur(0px)",
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
        delay: 0.25,
      }}
      style={style}
      className={cn(
        "relative h-full w-full overflow-hidden rounded-2xl border border-zinc-700 bg-gradient-to-br from-zinc-950/50 to-zinc-900/80 p-6",
        className
      )}
    >
      {children}
    </motion.div>
  );
};


// New LinkButton component
const LinkButton = ({ children, className, href, ...rest }: LinkButtonProps) => {
  return (
    <a
      href={href}
      className={cn(
        "rounded-md px-4 py-2 text-lg text-zinc-100 transition-all hover:scale-[1.02] hover:bg-zinc-800 hover:text-zinc-50 active:scale-[0.98]",
        className
      )}
      {...rest}
    >
      {children}
    </a>
  );
};

type PriceCardProps = {
  tier: string;
  price: string;
  bestFor: string;
  CTA: ReactNode;
  benefits: BenefitType[];
};

type CardProps = {
  className?: string;
  children?: ReactNode;
  style?: CSSProperties;
};

type BenefitType = {
  text: string;
  checked: boolean;
};

// type GhostButtonProps = {
//   children: ReactNode;
//   className?: string;
// } & React.ButtonHTMLAttributes<HTMLButtonElement>;

type LinkButtonProps = {
  children: ReactNode;
  className?: string;
  href: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;