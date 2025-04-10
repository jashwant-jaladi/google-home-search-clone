import { useEffect, useState } from "react"
import { FeedContainer,NewsCard, NewsImage, NewsContent, NewsTitle, NewsMeta } from "../styles/Feed.styles"
import { fetchNews } from "../utils/fetchNews"
import { getTopHeadlinesUrl } from "../api/news"

const Feed = () => {
  
  const [feed, setFeed] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const getFeed = async () => {
      const { articles, error } = await fetchNews(getTopHeadlinesUrl());
      setFeed(articles);
      setError(error);
      setLoading(false);
    }

    getFeed();
  }, [])
  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>{error}</div>
  }
  return (
    <FeedContainer>
      {feed.map((article, index) => (
        <NewsCard href={article.url} key={index} target="_blank" rel="noopener noreferrer">
          <NewsImage src={article.image} alt={article.title} />
          <NewsContent>
            <NewsTitle>{article.title}</NewsTitle>
            <NewsMeta>
              {article.source.name} · {new Date(article.publishedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </NewsMeta>
          </NewsContent>
        </NewsCard>
      ))}
    </FeedContainer>
  )
}

export default Feed