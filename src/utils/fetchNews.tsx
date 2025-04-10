export const fetchNews = async (url: string, cacheKey = "newsData", cacheDuration = 30 * 60 * 1000) => {
  try {
    const cached = localStorage.getItem(cacheKey);
    if (cached) {
      const parsed = JSON.parse(cached);
      const now = new Date().getTime();

     
      if (now - parsed.timestamp < cacheDuration) {
        return { articles: parsed.articles, error: null };
      }
    }

   
    const response = await fetch(url);
    if (!response.ok) throw new Error("Network response was not ok");

    const data = await response.json();

    
    localStorage.setItem(
      cacheKey,
      JSON.stringify({ articles: data.articles, timestamp: new Date().getTime() })
    );

    return { articles: data.articles, error: null };
  } catch (err) {
    console.error("Fetch error:", err);
    return { articles: [], error: "Failed to fetch data" };
  }
};
