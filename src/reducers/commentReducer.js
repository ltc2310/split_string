import { types  } from '../actions/commentAction';
import { splitMessage } from '../utils/splitMessage';

const defaultState = {
  comments : []
}; 

const addComment = (commentList, comment ) => {
  try{
    const commentSplited = splitMessage(comment);
    commentSplited.forEach((comment) => {
      commentList.push(comment);
    });
    return commentList;
  }catch(e){
    alert(e);
    return commentList;
  }  
}


const commentReducer = (state = defaultState, action) => {
    switch (action.type) {
     case types.ADD_COMMENT:
        return {...state, comments : addComment(state.comments, action.comment) }
     default:
      return state
    }
  }

  const selectors  = {
    getCommentList :state => state.comment.comments
  };

export default commentReducer;
export { selectors };
