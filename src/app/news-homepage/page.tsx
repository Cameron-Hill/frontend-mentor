import Head from "next/head";
import Image from "next/image";
import Header from "./components/header";
import Button from "./components/button";

// Break up components
// implement API

export default function NewsHomepage() {
  return (
    <>
      <Head>
        <title>News Homepage</title>
        <meta name="description" content="News Homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-news-bg m-0 font-inter md:px-24 md:py-10 xl:items-center xl:justify-center xl:flex">
        <div className="xl:max-w-7xl">
          <Header>
            <span>
              <a href="#" className="hover:text-news-secondary">
                Home
              </a>
            </span>
            <span>
              <a href="#" className="hover:text-news-secondary">
                New
              </a>
            </span>
            <span>
              <a href="#" className="hover:text-news-secondary">
                Popular
              </a>
            </span>
            <span>
              <a href="#" className="hover:text-news-secondary">
                Trending
              </a>
            </span>
            <span>
              <a href="#" className="hover:text-news-secondary">
                Categories
              </a>
            </span>
          </Header>
          <div className="grid p-4 md:grid-cols-3 md:grid-rows-3 md:gap-5">
            <section className="md:row-start-1 md:col-start-1 md:row-end-3 md:col-end-3">
              <Image
                src="/images/news-homepage/image-web-3-mobile.jpg"
                alt="Hero"
                width={500}
                height={500}
                className="max-w-7xl md:hidden"
              />
              <Image
                src="/images/news-homepage/image-web-3-desktop.jpg"
                alt="Hero"
                width={1000}
                height={500}
                className="w-full md:block hidden"
              />
              <div className="md:flex md:my-8 gap-11">
                <h1 className="font-inter-extra-bold text-4xl md:font-bold my-4 md:my-0 md:text-5xl min-w-[40%]">
                  The Bright Future of Web 3.0?
                </h1>
                <div className="">
                  <p className="text-slate-500">
                    We dive into the next evolution of the web that claims to put the power of the platforms back into
                    the hands of the people. But is it really fulfilling its promise?
                  </p>
                  <button className="tracking-[3px] my-6 md:my-10 px-8 py-2 bg-news-highlight hover:bg-news-secondary transition-colors duration-200 text-slate-50 text-[15px] font-inter">
                    READ MORE
                  </button>
                </div>
              </div>
            </section>
            <section className="md:flex md:flex-col bg-news-secondary p-4 my-6 md:my-0 text-slate-400 md:justify-around font-inter transition-colors duration-200 md:col-start-3 md:row-start-1 md:row-end-3 md:col-end-3">
              <h1 className="font-inter font-bold text-2xl text-[#f4ad5e] md:text-4xl">New</h1>
              <div className="group cursor-pointer">
                <h2 className="font-inter-bold mt-5 mb-2  text-white group-hover:text-[#f4ad5e]">
                  Hydrogen VS Electric Cars
                </h2>
                <p className="text-[13px]">Will hydrogen-fueled cars ever catch up to EVs?</p>
                <hr className="bg-slate-700 fill-slate-700 mt-6"></hr>
              </div>

              <div className="group cursor-pointer">
                <h2 className="font-inter-bold mt-5 mb-2  text-white group-hover:text-[#f4ad5e]">
                  The Downsides of AI Industry
                </h2>
                <p className="text-[13px]">What are the possible adverse effects of on-demand AI image generation</p>
                <hr className="bg-slate-700 fill-slate-700 mt-6"></hr>
              </div>

              <div className="group cursor-pointer">
                <h2 className="font-inter-bold mt-5 mb-2  text-white group-hover:text-[#f4ad5e]">
                  Is VD Funding Drying Up?
                </h2>
                <p className="text-[13px]">
                  Private funding by VS firms is down 50% YOY. We take a look at what that means.
                </p>
                <hr className="bg-slate-700 fill-slate-700 mt-6"></hr>
              </div>
            </section>
            <section className="my-6 md:my-0 md:col-start-1 md:col-end-4 md:row-start-3 md:row-end-3 md:flex md:justify-stretch md:items-center md:mb-16 ">
              <div className="group flex cursor-pointer my-8 md:my-0">
                <Image
                  src="/images/news-homepage/image-retro-pcs.jpg"
                  width={100}
                  height={300}
                  alt="Digital Render of Retro-style computer"
                />
                <div className="flex flex-col ml-4 gap-2 transition-colors duration-150">
                  <h1 className="text-2xl font-inter-bold text-gray-300 tracking-wider">01</h1>
                  <h2 className="font-inter-extra-bold group-hover:text-orange-500">Reviving Retro PCs</h2>
                  <p className="text-gray-500 text-[12px] tracking-wider font-inter">
                    What happens when old PCs are given modern upgrades?
                  </p>
                </div>
              </div>

              <div className="group flex cursor-pointer my-8 md:my-0">
                <Image
                  src="/images/news-homepage/image-top-laptops.jpg"
                  width={100}
                  height={300}
                  alt="Digital Render of Retro-style computer"
                />
                <div className="flex flex-col ml-4 gap-2 transition-colors duration-150">
                  <h1 className="text-2xl font-inter-bold text-gray-300 tracking-wider">02</h1>
                  <h2 className="font-inter-extra-bold group-hover:text-orange-500">Top 10 Laptops of 2022</h2>
                  <p className="text-gray-500 text-[12px] tracking-wider font-inter">
                    Our best picks for various needs and budgets.
                  </p>
                </div>
              </div>

              <div className="group flex cursor-pointer my-8 md:my-0">
                <Image
                  src="/images/news-homepage/image-gaming-growth.jpg"
                  width={100}
                  height={300}
                  alt="Digital Render of Retro-style computer"
                />
                <div className="flex flex-col ml-4 gap-2 transition-colors duration-150">
                  <h1 className="text-2xl font-inter-bold text-gray-300 tracking-wider">03</h1>
                  <h2 className="font-inter-extra-bold group-hover:text-orange-500">The Growth of Gaming</h2>
                  <p className="text-gray-500 text-[12px] tracking-wider font-inter">
                    How the pandemic has sparked fresh opportunities.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
