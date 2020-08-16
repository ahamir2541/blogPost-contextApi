import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom'
import BlogContext from '../Context/BlogContext'

const Post = () => {
    const { getPostById, currentBlogPosts } = useContext(BlogContext)

    let { postId } = useParams()

    useEffect(() => {
        getPostById(postId)
    }, [])

    return (
        <div className="post">
            {currentBlogPosts ? (
                <div>
                    <div className="post_image" style={{
                        width : '100%',
                        height : '300px',
                        backgroundImage : `url('${currentBlogPosts.image}')`
                    }}></div>
                    <div className="post_content">
                        <h2> {currentBlogPosts.title} </h2>
                        <p> {currentBlogPosts.content} </p>
                    </div>
                </div>
            ) : (
                    <div>Loading...</div>
                )}
        </div>
    );
};

export default Post;