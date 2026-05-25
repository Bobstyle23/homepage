import { StaticImageData } from "next/image";

import thumbnailGamehub from "../public/images/works/gamehub-thumbnail.png";
import thumbnailCharacterCounter from "../public/images/works/character-counter-thumb.jpg";
import thumbnailFeed from "../public/images/works/feeds.png";
import thumbnailCargo from "../public/images/works/cargo-thumbnail.png";
import thumbnailPersonalBlog from "../public/images/works/personal-blog-thumbnail.jpg";
import thumbnailPortfolio from "../public/images/works/portfolio-thumbnail.png";
import thumbnailBankcow from "../public/images/works/bankcow-thumbnail.png";
import thumbnailBankcowMob from "../public/images/works/bankcow-mob-3.webp";

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
  problem?: string | null;
  solution?: string | null;
  tech_decisions?: string | null;
  challenges?: string | null;
  lessons?: string | null;
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

    problem:
      "Game discovery platforms often feel overloaded or difficult to browse. I wanted to create a clean interface where users can quickly discover games by genre, platform, rating, and search.",
    solution:
      "I built a responsive React application with filtering, sorting, API integration, loading states, and clean project structure to make browsing games simple and enjoyable.",
    tech_decisions:
      "React and TypeScript were used for reliable UI development, while RAWG API powered the game data. I focused on reusable components, typed API responses, and responsive layouts.",
    challenges:
      "The main challenge was keeping filters, search, loading states, and API data predictable without making the UI feel slow or cluttered.",
    lessons:
      "This project improved my understanding of API-driven UI, reusable component architecture, and practical frontend performance decisions.",
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
  {
    delay: 0.7,
    id: "bankcow-web",
    title: "Bankcow Homepage",
    thumbnail: thumbnailBankcow,
    tags: ["client project", "web app"],
    stack: "TypeScript, React, React-Query, Redux RTK, REST Api",
    year: 2022,
    platform: "iOS / Android / Windows / MacOS / Linux",
    website: "https://www.bankcow.co.kr/",
    images: [
      {
        url: "/images/works/bankcow-8.png",
        alt: "",
      },
      {
        url: "/images/works/bankcow-2.png",
        alt: "",
      },
      {
        url: "/images/works/bankcow-3.png",
        alt: "",
      },
      {
        url: "/images/works/bankcow-4.png",
        alt: "",
      },
      {
        url: "/images/works/bankcow-5.png",
        alt: "",
      },
      {
        url: "/images/works/bankcow-6.png",
        alt: "",
      },
      {
        url: "/images/works/bankcow-7.png",
        alt: "",
      },
      {
        url: "/images/works/bankcow-1.png",
        alt: "",
      },
    ],
    description:
      "A modern fintech landing platform for BankCow built with responsive frontend architecture, interactive UI sections, and conversion-focused design emphasizing modern web experiences and polished user interaction.",
  },
  {
    delay: 0.8,
    id: "bankcow-mobile",
    title: "Bankcow Mobile App",
    thumbnail: thumbnailBankcowMob,
    tags: ["client project", "mobile app"],
    year: 2022,
    website:
      "https://apps.apple.com/kr/app/%EB%B1%85%EC%B9%B4%EC%9A%B0-bankcow/id1588858780",
    platform: "iOS / Android",
    stack: "React-Native, TypeScript",
    images: [
      {
        url: "/images/works/bankcow-mob-1.webp",
        alt: "",
      },
      {
        url: "/images/works/bankcow-mob-2.webp",
        alt: "",
      },
      {
        url: "/images/works/bankcow-mob-3.webp",
        alt: "",
      },
    ],
    description:
      "A mobile fintech application for BankCow focused on Korean beef fractional investment, secure onboarding, asset tracking, investment progress, settlement status, and a polished mobile-first financial user experience.",
  },
];
