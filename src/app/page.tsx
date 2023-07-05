import Link from "next/link";
import ChallengeCard from "./components/card";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Page Title",
  description: "My page description",
  icons: {
    icon: "/public/favicon-32x32.png",
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-slate-100">
      <div className="z-10 w-full max-w-5xl items-center font-mono text-sm lg:flex mb-10">
        <h1 className="text-3xl flex">
          <div>
            <a
              href="https://www.frontendmentor.io/home"
              className="peer text-sky-400 tracking-tighter hover:text-sky-300  transition "
            >
              Frontend Mentor{" "}
            </a>{" "}
            <div className="border-b w-0 peer-hover:w-full transition duration-500 border-slate-100 peer-hover:border-sky-200" />
          </div>
          <p className="px-2">Challenges:</p>
        </h1>
      </div>
      <div className="flex my-10 flex-0  gap-10 flex-wrap w-full justify-center align-middle text-slate-600">
        <ChallengeCard
          href="/age_calculator_app"
          title="Age Calculator App"
          imageSrc="/images/home/age_calculator_app_preview.png"
        >
          <p>A simple age calculator app that calculates your age in years, months and days.</p>
          <br />
          <Link
            className="border-b border-slate-200 text-[13px] text-sky-700 hover:text-sky-300 transition-colors hover:border-sky-300"
            href="https://www.frontendmentor.io/solutions/age-calculator-app-with-react-and-tailwind-G4UYmqL1nY"
          >
            Challenge Page
          </Link>
        </ChallengeCard>
        <ChallengeCard href="/news-homepage" title="News Homepage" imageSrc="/images/home/news-homepage_preview.png">
          <p>A news homepage that displays the latest news from various sources.</p>
          <br />
          <Link
            className="border-b border-slate-200 text-[13px] text-sky-700 hover:text-sky-300 transition-colors hover:border-sky-300"
            href="https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl/hub"
          >
            Challenge Page
          </Link>
        </ChallengeCard>
      </div>
    </main>
  );
}
