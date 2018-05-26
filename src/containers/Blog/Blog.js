import React, { Component } from 'react';
import Posts from '../Blog/Posts/Posts';
//import NewPost from '../../containers/Blog/NewPost/NewPost';
import './Blog.css';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'
import asyncComponent from '../../hoc/asyncComponent';
//import axios from 'axios';
const AsyncNewPost = asyncComponent(() => {
    return import('../../containers/Blog/NewPost/NewPost');
});
class Blog extends Component {

    render () {
        return (
            <div className="Blog">
                <header >
                    <nav>
                        <ul>
                            <li><NavLink to="/posts" exact>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname:"/new-post",
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
        {/*<Route path="/" render={() => <h1>hello shubham</h1>} /> */}
        <Switch>
            <Route path="/new-post" exact component={AsyncNewPost} />
            <Route path="/posts" component= {Posts} />
                        {/* <Route path="/" component= {Posts} />*/}
            <Redirect from="/" to= "/posts" />
        </Switch>
            </div>
        );
    }
}

export default Blog;