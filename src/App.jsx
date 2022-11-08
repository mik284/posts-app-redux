import React from 'react'
import AddPostForm from './components/AddPostForm'
import Header from './components/Header'
import PostsList from './components/PostsList'

const App = () => {
  return (
    <div className='bg-[#f0f0f0] min-h-screen'>
      <Header />

      <AddPostForm />

      <PostsList />
    </div>
  )
}

export default App