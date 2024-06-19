import React from 'react';
import { useLocation } from 'react-router-dom';

const ArticleDetail = () => {

  const location = useLocation();
  const { article } = location.state || {};

  if (!article) {
    return <div>Article not found</div>;
  }

  
  const containerStyle = {
    position: 'relative',
    width: '100%',
    maxWidth: '1000px',
    margin: '0 auto',
  };

  const imgStyle = {
    width: '100%',
    height: '84vh',
    opacity: 0.75,
  };

  const centerStyle = {
    position: 'absolute',
    top: '14%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'black',
    textAlign: 'center',
    fontSize: '2rem',
    fontWeight: 'bolder',
    width: '100%',
  };
  // const descriptionStyle = {
  //   position: 'absolute',
  //   top: '70%',
  //   left: '50%',
  //   transform: 'translate(-50%, -50%)',
  //   color: 'black',
  //   textAlign: 'center',
  //   fontSize: '2rem',
  //   fontWeight: 'bolder',
  //   width: '100%',
  // };

  const contentStyle = {
    padding: '1rem',
  };

  return (
    <>
      <div style={containerStyle}>
        <img src={article.image_url} alt={article.title} style={imgStyle} />
        <div style={centerStyle}>{article.title}</div>
      </div>
      <p className='text-center'>{article.description}</p>
      <div className='text-center'>
      <a className='fancy' href={article.link}>
      <span class="top-key"></span>
      <span class="text">View Website</span>
  <span class="bottom-key-1"></span>
  <span class="bottom-key-2"></span>
        </a>
      </div>
      </>
  );
};

export default ArticleDetail;
