import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
//import axios from 'axios';
import axios from '../../axios';
class Blog extends Component {

    state = {
        posts: [],
        selectedId: null,
        error: false,
    }
    componentDidMount() {
        axios.get("/posts")
        .then( res => {
           const posts =  res.data.slice(0,4);
           const updatedPosts = posts.map ( post => {
               return {...post, author: "Shubham"}
           })

            this.setState({
                posts: updatedPosts,
            })
        })
        .catch( err => {
            this.setState({
                error: true
            })
        });
    }

    postSelectedHandler = (id) => {
            this.setState({
                selectedId: id
            })
    }

    render () {
        let posts = <p>Something went wrong!!!</p>
        if(!this.state.error){ 
            posts = this.state.posts.map( post => {
            return <Post 
                    title ={post.title} 
                    auther = {post.author} 
                    key = {post.id}
                    clicked = {() => this.postSelectedHandler(post.id)}/>
        })
    }
        return (
            <div>
                <section className="Posts">
                   {posts}
                </section>
                <section>
                    <FullPost 
                    id={this.state.selectedId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;