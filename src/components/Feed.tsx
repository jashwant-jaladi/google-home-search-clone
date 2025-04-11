import { useEffect, useState } from "react"
import "react-loading-skeleton/dist/skeleton.css"
import { FeedContainer, NewsCard, NewsImage, NewsContent, NewsTitle, NewsMeta } from "../styles/Feed.styles"
import { fetchNews } from "../utils/fetchNews"
import { getTopHeadlinesUrl } from "../api/news"
import NewsSkeleton from "../utils/NewsSkeleton"

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

  if (error) {
    return <div>{error}</div>
  }

  if (loading) {
    return (
      <FeedContainer>
        {Array.from({ length: 6 }).map((_, idx) => (
          <NewsSkeleton key={idx} />
        ))}
      </FeedContainer>
    );
  }
  

  return (
    <FeedContainer>
        {feed.map((article, index) => (
            <NewsCard
              href={article.url}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
            >
              <NewsImage src={article.image} alt={article.title} />
              <NewsContent>
                <NewsTitle>{article.title}</NewsTitle>
                <NewsMeta>
                  {article.source.name} ·{" "}
                  {new Date(article.publishedAt).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </NewsMeta>
              </NewsContent>
            </NewsCard>
          ))}
    </FeedContainer>
  )
}

export default Feed
