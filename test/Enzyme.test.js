/**
 * Created by Dylanwoo on 2017/9/15.
 */
import React from 'react';
import {expect} from 'chai';
import CommentList from '../src/components/CommentList';
import Comment from '../src/components/Comment';
import {shallow,mount} from 'Enzyme';

describe("Testing all the component using Enzyme",()=>{
    const testData = [
        {
            "username": "Dylanwoo",
            "comment": "hello world!",
            "time": "30秒"
        },
        {
            "username": "Mike",
            "comment": "goodbye world",
            "time": "40秒"
        },
        {
            "username": "Ben",
            "comment": "i love react",
            "time": "50秒"
        }
    ];
    it('test CommentList component using Enzyme',()=>{
        let list = shallow(<CommentList items={testData}/>);
        expect(list.find(CommentList.length).to.equal(testData.length));
    });
    it('test Comment component using Enzyme',()=>{
        let Comment = shallow(<Comment item={testData[0]} />);
        expect(Comment.find('.comment-user').text()).to.equal(testData[0].username);
        expect(Comment.hasClass('comment-username')).to.be.true;
    });

    it('test delete comment',()=>{
        let app = mount(<Comment />);
        app.find('.comment-delete').simulate('click');
        expect(app.find('.comment-createdtime').length).to.equal(0);
    })
});