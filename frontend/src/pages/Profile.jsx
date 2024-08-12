import React from 'react'
import { useContext,useEffect,useState } from 'react'
import Navbar from '../componets/Navbar'
import ProfilePosts from '../componets/ProfilePosts'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Loader from '../componets/Loader'
import { useNavigate } from 'react-router-dom'
const Profile = () => {
    const navigate=useNavigate()
  const userId=useParams()
  const [myPosts,setMyPosts]=useState([])
  const [loader,setLoader]=useState(false)
  const [username,setUsername]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [file,setFile]=useState()
  const [userIdx,setUserIdx]=useState("")
  const [updated,setUpdated]=useState(false)
  const [confirmDelete,setConfirmDelete]=useState(false)

  const handleDelete=()=>{
    setConfirmDelete(true)
  }
  const cancelDelete=()=>{
    setConfirmDelete(false)
  }
  const handleUpdate=()=>{
   
    console.log("ok")
  }
  return (
    <div>
    <Navbar/>
    {confirmDelete?<div className='h-screen flex justify-center items-center '>
      <div className='flex flex-col px-20 py-10 md:px-40 md:py-20 border-2 border-solid border-gray-500'>
      <h3 className='text-lg font-bold'>Are you sure?</h3>
      <div className='flex justify-center items-center space-x-4'>
        <button onClick={doDelete} className='bg-black px-4 py-2 text-white'>Yes</button>
        <button onClick={cancelDelete} className='bg-white px-4 py-2 text-black border-2 border-solid border-gray-500'>No</button>
      </div>
      </div>
    </div>:
    <div className=' px-6 md:px-[200px] mt-8 flex md:flex-row flex-col-reverse'>
    <div className='flex flex-col md:w-[70%]'>
    <h1 className='text-xl font-bold mt-16 md:mt-0 '>Your Posts:</h1>
    {!loader?myPosts.map((post)=>(
      <>
      <Link to={user?`/posts/post/${post._id}`:"/login"}>
      <ProfilePosts key={post._id} post={post} />
      </Link>
      </>
      
    )) : 
      <div className='h-screen flex justify-center items-center'>
      <Loader/>
      </div>
    }
    </div>

    <div className='flex flex-col space-y-4 md:w-[30%] md:mb-16 md:items-end'>
    <div className='flex flex-col'>
    <h1 className='font-bold text-2xl mb-6'>Your Profile:</h1>
    <img src="" alt="" className='h-[200px] w-[200px] bg-gray-600 rounded-lg mb-4'/>
    <div className='flex flex-col w-full space-y-4'>
    <input onChange={(e)=>setFile(e.target.files[0])} type="file" placeholder='upload image'/>
    <input onChange={(e)=>setUsername(e.target.value)} value={username} className='outline-none px-4 py-2 text-gray-500' type='text' placeholder="UserName"/>
    <input onChange={(e)=>setEmail(e.target.value)} value={email} className='outline-none px-4 py-2 text-gray-500' type='text' placeholder="email"/>
    <input onChange={(e)=>setPassword(e.target.value)}  type="password" value={password} className='text-gray-500 outline-none px-4 py-2' placeholder="password"/>
    </div>
    <div className='flex  items-center space-x-4 mt-8'>
      <button onClick={handleUpdate} className='text-white font-semibold bg-black px-4 py-2 hover:text-black hover:bg-gray-400'>Update details</button>
      <button className='text-white font-semibold bg-black px-4 py-2 hover:text-black hover:bg-gray-400' onClick={handleDelete}>Delete Profile</button>
      <div>{updated?<div className='text-md font-bold text-green-500'>Details updated successfully</div>:""}</div>
    </div>
    </div>
    
    </div>

    </div>}
    
  </div>
  )
}

export default Profile
