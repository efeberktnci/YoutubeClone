import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "./pages/Feed";
import SearchResults from "./pages/SearchResults";
import VideoDetai from "./pages/VideoDetail";
import Header from "./component/Header";


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Feed/>} />
        <Route path="/watch" element={<SearchResults/>} />
        <Route path="/results" element={<VideoDetai/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
