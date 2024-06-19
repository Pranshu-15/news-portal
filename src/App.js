import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Body from './Components/Body';
import ArticleDetail from './Components/ArticleDetail';
import Menu from './Components/Menu';
import Favorites from './Components/Favorites';
import './App.css';

const App = () => {
  const [category, setCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleCategoryClick = (category) => {
    setCategory(category);
    setSearchTerm("");
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setCategory("");
    setSearchTerm(event.target.search.value);
  };

  return (
    <Router>
      <div>
        <Menu handleCategoryClick={handleCategoryClick} handleSearch={handleSearch} />
        <Routes>
          <Route exact path="/" element={<Body category={category} searchTerm={searchTerm} />} />
          <Route path="/article/:id" element={<ArticleDetail />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
