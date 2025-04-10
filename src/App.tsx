import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/searchresults" element={<SearchResults />} />
    </Routes>
  );
}

export default App;
