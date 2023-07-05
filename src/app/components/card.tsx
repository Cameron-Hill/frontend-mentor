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
        className={`group flex flex-col w-80 rounded-3xl shadow-md hover:shadow-xl bg-white hover:bg-slate-50 transition-all duration-200 ${className}`}
      >
        <div className="h-48 w-full ">
          <Image
            src={src}
            width={500}
            height={500}
            alt={`preview image for ${title}`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="px-5 ">
          <h1 className="font-poppins-bold text-2xl my-6 group-hover:text-slate-700">{title}</h1>
          {children && <hr></hr>}
          {children && <div className=" text-slate-600 font-poppins my-4">{children}</div>}
        </div>
      </div>
    </Link>
  );
}
