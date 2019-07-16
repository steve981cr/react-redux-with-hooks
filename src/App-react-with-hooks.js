import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [articles, setArticles] = useState([])

  useEffect(function() {
    async function getArticles() {
      try {
        const response = await axios.get("https://www.techandstartup.com/mockapi/articles");
        setArticles(response.data);
      } catch(error) {
        console.log('error', error);
      }
    }        
    getArticles();
  }, []);

  return (
    <div className="container">
      <h2>Articles</h2>
      {articles.map(article => {
        return (
          <div key={ article.id }>
            <hr/>          
            <h4>{article.title}</h4>
            <p>{article.content}</p>
          </div>
        );
      })}
    </div>
  )    
}

export default App;
