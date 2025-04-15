
const API_KEY = process.env.NEWS_API_KEY;

export async function fetchNews(category:string, count:number) {
    try{

        if (category == "any")
        {

            const res = await fetch(
                `https://newsapi.org/v2/top-headlines?country=us&pageSize=${count}&apiKey=${API_KEY}`
            );
            console.log("res",res)


        const data = await res.json();
        
        return data.articles;


        }

        else{

            const res = await fetch(
                `https://newsapi.org/v2/top-headlines?q=${category}&pageSize=${count}&apiKey=${API_KEY}`
            );

            const data = await res.json();
            return data.articles;

        }

        
    }
    catch(error){
        console.log("error fetching data ",error);
        return [];
    }

}