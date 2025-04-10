const API_KEY = import.meta.env.VITE_GNEWS_API_KEY;

export const getTopHeadlinesUrl = () =>
  `https://gnews.io/api/v4/top-headlines?lang=en&country=in&max=10&apikey=${API_KEY}`;

export const getSearchUrl = (query: string) =>
  `https://gnews.io/api/v4/search?q=${encodeURIComponent(query)}&lang=en&country=in&max=10&apikey=${API_KEY}`;
