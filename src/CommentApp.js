/**
 * Created by Dylanwoo on 2017/7/25.
 */

import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component{
    constructor(){
        super();
        this.state = {
            comments:[]
        }
    }
   /*componentWillMount(){
        this._loadComments()
    }

    _loadComments(){
        let comments = localStorage.getItem('comments');
        if(comments){
            comments=JSON.parse(comments);
            this.setState({comments})
        }
    }*/
    handleDeleteComment(index){
        const comments = this.state.comments;
        comments.splice(index,1);
        this.setState({comments});
    }
    handleSubmitComment (comment) {
        if(!comment) return;
        if(!comment.username) return alert('请输入用户名');
        if(!comment.content) return alert('请输入评论');
        this.state.comments.push(comment);
        this.setState({
            comments:this.state.comments
        })
    }
    render() {
        return (
            <div className="wrapper">
                <CommentInput
                    onSubmit={this.handleSubmitComment.bind(this)}
                />
                <CommentList comments={this.state.comments}
                onDeleteComment={this.handleDeleteComment.bind(this)}/>
            </div>
        )
    }
}

export default CommentApp