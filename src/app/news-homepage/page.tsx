import Head from "next/head";
import Image from "next/image";
import Header from "./components/header";
import { NewsContent, getNewsContent } from "./api";

const PrimaryContent = ({ content }: { content: NewsContent }) => {
  return (
    <>
      {content.image && (
        <>
          <Image
            src={content.image}
            alt={content.alt ?? "Hero"}
            width={500}
            height={500}
            className="max-w-7xl lg:hidden w-full"
          />
          <Image
            src={content.image}
            alt={content.alt ?? "Hero"}
            width={1000}
            height={500}
            className="w-full lg:block hidden"
          />
        </>
      )}
      <div className="lg:flex lg:my-8 gap-11">
        <h1 className="font-inter-extra-bold text-4xl lg:font-bold my-4 lg:my-0 lg:text-5xl min-w-[40%]">
          {content.title}
        </h1>
        <div className="">
          <p className="text-slate-500">{content.description}</p>
          <a href={content.link}>
            <button className="tracking-[3px] my-6 lg:my-10 px-8 py-2 bg-news-highlight hover:bg-news-secondary transition-colors duration-200 text-slate-50 text-[15px] font-inter">
              READ MORE
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

const SecondaryContent = ({ content }: { content: NewsContent }) => {
  return (
    <a href={content.link}>
      <div className="group cursor-pointer">
        <h2 className="font-inter-bold mt-5 mb-2  text-white group-hover:text-[#f4ad5e]">{content.title}</h2>
        <p className="text-[13px]">{content.description}</p>
        <hr className="bg-slate-700 fill-slate-700 mt-6"></hr>
      </div>
    </a>
  );
};

const ExtraContent = ({ content, index }: { content: NewsContent; index: number }) => {
  return (
    <a href={content.link}>
      <div className="group flex cursor-pointer my-8 lg:my-0">
        {content.image && <Image src={content.image} width={100} height={300} alt={content.alt ?? ""} />}
        <div className="flex flex-col ml-4 gap-2 transition-colors duration-150">
          <h1 className="text-2xl font-inter-bold text-gray-300 tracking-wider">
            {(index + 1).toString().padStart(2, "0")}
          </h1>
          <h2 className="font-inter-extra-bold group-hover:text-orange-500">{content.title}</h2>
          <p className="text-gray-500 text-[12px] tracking-wider font-inter">{content.description}</p>
        </div>
      </div>
    </a>
  );
};

export default async function NewsHomepage() {
  const newsContent = await getNewsContent();
  const primaryContent = newsContent.filter((content) => content.type === "primary")[0];
  const secondaryContent = newsContent.filter((content) => content.type === "secondary");
  const extraContent = newsContent.filter((content) => content.type === "extra");

  return (
    <>
      <Head>
        <title>News Homepage</title>
        <meta name="description" content="News Homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-news-bg m-0 font-inter lg:px-24 lg:py-10 xl:items-center xl:justify-center xl:flex">
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
          <div className="grid p-4 lg:grid-cols-3 lg:grid-rows-3 lg:gap-5 w-full">
            <section className="lg:row-start-1 lg:col-start-1 lg:row-end-3 lg:col-end-3">
              <PrimaryContent content={primaryContent} />
            </section>
            <section className="lg:flex lg:flex-col bg-news-secondary p-4 my-6 lg:my-0 text-slate-400 lg:justify-around font-inter transition-colors duration-200 lg:col-start-3 lg:row-start-1 lg:row-end-3 lg:col-end-3">
              <h1 className="font-inter font-bold text-2xl text-[#f4ad5e] lg:text-4xl">New</h1>
              {secondaryContent.map((content) => (
                <SecondaryContent content={content} key={content.title} />
              ))}
            </section>
            <section className="my-6 lg:my-0 lg:col-start-1 lg:col-end-4 lg:row-start-3 lg:row-end-3 lg:flex lg:justify-stretch lg:items-center lg:mb-16 ">
              {extraContent.map((content, index) => (
                <ExtraContent content={content} index={index} key={content.title} />
              ))}
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
