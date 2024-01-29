import React, { useState } from 'react';
import ArticleView from '../ArticleView/ArticleView';
import './ArticleCard.css'; 

const ArticleCard = ({ article }) => {
  const [showArticleView, setShowArticleView] = useState(false);

  const handleClick = () => {
    setShowArticleView(true);
  };

  const handleClose = () => {
    setShowArticleView(false);
  };

  const { title, description, urlToImage, publishedAt } = article;

  return (
    <div className="card">
      <img src={urlToImage} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Published At: {publishedAt}</p>
      <button onClick={handleClick}>See More</button>

      {showArticleView && <ArticleView article={article} onClose={handleClose} />}
    </div>
  );
};

export default ArticleCard;