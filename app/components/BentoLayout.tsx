import Image from "next/image";
import { BentoCard, BentoGrid } from "../../components/magicui/bento-grid";
import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";

const features = [
  {
    Icon: FileTextIcon,
    name: "MKW Closers is a dynamic sales training company",
    description: "Empowering sales reps with the NEPQ methodology for closing more deals.",
    href: "/",
    cta: "Learn more",
    background: (
      <Image
        src="/Pic50.webp"
        alt="Abstract tech background representing sales training"
        layout="fill"
        objectFit="cover"
        className="absolute opacity-80"
        priority
      />
    ),
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: InputIcon,
    name: "We specialize in NEPQ Sales Methodology",
    description:
      "Learn the exact techniques top sales reps use to close more deals using the NEPQ methodology.",
    href: "/",
    cta: "Learn more",
    background: (
      <Image
        src="/Pic2.png"
        alt="NEPQ sales methodology background"
        layout="fill"
        objectFit="cover"
        className="absolute opacity-40"
      />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: GlobeIcon,
    name: "Personalised Training for Success",
    description:
      "Our sales training programs are designed to equip you with the skills you need to succeed in any sales environment.",
    href: "/",
    cta: "Learn more",
    background: (
      <Image
        src="/Pic30.jpg"
        alt="Global service for sales training"
        layout="fill"
        objectFit="cover"
        className="absolute opacity-80"
      />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: CalendarIcon,
    name: "Always Punctual",
    description:
      "We pride ourselves on punctuality, ensuring that training sessions are completed on time and to the highest standards.",
    href: "/",
    cta: "Learn more",
    background: (
      <Image
        src="/Pic40.jpg"
        alt="Clock background"
        layout="fill"
        objectFit="cover"
        className="absolute opacity-80"
      />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: BellIcon,
    name: "Ready to Boost Your Sales?",
    description:
      "Join MKW Closers today and learn how to effectively close more deals with the NEPQ method.",
    href: "/",
    cta: "Learn more",
    background: (
      <Image
        src="/Pic5.png"
        alt="Collaboration background representing sales success"
        layout="fill"
        objectFit="cover"
        className="absolute opacity-50"
      />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

const BentoLayout = () => {
  return (
    <section id="about">
      <h1 className="text-center font-bold text-[3rem] mb-8">About MKW Closers</h1>
      <BentoGrid className="lg:grid-rows-3 mb-20 px-6">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </section>
  );
};

export default BentoLayout;
