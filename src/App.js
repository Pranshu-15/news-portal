import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Body from "./Components/Body";
import ArticleDetail from "./Components/ArticleDetail";
import Menu from "./Components/Menu";
import Favorites from "./Components/Favorites";
import "./App.css";
import LandingPage from "./Components/LandingPange";

const AppContent = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/news/?category=${category}`);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const searchTerm = event.target.search.value;
    navigate(`/news/?search=${searchTerm}`);
    
  };

  
  return (
    <div>
      <Menu
        handleCategoryClick={handleCategoryClick}
        handleSearch={handleSearch}
      />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/news" element={<Body />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
