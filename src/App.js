import { Routes, Route, Router } from "react-router-dom";

import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import GithubContext, { GithubProvider } from "./context/GithubContext";
import { SearchProvider } from "./context/SearchContext";

function App(props) {
  return (
    <GithubProvider>
      <SearchProvider>
        <div className="flex flex-col justify-between h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </SearchProvider>
    </GithubProvider>
  );
}

export default App;
