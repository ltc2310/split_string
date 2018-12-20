import React from 'react';
import PropTypes from 'prop-types';
import { Comment, List } from 'antd';

export class CommentList extends React.Component {

    render(){
        const { comments } = this.props;
        return (
            <div style={{ margin: 'auto', width: '50%' }}>
                 <List
                    dataSource={comments}
                    itemLayout="horizontal"
                    renderItem={comment => <Comment content={comment} />}
                />
            </div>
        );
    }
}

CommentList.defaultProps = {
    comments: [],
}

CommentList.propTypes = {
    comments: PropTypes.array.isRequired,
}