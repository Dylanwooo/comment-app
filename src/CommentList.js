/**
 * Created by Dylanwoo on 2017/7/25.
 */

import React, { Component } from 'react'
import Comment from './Comment'

class CommentList extends Component{

    render(){
        return(
            <div>
                {this.props.comments.map((comment, i) =>
                    <Comment comment={comment} key={i} />
                )}
            </div>
        )
    }
}
CommentList.defaultProps = {
    comments: []
};
export default CommentList