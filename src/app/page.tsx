import Link from "next/link";
import Card from "./components/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="z-10 w-full max-w-5xl items-center font-mono text-sm lg:flex mb-10">
        <h1 className="text-xl">
          <a href="https://www.frontendmentor.io/home" className="text-sky-400">
            Frontend Mentor{" "}
          </a>{" "}
          Challenges:
        </h1>
      </div>
      <div className="flex my-10 flex-0  gap-3 flex-wrap w-8/12 justify-center align-middle">
        <Link href="/age_calculator_app" >
          <Card className="bg-violet-100 hover:bg-violet-200">Age calculator app</Card>
        </Link>
        <a href="#">
          <Card className="bg-yellow-100 hover:bg-yellow-200">Summit else</Card>
        </a>
      </div>
    </main>
  );
}
