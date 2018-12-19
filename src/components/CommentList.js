import React from 'react';
import { Comment, List } from 'antd';

export class CommentList extends React.Component {

    render(){
        const { comments } = this.props;
        return (
            <div style={{ margin: 'auto', width: '50%' }}>
                 <List
                    dataSource={comments}
                    // header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
                    itemLayout="horizontal"
                    renderItem={props => <Comment {...props} />}
                />
            </div>
        );
    }
}