import { combineReducers } from 'redux';

// ACTIONS
const SET_ARTICLES = 'SET_ARTICLES';

export function setArticles(articles) {
  return {
    type: SET_ARTICLES,
    articles: articles,
  };
} 
// REDUCERS
const initialState = { articles: [] }
function articlesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ARTICLES:
      return action.articles;
    default:
      return state;
  }
}

export default combineReducers({
  articles: articlesReducer,
});