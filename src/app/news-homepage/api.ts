export type NewsContent = {
  type: "primary" | "secondary" | "extra";
  title: string;
  description: string;
  link: string;
  image?: string;
  alt?: string;
};

const newsContent: NewsContent[] = [
  {
    type: "primary",
    title: "The Bright Future of Web 3.0?",
    description:
      "We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?",
    link: "#",
    image: "/images/news-homepage/image-web-3-desktop.jpg",
    alt: "Web 3.0 abstract image",
  },
  {
    type: "secondary",
    title: "Hydrogen VS Electric Cars",
    description: "Will hydrogen-fueled cars ever catch up to EVs?",
    link: "#",
  },
  {
    type: "secondary",
    title: "The Downsides of AI Industry",
    description: "What are the possible adverse effects of on-demand AI image generation",
    link: "#",
  },
  {
    type: "secondary",
    title: "Is VD Funding Drying Up?",
    description: "Private funding by VS firms is down 50% YOY. We take a look at what that means.",
    link: "#",
  },
  {
    type: "extra",
    title: "Reviving Retro PCs",
    description: "What happens when old PCs are given modern upgrades?",
    link: "#",
    image: "/images/news-homepage/image-retro-pcs.jpg",
    alt: "Digital Render of Retro-style computer",
  },
  {
    type: "extra",
    title: "Top 10 Laptops of 2022",
    description: "Our best picks for various needs and budgets.",
    link: "#",
    image: "/images/news-homepage/image-top-laptops.jpg",
    alt: "Image of laptop keyboard",
  },
  {
    type: "extra",
    title: "The Growth of Gaming",
    description: "How the pandemic has sparked fresh opportunities.",
    link: "#",
    image: "/images/news-homepage/image-gaming-growth.jpg",
    alt: "Console Controller",
  },
];

export async function getNewsContent(): Promise<NewsContent[]> {
  await new Promise((r) => setTimeout(r, 100));
  return newsContent;
}
