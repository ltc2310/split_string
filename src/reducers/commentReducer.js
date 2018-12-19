import { types  } from '../actions/commentAction';

const defaultState = {
  comments : [],
}; 

const addComment = (commentList, payload ) => {

  const newCommentList = [];
  
  return newCommentList;
}


const commentReducer = (state = defaultState, action) => {
    switch (action.type) {
     case types.ADD_COMMENT:
        return {...state, comments : addComment(state.comments, action.payload) }
     default:
      return state
    }
  }

  const selectors  = {
    getCommentList :state => state
  };

export default commentReducer;
export { selectors };
