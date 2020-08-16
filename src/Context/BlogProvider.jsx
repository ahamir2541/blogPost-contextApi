import React, {useReducer} from 'react';
import BlogContext from './BlogContext';
import blogReducer from './BlogReducer';

const BlogProvider = ({children}) => {
    // initialState
    const initialState = {
        blogPosts : [],
        currentBlogPosts : null,
        loading : true,
    }

    const [state, disptach] = useReducer(blogReducer, initialState)

    //actions
    const getPosts = async () => {
        try {
            disptach({ type : 'SENDING_REQUEST' })
            const res = await fetch('/posts')
            const data = await res.json();
            disptach({ type : 'REQUEST_FINISHED' })
            disptach({ type : 'SET_POSTS', payload : data })
        } catch(err) {
            console.log(err)
        }
    }
    
    const getPostById = async id => {
        try {
            disptach({ type : 'SENDING_REQUEST' })
            const res = await fetch(`/posts/${id}`)
            const data = await res.json();
            disptach({ type : 'REQUEST_FINISHED' })
            disptach({ type : 'SET_POST', payload : data })
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <BlogContext.Provider value={{
            blogPosts : state.blogPosts,
            currentBlogPosts : state.currentBlogPosts,
            loading : state.loading,
            getPosts,
            getPostById,
        }} >
            {children}
        </BlogContext.Provider>
    )
}

export default BlogProvider





