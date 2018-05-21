import React, { Component } from 'react';
import Posts from '../Blog/Posts/Posts';
import NewPost from '../../containers/Blog/NewPost/NewPost';
import './Blog.css';
import { Route, NavLink } from 'react-router-dom'
//import axios from 'axios';
class Blog extends Component {

    render () {
        return (
            <div className="Blog">
                <header >
                    <nav>
                        <ul>
                            <li><NavLink to="/" exact>Home</NavLink></li>
                            <li><NavLink to={{
                                pathname:"/new-post",
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
        {/*<Route path="/" render={() => <h1>hello shubham</h1>} /> */}
        <Route path="/" exact component= {Posts} />
        <Route path="/new-post" exact component={NewPost} />
            </div>
        );
    }
}

export default Blog;