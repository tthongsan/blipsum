import React from 'react';
import './Post.css';

 const Post = (props) => {
  return (
    <div className="container">
    {props.fourPosts.map(post => {
      return <div className="main-posts" key={post.id}>
        <img src={post.post.urlToImage} alt="pic"/>
        <h3><a href={post.post.url} target="_blank">{post.post.source.name}</a></h3>
        <p>{post.post.title}</p>
      </div>
    })}
    </div>
  )
}

export default Post;

