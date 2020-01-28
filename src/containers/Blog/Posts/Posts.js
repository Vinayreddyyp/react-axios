import React, { Component } from 'react';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import './Posts.css'
import FullPost from '../FullPost/FullPost';
import { Route } from 'react-router-dom';

class Posts extends Component {
    state = {
        posts : [],
    }

    componentDidMount() {
        console.log("props", this.props);
        axios.get('/posts')
        .then(response => {
            let posts = response.data.slice(0,4);
            let updatedPosts = posts.map(post => {
                return {
                    ...post,
                    author: 'Max'
                }
            })
            this.setState({posts: updatedPosts});
            console.log("resposne", response);
        })
        .catch(error => {
            console.log("error")
            //this.setState({error: true});
        })
   }
  
    postSelectHandler = (id) => {
        console.log("id", id);
        this.props.history.push({pathname: '/posts/' + id});
    }

   render() {
    let posts = <p style={{textAlign: 'center'}}>something went wromg</p>
        if(!this.state.error) {
            posts = this.state.posts.map(post => {
                return ( <Post
                        key={post.id} 
                        title = {post.title}
                        author = {post.author}
                        clicked = {() => this.postSelectHandler(post.id)}/>
                )
            });
        }
       return (
           <div>
            <section className="Posts">
              {posts}
            </section>
            <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
           </div>
        )
   }
}
export default Posts;