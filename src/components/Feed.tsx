import { useEffect, useState } from "react"
import { FeedContainer,NewsCard, NewsImage, NewsContent, NewsTitle, NewsMeta } from "../styles/Feed.styles"

const Feed = () => {
  const API_KEY = import.meta.env.VITE_GNEWS_API_KEY
  const [feed, setFeed] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const getFeed = async () => {
    try {
       const response = await fetch(`https://gnews.io/api/v4/top-headlines?lang=en&country=in&max=10&apikey=${API_KEY}`)
       if (!response.ok) {
          throw new Error("Network response was not ok")
        }
        const data = await response.json()
        setFeed(data.articles)
        setLoading(false)
    } catch (error) {
      setError("Failed to fetch data")
      setLoading(false)
    }
  }
  useEffect(() => {
    getFeed()
  }, [])
  console.log(feed)
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