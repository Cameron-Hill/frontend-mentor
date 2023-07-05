"use client";
import Image from "next/image";
import { Children, useState } from "react";

const BurgerMenu = () => {
  return (
    <div className="flex m-1 flex-col items-center justify-center w-10 aspect-auto gap-1 bg-white rounded-full">
      <div className="w-8 h-0.5 bg-black rounded-full"></div>
      <div className="w-8 h-0.5 bg-black rounded-full"></div>
      <div className="w-8 h-0.5 bg-black rounded-full"></div>
    </div>
  );
};

const MobileMenu = ({
  children,
  open,
  setOpen,
}: {
  children: React.ReactNode;
  open: boolean;
  setOpen: (state: boolean) => void;
}) => {
  if (open) {
    return (
      <div className="absolute top-0 right-0 w-2/3 h-screen bg-news-bg">
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
        <div className="flex flex-col gap-5 h-full p-5">
          <div className="h-1/5"></div>
          {children}
        </div>
      </div>
    );
  } else {
    return <> </>;
  }
};

export default function Header({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="flex items-center justify-between p-4 text-gray-500 ">
      <Image
        src="/images/news-homepage/logo.svg"
        alt="Logo"
        width={10}
        height={10}
        className="w-10 md:w-16 mx-1 aspect-auto"
      />
      <div className="hidden font-inter md:flex md:gap-10">{children}</div>
      <div className="md:hidden">
        <Image
          src="/images/news-homepage/icon-menu.svg"
          alt="Menu"
          width={8}
          height={8}
          className="w-9 mx-1 aspect-auto cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      </div>
      <MobileMenu open={open} setOpen={setOpen}>
        {children}
      </MobileMenu>
    </header>
  );
}
