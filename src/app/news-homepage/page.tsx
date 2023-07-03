"use client";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import BackButton from "../components/back-button";

const BurgerMenu = () => {
  return (
    <div className="flex m-1 flex-col items-center justify-center w-10 aspect-auto gap-1 bg-white rounded-full">
      <div className="w-8 h-0.5 bg-black rounded-full"></div>
      <div className="w-8 h-0.5 bg-black rounded-full"></div>
      <div className="w-8 h-0.5 bg-black rounded-full"></div>
    </div>
  );
};

const MobileMenu = ({ open, setOpen }: { open: boolean; setOpen: (state: boolean) => void }) => {
  if (open) {
    return (
      <div className="absolute top-0 right-0 w-2/3 h-screen bg-news-bg ">
        <div className="float-right my-5 px-3">
          <Image
            src="/images/news-homepage/icon-menu-close.svg"
            alt="Menu Close"
            width={8}
            height={8}
            className="w-8 mx-1 aspect-auto cursor-pointer"
            onClick={() => setOpen(false)}
          />
        </div>
      </div>
    );
  } else {
    return <> </>;
  }
};

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="flex items-center justify-between p-4 ">
      <Image src="/images/news-homepage/logo.svg" alt="Logo" width={10} height={10} className="w-10 mx-1 aspect-auto" />
      <Image
        src="/images/news-homepage/icon-menu.svg"
        alt="Menu"
        width={8}
        height={8}
        className="w-9 mx-1 aspect-auto cursor-pointer"
        onClick={() => setOpen(!open)}
      />
      <MobileMenu open={open} setOpen={setOpen} />
    </header>
  );
};

export default function NewsHomepage() {
  return (
    <>
      <Head>
        <title>News Homepage</title>
        <meta name="description" content="News Homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-news-bg">
        <div className="">
          <Header />
        </div>
      </main>
    </>
  );
}
