import React, { useState, useEffect } from 'react';
import ArticleCard from '../ArticleCard/ArticleCard';
import logo from '../logo.svg';
import './App.css';

const apiKey = '3ae61153f7514b2a985970f0106c2869';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [articles, setArticles] = useState([]);

  const fetchArticles = () => {
    if (!searchTerm) {
      alert("Make sure to include a search term otherwise I don't know what to look up :(");
      return;
    }

    fetch(`https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${apiKey}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setArticles(data.articles);
      })
      .catch((error) => {
        console.error('Error fetching articles:', error);
      });
  };

  const handleSearchClick = () => {
    fetchArticles();
  };

  return (
    <div className="App">
      <header className="App-header">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearchClick}>Search</button>
      </header>
      <div className="card-container">
        {articles.map((article, index) => (
          <ArticleCard key={index} article={article} />
        ))}
      </div>
    </div>
  );
}

export default App;