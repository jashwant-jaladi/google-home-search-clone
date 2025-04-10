import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Wrapper,
  Heading,
  ImagePreviewContainer,
  PreviewLabel,
  PreviewImage,
  ResultsGrid,
  Card,
  Thumb,
  Title,
  SourceLink,
} from "../styles/ImageResults.styles";
import { AiOutlineHome } from "react-icons/ai";
import { HomeButton } from "../styles/ImageResults.styles";


interface ResultItem {
  id: number;
  title: string;
  thumbnailUrl: string;
  url: string;
}

const ImageResults = () => {
  const [results, setResults] = useState<ResultItem[]>([]);
  const [image, setImage] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem("processedImage");
    if (!stored) {
      navigate("/");
      return;
    }
    setImage(stored);

    fetch("https://jsonplaceholder.typicode.com/photos?_limit=10")
      .then((res) => res.json())
      .then((data) => setResults(data))
      .catch((err) => console.error("Error fetching mock results", err));
  }, [navigate]);

  return (
    <Wrapper>
<HomeButton onClick={() => navigate("/")}>
  <AiOutlineHome size={20} />
</HomeButton>

      <Heading>Search Results</Heading>

      {image && (
        <ImagePreviewContainer>
          <PreviewLabel>Image Used:</PreviewLabel>
          <PreviewImage src={image} alt="Captured" />
        </ImagePreviewContainer>
      )}

      <ResultsGrid>
        {results.map((item) => (
          <Card key={item.id}>
            <Thumb src={item.thumbnailUrl} alt={item.title} />
            <Title>{item.title}</Title>
            <SourceLink href={item.url} target="_blank" rel="noopener noreferrer">
              View Source
            </SourceLink>
          </Card>
        ))}
      </ResultsGrid>
    </Wrapper>
  );
};

export default ImageResults;
