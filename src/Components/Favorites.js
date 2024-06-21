import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Body from './Body'; // Import the Body component

const Favorites = ({ category, searchTerm }) => {
  const favorites = useSelector((state) => state.news.favorites);
  const navigate = useNavigate();

  function trimTitle(title, maxWords) {
    const words = title.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    }
    return title;
  }

  const handleReadMore = (article) => {
    navigate(`/article/${article.article_id}`, { state: { article } });
  };

  // If there's a category or search term, render the Body component
  if (category || searchTerm) {
    return <Body category={category} searchTerm={searchTerm} />;
  }

  return (
    <Container>
      <h1>Favorites</h1>
      <div className="card-container">
        {favorites.map((article, index) => (
          <div key={article.article_id} className={`card card-${index + 1}`}>
            <div
              className="card-img"
              style={{ backgroundImage: `url(${article.image_url})` }}
            ></div>
            <a href="/" className="card-link">
              <div
                className="card-img-hovered"
                style={{ backgroundImage: `var(--card-img-hovered-overlay), url(${article.image_url})` }}
              ></div>
            </a>
            <div className="card-info">
              <h1 className="card-title">{trimTitle(article.title, 3)}</h1>
              <button onClick={() => handleReadMore(article)} className="button">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Favorites;