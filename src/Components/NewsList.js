import { useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CustomPagination from "./CustomPagination";
import useNewsData from "../hooks/useNewsData";
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../store/newsSlice';

const NewsList = (props) => {
  const { category, searchTerm } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 3;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.news.favorites);

  const isFavorite = (articleId) => {
    return favorites.some((article) => article.article_id === articleId);
  };

  const handleFavoriteToggle = (article) => {
    if (isFavorite(article.article_id)) {
      dispatch(removeFavorite(article.article_id));
    } else {
      dispatch(addFavorite(article));
    }
  };
  function trimDescription(description, maxWords) {
        const words = description.split(" ");
        if (words.length > maxWords) {
          return words.slice(0, maxWords).join(" ") + "...";
        }
        return description;
      }
    
      function trimTitle(title, maxWords) {
        const words = title.split(" ");
        if (words.length > maxWords) {
          return words.slice(0, maxWords).join(" ") + "...";
        }
        return title;
      }

      const onPageChange = (pageNumber) => setCurrentPage(pageNumber);

  const { newsData, loading, error } = useNewsData(category, searchTerm);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const totalArticles = newsData.length;
  const totalPages = Math.ceil(totalArticles / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentArticles = newsData.slice(startIndex, endIndex);

  const handleReadMore = (article) => {
    navigate(`/article/${article.article_id}`, { state: { article } });
  };

  return (
    <div news-list-container>
      <div className="card-container">
  {currentArticles?.map((article, index) => (
    <div className={`card card-${index + 1}`} key={article.article_id}>
      <div
        className="card-img"
        style={{ backgroundImage: `url(${article.image_url})` }}
      ></div>
      <a href="" className="card-link">
        <div
          className="card-img-hovered"
          style={{ backgroundImage: `var(--card-img-hovered-overlay), url(${article.image_url})` }}
        ></div>
      </a>
      <div className="card-info">
        <div className="card-about">
          <a className="card-tag tag-news">NEWS</a>
          <div className="card-time">{article.date}</div>
        </div>
        <h1 className="card-title">{trimTitle(article.title, 2)}</h1>
        <div className="card-creator">
          by <a href="">{article.author}</a>
        </div>
        <p>{trimDescription(article.description, 15)}</p>
        <button onClick={() => handleReadMore(article)} className="button">Read More</button>
        <button 
        onClick={() => handleFavoriteToggle(article)}
         title="Save" class="cursor-pointer flex items-center fill-lime-400 bg-lime-950 hover:bg-lime-900 active:border active:border-lime-400 rounded-md duration-100 p-2"
        >
          <svg viewBox="0 -0.5 25 25" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg">
    <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" d="M18.507 19.853V6.034C18.5116 5.49905 18.3034 4.98422 17.9283 4.60277C17.5532 4.22131 17.042 4.00449 16.507 4H8.50705C7.9721 4.00449 7.46085 4.22131 7.08577 4.60277C6.7107 4.98422 6.50252 5.49905 6.50705 6.034V19.853C6.45951 20.252 6.65541 20.6407 7.00441 20.8399C7.35342 21.039 7.78773 21.0099 8.10705 20.766L11.907 17.485C12.2496 17.1758 12.7705 17.1758 13.113 17.485L16.9071 20.767C17.2265 21.0111 17.6611 21.0402 18.0102 20.8407C18.3593 20.6413 18.5551 20.2522 18.507 19.853Z" clip-rule="evenodd" fill-rule="evenodd"></path>
  </svg>
  <span class="text-sm text-lime-400 font-bold pr-1">
  {isFavorite(article.article_id) ? 'Remove from Favorites' : 'Add to Favorites'}
  </span>
          
        </button>
      </div>
    </div>
  ))}
</div>


<div className="pagination-container">
      <CustomPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
      </div>
    </div>
  );
};

export default NewsList;
