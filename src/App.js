
import React from 'react';
import { connect } from 'react-redux';
import { Comment, Avatar } from 'antd';

import  { Editor, CommentList }  from './components'


class App extends React.Component {
  state = {
    comments: [],
    submitting: false,
    value: '',
  }

  handleSubmit = () => {
    if (!this.state.value) {
      return;
    }

    this.setState({
      submitting: true,
    });

    setTimeout(() => {
      this.setState({
        submitting: false,
        value: '',
        comments: [
          ...this.state.comments,
          {
            author: 'Le Thanh Cong',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: <p>{this.state.value}</p>,
            // datetime: moment().fromNow(),
          }
        ],
      });
    }, 1000);
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    const { comments, submitting, value } = this.state;

    return (
      <div>
        {comments.length > 0 && <CommentList comments={comments} />}
        <div style={{ margin: 'auto', width: '50%' }}>
          <Comment
            avatar={(
              <Avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt="Le Thanh Cong"
              />
            )}
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
 
 })

const mapStateToProps = state => ({

 })

 export default connect(mapStateToProps, mapDispatchToProps)(App);
