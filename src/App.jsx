import { useState } from 'react'
import './App.css'
import Post from './components/post'
import CreatePostInput from './components/createPostInput'
import ImageUpload from './components/uploadImage/imageUpload'

function App() {

  const [post, setPost] = useState([])
  const [imageUpload, setImageUpload] = useState([])
  

  const getUploadPhoto = (image,context) => {
    const newPost = {
      id: new Date().getTime().toLocaleString(),
      image:image,
      postText: context
    }
    if (context == '' || context == ' ') {
      alert('the media is empty')
    }
    else {
      setImageUpload([...imageUpload,newPost])
    }
  }

  const getValue = (context,image) => {
    const newPost = {
      id: new Date().getTime().toLocaleString(),
      postText: context,
      image:image
    }
    if (context == '' || context == ' ') {
      alert('the post is empty')
    }
    else {
      setPost([...post,newPost])
    }
  }

  const handleDeleteValue = (postDelet) => {
    if ( confirm('are you sure?') == true) {
       setPost(()=> post.filter((post)=> post.id !== postDelet))
    }
    else {
      return
   }   
  }

  const handleEditValue = (val, context) => {
    setPost(post.map((item) => {
      if (item.id === val) {
        return {id:val, postText:context}
      }
      return item
    }))
  }

  return (

    <div className='h-screen w-full bg-slate-400 flex items-center flex-col gap-2 '>
      <CreatePostInput getValue={getValue} getUploadPhoto={getUploadPhoto} />
      <div className="h-[85%] w-[30%] bg-stone-50 rounded-md overflow-hidden">
        <div className='h-full w-full  flex flex-col gap-y-2 p-2 overflow-y-auto'>
          <Post post={post} handleDeleteValue={handleDeleteValue} handleEditValue={handleEditValue} />
          <ImageUpload imageUpload={imageUpload} />
        </div>
      </div>
    </div>
  )
}

export default App
