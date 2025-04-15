import Image from "next/image";
import oneImg from "../public/img.jpg";
import { fetchNews } from "./newsFetch";

export default async function Home() {
  const topNews = (await fetchNews("any", 10)) || [];
  const politicsNews = (await fetchNews("politics", 5)) || [];
  const sportsNews = (await fetchNews("sports", 4)) || [];
  const travelNews = (await fetchNews("travel", 5)) || [];

  const defaultImg = "https://logowik.com/content/uploads/images/1-news6242.jpg";

  type NewsCategory = Record<string, any>;
  const categories: NewsCategory[] = [{ politics: politicsNews }, { sports: sportsNews }];
  const catagoriesName = ["politics", "economics"];

  return (
    <>
      <main className="mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left column - Large article */}
            <div className="large_article lg:col-span-7 relative">
              <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden rounded-lg group">
                <img
                  src={topNews[0]?.urlToImage || defaultImg}
                  alt={topNews[0]?.title || "News"}
                  className="object-cover bg_img h-full transition-transform duration-300 ease-in-out group-hover:scale-102"
                />
                {topNews[0]?.url && (
                  <a href={topNews[0].url} target="_blank" rel="noopener noreferrer">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent foreground-overlay"></div>
                  </a>
                )}
                <div className="absolute top-4 left-4">
                  <span className="bg-red-800 text-white px-3 py-1 text-sm font-medium rounded">
                    Hot News
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-white text-xl md:text-4xl font-bold mb-4 leading-tight">
                    {topNews[0]?.title}
                  </h3>
                  {topNews[0]?.url && (
                    <a
                      href={topNews[0].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white px-3 py-2 rounded-lg w-fit bg-blue-500 hover:bg-white hover:text-blue-500 transition duration-300"
                    >
                      <span>Read Now</span> <span className="text-blue-500"> &rarr;</span>
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Right column - Two articles stacked */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {topNews[1] && (
                <div className="relative">
                  <div className="relative h-[300px] w-full overflow-hidden rounded-lg group">
                    <img
                      src={topNews[1]?.urlToImage || defaultImg}
                      alt="image"
                      className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                    />
                    {topNews[1]?.url && (
                      <a href={topNews[1].url} target="_blank" rel="noopener noreferrer">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent foreground-overlay"></div>
                      </a>
                    )}
                    <div className="absolute top-4 left-4">
                      <span className="bg-red-800 text-white px-3 py-1 text-sm font-medium rounded">
                        Hot News
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <p className="text-white text-xl md:text-2xl font-bold mb-4 leading-tight">
                        {topNews[1]?.title}
                      </p>
                      {topNews[1]?.url && (
                        <a
                          href={topNews[1].url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white px-3 py-2 rounded-lg w-fit bg-blue-500 hover:bg-white hover:text-blue-500 transition duration-300"
                        >
                          <span>Read Now</span> <span className="text-blue-500"> &rarr;</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom article */}
              {topNews[2] && (
                <div className="flex flex-col lg:flex-row gap-4 bg-white rounded-lg overflow-hidden shadow-sm lg:h-full lg:shadow-lg group">
                  <a href={topNews[2]?.url || "#"} target="_blank" rel="noopener noreferrer">
                    <img
                      src={topNews[2]?.urlToImage || defaultImg}
                      alt="image"
                      className="object-cover lg:w-50 lg:h-full transition-transform duration-300 ease-in-out group-hover:scale-103"
                    />
                  </a>
                  <div className="md:w-2/3 p-4 flex flex-col justify-between">
                    <h3 className="text-lg font-bold mb-2 text-gray-900">
                      {topNews[2]?.title}
                    </h3>
                    {topNews[2]?.url && (
                      <a
                        href={topNews[2].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white px-3 py-2 rounded-lg w-fit bg-blue-500 hover:bg-white hover:text-blue-500 hover:border hover:border-blue-500 transition duration-300"
                      >
                        <span>Read Now</span> <span className="text-blue-500"> &rarr;</span>
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Categories rendering */}
        {categories.map((categoryObj, index) => {
          const [key, value] = Object.entries(categoryObj)[0];
          return (
            <div key={index} className="container mx-auto px-4 py-8 transition-all duration-300 ease-in-out">
              <div className="flex items-center group">
                <a
                  href={`/news/${key}`}
                  rel="noopener noreferrer"
                  className="text-4xl font-extrabold text-blue-600 hover:underline transition-all"
                >
                  {key.toUpperCase()}
                </a>
                <span className="text-blue-600 text-2xl font-extrabold opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out transform translate-x-0 group-hover:translate-x-[10px]">
                  &rarr;
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-4">
                {value.map((article: any, index: number) => (
                  <div
                    className="flex flex-col gap-4 border border-slate-300 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out p-4"
                    key={index}
                  >
                    <div className="h-[250px] overflow-hidden rounded-md relative">
                      <img
                        src={article?.urlToImage || defaultImg}
                        alt="image"
                        className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                      />
                    </div>
                    <a
                      href={article?.url || "#"}
                      className="text-2xl font-semibold text-gray-800 transition-all duration-300 ease-in-out hover:text-blue-600 hover:underline"
                    >
                      {article?.title}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        {/* Travel Section */}
        {travelNews[0] && (
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="large_article lg:col-span-7 relative">
                <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden rounded-lg group">
                  <img
                    src={travelNews[0]?.urlToImage || defaultImg}
                    alt={travelNews[0]?.title || "Travel News"}
                    className="object-cover bg_img h-full transition-transform duration-300 ease-in-out group-hover:scale-102"
                  />
                  {travelNews[0]?.url && (
                    <a href={travelNews[0].url} target="_blank" rel="noopener noreferrer">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent foreground-overlay"></div>
                    </a>
                  )}
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-800 text-white px-3 py-1 text-sm font-medium rounded">
                      Hot News
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-white text-xl md:text-4xl font-bold mb-4 leading-tight">
                      {travelNews[0]?.title}
                    </h3>
                    {travelNews[0]?.url && (
                      <a
                        href={travelNews[0].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white px-3 py-2 rounded-lg w-fit bg-blue-500 hover:bg-white hover:text-blue-500 transition duration-300"
                      >
                        <span>Read Now</span> <span className="text-blue-500"> &rarr;</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
