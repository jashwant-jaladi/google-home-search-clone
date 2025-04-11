export const fetchNews = async (url: string) => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      return { articles: data.articles, error: null };
    } catch (err) {
      console.error("Fetch error:", err);
      return { articles: [], error: "Failed to fetch data" };
    }
  };
  