import React, {Component} from 'react';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import './Posts.css';
import {Route} from 'react-router-dom';
import FullPost from '../FullPost/FullPost';
class Posts extends Component {

    state = {
        posts: [],
    }

    postSelectedHandler = (id) => {
        //this.props.history.push("/posts/"+ id);
        this.props.history.push({pathname: "/posts/" + id});
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
           console.log(err);
        });
    }

    render() {
        let posts = <p>Something went wrong!!!</p>
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                 //   <Link to={"/posts/" + post.id} key={post.id}>
                    <Post
                        key={post.id}
                        title={post.title}
                        auther={post.author}
                        clicked={() => this.postSelectedHandler(post.id)} />
                   // </Link>
                )
            });
        }
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>    
                <Route path={this.props.match.url+'/:id'} exact component={FullPost} />
            </div>
        );
        
    }
}

export default Posts;