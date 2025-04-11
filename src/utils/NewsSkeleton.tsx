import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import { NewsCard, NewsContent } from "../styles/Feed.styles";

const NewsSkeleton = () => {
  return (
    <NewsCard as="div">
      <Skeleton 
        height={200}
        width={300}
        borderRadius="8px 8px 0 0" 
        baseColor="#2b2b2b" 
        highlightColor="#3c3c3c"
         
      />
      <NewsContent>
        <Skeleton count={2} height={16} style={{ marginBottom: '8px' }}  />
        <Skeleton width="40%" height={12} />
      </NewsContent>
    </NewsCard>
  );
};

export default NewsSkeleton;
