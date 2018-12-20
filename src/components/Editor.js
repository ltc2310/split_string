import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Input } from 'antd';
const TextArea = Input.TextArea;

export class Editor extends React.Component {

    render(){
        const { onChange, onSubmit, submitting, value } = this.props;
        return (
            <div>
                <Form.Item>
                <TextArea rows={4} onChange={onChange} value={value} />
                </Form.Item>
                <Form.Item>
                <Button
                    htmlType="submit"
                    loading={submitting}
                    onClick={onSubmit}
                    type="primary"
                >
                    Add Comment
                </Button>
                </Form.Item>
            </div>
        );
    }
}

Editor.defaultProps = {
   onChange: () => {},
   onSubmit: () => {},
}

Editor.propTypes = {
    onChange: PropTypes.func.isRequired,
    onSubmit : PropTypes.func.isRequired,
    submitting : PropTypes.bool,
    value: PropTypes.string,
}