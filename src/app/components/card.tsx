import React from "react";
import Image from "next/image";
import Link from "next/link";

type CardProps = {
  title: string;
  href: string;
  children?: React.ReactNode;
  className?: string;
  imageSrc?: string | null;
};

const placeHolderImage = "/images/home/placeholder_images/dino_computer.png";

export default function ChallengeCard({ title, href, children, className = "", imageSrc = null }: CardProps) {
  const src = imageSrc || placeHolderImage;
  return (
    <Link href={href}>
      <div
        className={`flex flex-col items-center justify-center w-72 rounded-3xl shadow-md hover:shadow-xl bg-white hover:bg-slate-100 transition-all duration-200 ${className}`}
      >
        <div className="h-48 w-full ">
          <Image
            src={src}
            width={100}
            height={100}
            alt={`preview image for ${title}`}
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="font-poppins-bold text-2xl my-3">{title}</h1>
        {children}
      </div>
    </Link>
  );
}
