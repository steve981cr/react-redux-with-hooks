import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';
import { setArticles } from './redux';

function App() {

  const articles = useSelector((state) => state.articles)
  const dispatch = useDispatch();
  useEffect(function() {
    async function getArticles() {
      try {
        const response = await axios.get("https://www.techandstartup.com/mockapi/articles");
        dispatch(setArticles(response.data));
      } catch(error) {
        console.log('error', error);
      }
    }        
    getArticles();
  }, [dispatch]);

  if(articles.length) {
    return (
      <div className="container">
        <h4>Articles</h4>
        {articles.map(article => {
          return (
            <div key={ article.id }>
              <hr/>          
              <h4>{article.title}</h4>
              <small>id:{article.id}</small>
              <p>{article.content}</p>
            </div>
          );
        })}
      </div>
    )    
  } else { return (<div>No Articles</div>) }
}

export default App;
