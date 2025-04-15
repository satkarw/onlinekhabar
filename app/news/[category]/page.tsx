import { notFound } from "next/navigation";

const categories = ["politics", "economics", "lifestyle", "travel", "sports"];

export default async function CategoryPage({ params }: { params: { category: string } }) {
    const { category } = await params;

    if (!categories.includes(category)) {
        return notFound();
    }

    const API_KEY = process.env.NEWS_API_KEY;

    try {
      
        const res = await fetch(`https://newsapi.org/v2/everything?q=${category}&apiKey=${API_KEY}`);

        if (!res.ok) throw new Error("Failed to fetch news");
        
        const data = await res.json();

        return (
            <main>
                <h1 className="
                        text-3xl 
                        md:text-6xl 
                        font-extrabold 
                        text-center 
                        my-4 mt-20 
                        text-white 
                        bg-blue-500 
                        py-2 px-4 
                        rounded-lg 
                        md:h-50 h-20 
                        flex 
                        items-center 
                        justify-center"
                        >
                    {category.toUpperCase()}
                </h1>

                {data.articles?.length > 0 ? (
                    data.articles.map((article: any) => {

                        const date = new Date(article.publishedAt);
                        const formattedDate = date.toLocaleDateString("en-US", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        });
                        const formattedTime = date.toLocaleTimeString("en-US", {
                            hour: "2-digit",
                            minute: "2-digit",
                        });
                        const formattedDateTime = `${formattedDate} at ${formattedTime}`;

                        return(
                            

                        <div key={article.url} className="p-4 border-b flex md:flex-row flex-col gap-4">

                            <div className="mr-6 md:w-100 w-full flex-shrink-0">
                                {/* image */}
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                   { article.urlToImage ? <img src={article.urlToImage} alt="image"  className="w-full md:h-full object-cover rounded-md"/> : <img src="https://english.onlinekhabar.com/wp-content/themes/onlinekhabar-english-2020/img/site-main-logo.png" alt="image" className="w-100 object-cover rounded-md"/> }
                                </a>

                            </div>

                            <div className="flex flex-col gap-4">
                                {/* data */}
                                <div>
                                    <a href="#" className="font-bold text-3xl">{article.title}</a>
                                    <p className="text-sm text-slate-500">{formattedDateTime}</p>
                                </div>
                                
                                <p className="text-gray-700">{article.description}</p>
                                
                                <a href={article.url} target="_blank" rel="noopener noreferrer" 
                                    className="text-white border px-3 py-2 rounded-lg w-fit bg-blue-500 hover:bg-white hover:text-blue-500 transition duration-300"
                                >  
                                    <span>Read more</span> <span className="text-blue-500"> &rarr;</span>
                                </a>
                            </div>


                    </div>
                        )
                    }
                        
                    )
                ) : (
                    <p>No articles found in this category.</p>
                )}
            </main>
        );
    } catch (error) {
        return <p>Error loading news. Please try again later.</p>;
    }
}