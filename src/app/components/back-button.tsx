import Link from "next/link";

export default function BackButton() {
  return (
    <Link className="absolute m-5" href="/">
      <svg
        className="w-8 aspect-auto fill-slate-500 hover:fill-slate-700 z-40 transition-colors"
        id="Layer_1"
        version="1.1"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon points="352,128.4 319.7,96 160,256 160,256 160,256 319.7,416 352,383.6 224.7,256 " />
      </svg>
    </Link>
  );
}
