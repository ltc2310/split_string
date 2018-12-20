import React from 'react';
import { connect } from 'react-redux';
import { Comment } from 'antd';
import  { Editor, CommentList }  from './components';
import { actions  } from './actions/commentAction';
import { selectors } from './reducers/commentReducer';


class App extends React.Component {
  state = {
    submitting: false,
    value: '',
  }

  handleSubmit = () => {
    const { value } = this.state;
   
    if (!value) {
      return;
    }

    this.setState({
      submitting: true,
    });

    this.props.addComment(value);

    setTimeout(() => {
      this.setState({
        submitting: false,
        value: '',
      });
    }, 1000);
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    const { submitting, value } = this.state;
    const { comments } = this.props;
    console.log(comments);

    return (
      <div>
        {comments.length > 0 && <CommentList comments={comments} />}
        <div style={{ margin: 'auto', width: '50%' }}>
          <Comment
            content={(
              <Editor
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                submitting={submitting}
                value={value}
              />
            )}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addComment: (comment) => dispatch(actions.addComment(comment)),
 })

const mapStateToProps = state => ({
  comments: selectors.getCommentList(state),
 })

 export default connect(mapStateToProps, mapDispatchToProps)(App);
