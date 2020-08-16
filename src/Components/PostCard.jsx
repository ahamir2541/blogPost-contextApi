import React from 'react';
import { Link } from 'react-router-dom'

const PostCard = ({blogpost}) => {

    return (
        <div className="postcard">
            <img className="img-fluid" src={blogpost.image} alt="" />
            <div className="postContent">
                <h4>  </h4>
                <div>
                    <Link to={`/${blogpost.id}`} >
                    <span> {blogpost.title} </span>
                    </Link> <br />
                    <span> {blogpost.date} </span>
                </div>
            </div>
        </div>
    );
};

export default PostCard;