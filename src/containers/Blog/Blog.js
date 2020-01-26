import React, { Component } from 'react';
//import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {
  
    render () {
        
        return (
            <div className="Blogs">
                <header>
                    <nav>
                        <ul>
                            <li><Link to= '/'>HOME</Link></li>
                            <li><Link to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>NewPost</Link></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path='/' exact render={() => <h1>Home</h1>} /> */}
                <Route path='/' exact component={Posts} />
                <Route path='/new-post' exact component = {NewPost} />
            </div>
        );
    }
}

export default Blog;