import React, { useContext, useEffect } from 'react';
import PostCard from './PostCard'
import BlogContext from '../Context/BlogContext'

const PostList = () => {
    const { blogPosts, getPosts, loading } = useContext(BlogContext)

    useEffect(() => {
        getPosts()
    }, [])

    return (
        <div className="container mb-5">
            <h2>Posts</h2>
            <div className="row">
                {blogPosts.map(item => (
                    <div key={item.id} className="col-lg-4 mt-2 col-md-6">
                        <PostCard blogpost={item}  />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PostList;