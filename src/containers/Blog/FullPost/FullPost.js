import React, { Component } from 'react';

import './FullPost.css';
import axios from'axios';

class FullPost extends Component {
    state = {
        loadPost: null
    }
    componentDidMount() {
        this.loadData();
    };

    componentDidUpdate() {
        this.loadData();
    };

    loadData() {
        if(this.props.match.params.id) {
            if(!this.state.loadPost || (this.state.loadPost && this.state.loadPost.id !== + this.props.match.params.id)) {
                debugger;
                axios.get('/posts/' + this.props.match.params.id )
                .then(response => {
                    console.log("response", response);
                  this.setState({loadPost : response.data });
                })
            }
            
        }
    }

    deletePostHandler = () => {
        axios.delete('/posts/' + this.props.match.params.id)
        .then(response => {
            console.log(response)
        })
    }
    render () {
        let post = <p style={{ textAlign : 'center'}}>Please select a Post!</p>;
        if(this.props.match.params.id) {
            post = <p style={{ textAlign : 'center'}}>loading</p>;
        }
        if(this.state.loadPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadPost.title}</h1>
                    <p>{this.state.loadPost.content}</p>
                    <div className="Edit">
                        <button onClick={this.deletePostHandler} className="Delete">Delete</button>
                    </div>
                </div>
    
            );
        }
        return post;
    }
}

export default FullPost;