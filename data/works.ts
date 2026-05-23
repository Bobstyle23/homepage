import { StaticImageData } from "next/image";

import thumbnailGamehub from "../public/images/works/gamehub-thumbnail.png";
import thumbnailCharacterCounter from "../public/images/works/character-counter-thumb.jpg";
import thumbnailFeed from "../public/images/works/feeds.png";
import thumbnailCargo from "../public/images/works/cargo-thumbnail.png";
import thumbnailPersonalBlog from "../public/images/works/personal-blog-thumbnail.jpg";
import thumbnailPortfolio from "../public/images/works/portfolio-thumbnail.png";

type Image = {
  url: string;
  alt: string;
};

export type Work = {
  delay: number;
  id: string;
  title: string;
  thumbnail: string | StaticImageData;
  description: string;
  tags?: string[];
  year: number;
  website?: string;
  platform?: string;
  stack?: string;
  images: Image[];
};

export const works: Work[] = [
  {
    delay: 0.1,
    id: "gamehub",
    title: "Gamehub",
    thumbnail: thumbnailGamehub,
    tags: ["personal project", "pet project", "web app"],
    website: "https://game-hub-react-tawny.vercel.app/",
    platform: "Windows / macOS / Linux / iOS / Android",
    stack: "TypeScript, React, React-Query, React-Hook-Form, REST Api",
    year: 2026,
    images: [
      {
        url: "/images/works/gamehub-5.png",
        alt: "Gamehub",
      },
      {
        url: "/images/works/gamehub-2.png",
        alt: "Gamehub",
      },
      {
        url: "/images/works/gamehub-1.png",
        alt: "Gamehub",
      },
      {
        url: "/images/works/gamehub-3.png",
        alt: "Gamehub",
      },
      {
        url: "/images/works/gamehub-4.png",
        alt: "Gamehub",
      },
    ],
    description:
      "A modern game discovery platform built with React, TypeScript, and RAWG API integration. Browse trending titles, explore genres and platforms, search games instantly, and enjoy a sleek responsive experience with dynamic filtering and sorting",
  },
  {
    description:
      "A modern personal blogging platform built with HTML, SCSS, JavaScript, and Gulp featuring responsive layouts, article pages, dark mode styling, and clean editorial-focused UI design.",
    delay: 0.2,
    year: 2025,
    title: "Personal Blog",
    id: "personal-blog",
    thumbnail: thumbnailPersonalBlog,
    website: "https://bobstyle23.github.io/personal-blog",
    platform: "Windows / macOS / Linux / iOS / Android",
    stack: "HTML5, JavaScript, SCSS/SASS, Gulp, CSS3",
    tags: ["personal project", "web app"],
    images: [
      {
        url: "/images/works/personal-blog-1.png",
        alt: "",
      },
      {
        url: "/images/works/personal-blog-2.png",
        alt: "",
      },
      {
        url: "/images/works/personal-blog-3.png",
        alt: "",
      },
      {
        url: "/images/works/personal-blog-4.png",
        alt: "",
      },
      {
        url: "/images/works/personal-blog-5.png",
        alt: "",
      },
      {
        url: "/images/works/personal-blog-6.png",
        alt: "",
      },
      {
        url: "/images/works/personal-blog-7.png",
        alt: "",
      },
      {
        url: "/images/works/personal-blog-8.png",
        alt: "",
      },
    ],
  },
  {
    delay: 0.3,
    description:
      "An interactive character counter application built with vanilla JavaScript, HTML, SCSS, and Gulp featuring real-time text analytics, responsive layouts, and modern frontend workflow tooling",
    year: 2025,
    title: "Character Counter",
    id: "character-counter",
    thumbnail: thumbnailCharacterCounter,
    images: [
      {
        url: "/images/works/character-counter-1.png",
        alt: "",
      },

      {
        url: "/images/works/character-counter-3.png",
        alt: "",
      },
      {
        url: "/images/works/character-counter-2.png",
        alt: "",
      },
      {
        url: "/images/works/character-counter-4.png",
        alt: "",
      },
    ],
    tags: ["personal project", "pet project", "web app"],
    website: "https://bobstyle23.github.io/character-counter/",
    platform: "Windows / macOS / Linux / iOS / Android",
    stack: "JavaScript, Gulp, HTML, SASS/SCSS",
  },
  {
    delay: 0.4,
    description:
      "Sarbon Cargo Dashboard is a modern logistics management platform",
    title: "Cargo Dashboard",
    thumbnail: thumbnailCargo,
    tags: ["client project", "web app"],
    id: "cargo-dashboard",
    year: 2026,
    images: [
      {
        url: "/images/works/cargo-thumbnail.png",
        alt: "",
      },
      {
        url: "/images/works/cargo-1.png",
        alt: "",
      },
      {
        url: "/images/works/cargo-2.png",
        alt: "",
      },
      {
        url: "/images/works/cargo-3.png",
        alt: "",
      },
    ],
    website: "https://sarbon-cargo-test.vercel.app/dispatcher/cargo",
    platform: "Windows / macOS / Linux / iOS / Android",
    stack:
      "NextJS, React, TypeScript, TailwindCSS, TanStack Query, Axios, i18n, Lucide React",
  },
  {
    delay: 0.5,
    id: "portfolio",
    title: "Portfolio (Old)",
    thumbnail: thumbnailPortfolio,
    year: 2026,
    tags: ["personal project", "web app", "portfolio"],
    images: [
      {
        url: "/images/works/portfolio-1.png",
        alt: "portfolio",
      },
      {
        url: "/images/works/portfolio-2.png",
        alt: "portfolio",
      },
      {
        url: "/images/works/portfolio-3.png",
        alt: "portfolio",
      },
      {
        url: "/images/works/portfolio-4.png",
        alt: "portfolio",
      },
    ],
    website: "https://bobstyle23-portfolio.vercel.app/",
    platform: "Windows / macOS / Linux / iOS / Android",
    stack: "Astro, React, TypeScript, TailwindCSS, Markdown / MDX",
    description:
      "A modern developer portfolio website built with Next.js, TypeScript, Astro-inspired content architecture, and Tailwind CSS featuring responsive layouts, project showcases, dark mode support, and performance-focused frontend design.",
  },
  {
    delay: 0.6,
    id: "feeds",
    title: "Mecenate Feeds App",
    thumbnail: thumbnailFeed,
    tags: ["client project", "mobile app"],
    year: 2026,
    images: [
      {
        url: "/images/works/feeds.png",
        alt: "gamehub",
      },
      {
        url: "/images/works/feeds-1.png",
        alt: "gamehub",
      },
      {
        url: "/images/works/feeds-2.png",
        alt: "gamehub",
      },
    ],
    platform: "iOS / Android",
    stack:
      "TypeScript, React-Native, WebSocket, React-Query, Expo, Haptics, Blur, MobX",
    description:
      "A real-time social feed application built with React Native, Expo, MobX, React Query, and WebSockets featuring infinite scrolling, optimistic updates, live interactions, and scalable mobile architecture.",
  },
];
