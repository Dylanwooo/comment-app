/**
 * Created by Dylanwoo on 2017/7/25.
 */

import React, { Component } from 'react'
import Comment from './Comment'
import {PropTypes} from 'react'

class CommentList extends Component{
    static propTypes = {
        comments: PropTypes.array,
        onDeleteComment: PropTypes.func
    }

    handleDeleteComment(index){
        if(this.props.onDeleteComment){
            this.props.onDeleteComment(index)
        }
    }
    render(){
        return(
            <div>
                {this.props.comments.map((comment, i) =>
                    <Comment
                        comment={comment}
                        key={i}
                        index={i}
                        onDeleteComment={this.handleDeleteComment.bind(this)} />
                )}
            </div>
        )
    }
}
CommentList.defaultProps = {
    comments: []
};
export default CommentList