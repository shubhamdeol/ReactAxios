import React, {Component} from 'react';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import './Posts.css';

class Posts extends Component {

    state = {
        posts: [],
    }

    postSelectedHandler = (id) => {
        this.setState({
            selectedId: id
        })
    }


    componentDidMount() {
        console.log(this.props);
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
           console.log(err);
        });
    }

    render() {
        let posts = <p>Something went wrong!!!</p>
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return <Post
                    title={post.title}
                    auther={post.author}
                    key={post.id}
                    clicked={() => this.postSelectedHandler(post.id)} />
            });
        }
        return (
            <section className = "Posts">
                {posts}
            </section>
        );
        
    }
}

export default Posts;