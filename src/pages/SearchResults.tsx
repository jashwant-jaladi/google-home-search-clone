import { useEffect, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { fetchNews } from "../utils/fetchNews"
import { getSearchUrl } from "../api/news"
import {
  Container,
  SearchInput,
  ResultItem,
  ResultTitle,
  ResultMeta,
  SearchForm,
  ResultList,
  SourceRow,
  Favicon,
  SourceInfo,
  SourceName,
  SourceUrl,
  GoogleIcon,
  ClearIcon} from "../styles/SearchResults.styles"
import { getDomainFromUrl } from "../utils/getDomain"
import { FcGoogle } from "react-icons/fc";
import { RxCross1 } from "react-icons/rx";



const SearchResults = () => {
  const [params] = useSearchParams()
  const navigate = useNavigate()

  const initialQuery = params.get("q") || ""
  const [query, setQuery] = useState(initialQuery)
  const [results, setResults] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!initialQuery.trim()) return

    const fetchResults = async () => {
      setLoading(true)
      const { articles, error } = await fetchNews(getSearchUrl(initialQuery))
      setResults(articles)
      setError(error)
      setLoading(false)
    }

    fetchResults()
  }, [initialQuery])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return
    navigate(`/searchresults?q=${encodeURIComponent(query)}`)
  }

  return (
    <Container>
<SearchForm onSubmit={handleSubmit}>
  <GoogleIcon type="button" onClick={() => navigate("/")}>
    <FcGoogle size={18} />
  </GoogleIcon>

  <SearchInput
    type="text"
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    placeholder="Search for news..."
  />

  {query && (
    <ClearIcon type="button" onClick={() => setQuery("")}>
      <RxCross1 color="white"/>
    </ClearIcon>
  )}
</SearchForm>



      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : results.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <ResultList>
          {results.map((article, idx) => {
            const domain = getDomainFromUrl(article.url)
            const faviconUrl = `https://www.google.com/s2/favicons?sz=16&domain=${domain}`

            return (
              <ResultItem key={idx}>
                <SourceRow>
                  <Favicon src={faviconUrl} alt="favicon" />
                  <SourceInfo>
                    <SourceName>{article.source.name}</SourceName>
                    <SourceUrl>{domain}</SourceUrl>
                  </SourceInfo>
                </SourceRow>

                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  <ResultTitle>{article.title}</ResultTitle>
                </a>
                <ResultMeta>{article.description}</ResultMeta>
              </ResultItem>
            )
          })}
        </ResultList>
      )}
    </Container>
  )
}

export default SearchResults
