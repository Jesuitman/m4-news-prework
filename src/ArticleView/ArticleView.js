import React from 'react';
import './ArticleView.css'; // Import the associated CSS file

const ArticleView = ({ article, onClose }) => {
  const { title, description, url, urlToImage, publishedAt, content, source } = article;

  return (
    <div className="article-view-overlay">
      <div className="article-view-modal">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <h2>{title}</h2>
        <img src={urlToImage} alt={title} />
        <p>{description}</p>
        <p>Published At: {publishedAt}</p>
        <p>
          Source: <a href={source.url} target="_blank" rel="noopener noreferrer">{source.name}</a>
        </p>
        <p>{content}</p>
        <a href={url} target="_blank" rel="noopener noreferrer">
          Read more
        </a>
      </div>
    </div>
  );
};

export default ArticleView;