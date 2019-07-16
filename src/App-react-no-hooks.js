import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { articles: [], };
  }

  async componentDidMount() {
    try {
      const response = await axios.get('https://www.techandstartup.com/mockapi/articles')
      this.setState({articles: response.data});
    }
    catch(error) {
      console.log('error', error);
    }
  }

  render() {
    return (
      <div className="container">
        <h2>Articles</h2>
        {this.state.articles.map(article => {
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
}

export default App;
