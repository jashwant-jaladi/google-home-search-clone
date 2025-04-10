import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import CropImage from './pages/CropImage';
import ImageResults from './pages/ImageResults';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/searchresults" element={<SearchResults />} />
      <Route path="/cropimage" element={<CropImage />} />
      <Route path="/image-results" element={<ImageResults/>} />
    </Routes>
  );
}

export default App;
