import React from 'react'
import AddPost from '../features/addpost/AddPost'
import PostList from '../features/postList/PostList'
import './home.css'
const Home = () => {
  return (
    <div>
        <AddPost />
        <PostList />
    </div>
  )
}

export default Home