import TestimonialContent from "@/components/TestimonialContent";
import { TestimonialData } from "./constants";
import CtaTabContent from "@/components/cta/CtaTabContent";

// Tabs array with components as content
export const tabs = [
  {
    id: 0,
    label: "/images/starks.svg",
    component: (
      <TestimonialContent
        name={TestimonialData[0].name}
        desc={TestimonialData[0].desc}
        image={TestimonialData[0].image}
        subText={TestimonialData[0].subText}
      />
    ),
  },
  {
    id: 1,
    label: "/images/ExecutiveProsLogo.svg",
    component: (
      <TestimonialContent
        name={TestimonialData[1].name}
        desc={TestimonialData[1].desc}
        image={TestimonialData[1].image}
        subText={TestimonialData[1].subText}
        right={330}
      />
    ),
  },
  {
    id: 2,
    label: "/images/stacai.svg",
    component: (
      <TestimonialContent
        name={TestimonialData[2].name}
        desc={TestimonialData[2].desc}
        image={TestimonialData[2].image}
        subText={TestimonialData[2].subText}
        right={100}
      />
    ),
  },
  {
    id: 3,
    label: "/images/iwaria.svg",
    component: (
      <TestimonialContent
        name={TestimonialData[3].name}
        desc={TestimonialData[3].desc}
        image={TestimonialData[3].image}
        subText={TestimonialData[3].subText}
        right={200}
      />
    ),
  },
  {
    id: 4,
    label: "/images/Beaupreneur.svg",
    component: (
      <TestimonialContent
        name={TestimonialData[4].name}
        desc={TestimonialData[4].desc}
        image={TestimonialData[4].image}
        subText={TestimonialData[4].subText}
        right={0}
      />
    ),
  },
];

// CTA TABS
export const ctaTabsData = [
  {
    id: 0,
    label: "Idea",
    content: (
      <CtaTabContent
        title="Your vision is unique."
        description="Nurture Your Idea into a Blueprint for Success with our strategic insights and industry expertise. Your vision is unique, let’s us shape it."
        image="/images/camera-man.svg"
      />
    ),
  },
  {
    id: 1,
    label: "Design",
    content: (
      <CtaTabContent
        title="Crafting the blueprint for success."
        description="Design is more than aesthetics, it’s about creating user experiences that resonate and convert. Our design experts shape your vision into a stunning reality."
        image="/images/plan-design.svg"
      />
    ),
  },
  {
    id: 2,
    label: "Develop",
    content: (
      <CtaTabContent
        title="Turning blueprints into reality."
        description="We breathe life into designs, building robust platforms ready to disrupt markets. Harness the experience of our development team to bring your Concept to Life."
        image="/images/plan-develop.svg"
      />
    ),
  },
  {
    id: 3,
    label: "Launch",
    content: (
      <CtaTabContent
        title="Your launchpad to the market."
        description="Launching is just the beginning, we ensure your product makes a splash and keeps making waves, ensuring a continual customer acquisition."
        image="/images/plan-launch.svg"
      />
    ),
  },
];
