import Link from "next/link";
import ChallengeCard from "./components/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-slate-100">
      <div className="z-10 w-full max-w-5xl items-center font-mono text-sm lg:flex mb-10">
        <h1 className="text-2xl">
          <a href="https://www.frontendmentor.io/home" className="text-sky-400">
            Frontend Mentor{" "}
          </a>{" "}
          Challenges:
        </h1>
      </div>
      <div className="flex my-10 flex-0  gap-5 flex-wrap w-8/12 justify-center align-middle text-slate-600">
        <Link href="/age_calculator_app">
          <ChallengeCard
            title="Age Calculator App"
            imageSrc="/images/home/age_calculator_app_preview.png"
          ></ChallengeCard>
        </Link>
        <a href="#">
          <ChallengeCard title="Work in Progress"></ChallengeCard>
        </a>
      </div>
    </main>
  );
}
