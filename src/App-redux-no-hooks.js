import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { setArticles } from './redux';

class App extends Component {

  async componentDidMount() {
    try {
      const response = await axios.get('https://www.techandstartup.com/mockapi/articles')
      this.props.setArticles(response.data);
    }
    catch(error) {
      console.log('error', error);
    }
  }
  render() {
    if(this.props.articles.length) {
      return (
        <div className="container">
          <h4>Articles</h4>
          {this.props.articles.map(article => {
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
    } else {
      return (<div>No Articles</div>)
    }
  }
}

const mapStateToProps = (state) => ({ articles: state.articles });
// const mapStateToProps = (state) => {
//   console.log("1a.mapStateToProps:state", state);
//   return {
//     articles: state.articles
//   };
// };
const mapDispatchToProps = { setArticles };
// const mapDispatchToProps = (dispatch) => {
//   return { 
//     setArticles: (articles) => { dispatch(setArticles(articles)) }
//   };
// }; 

export default connect(mapStateToProps, mapDispatchToProps)(App);