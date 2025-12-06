import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import avatar from '../assets/Avatarsdash.png'
import { useSelector } from 'react-redux'



const PostDetailsCard = () => {
   const {id} =  useParams()
   const [post, setPost] = useState([])
   const [comment, setComment] = useState([])
   const [newComment, setNewComment] = useState({})
   const firstName = useSelector((state)=> state.userDetails.firstName)
    const lastName = useSelector((state)=> state.userDetails.lastName)
    const [loading, setLoading] = useState(false)


    useEffect(()=>{
        
        const token = localStorage.getItem('token')
    
        const fetchData = async () => {
            setLoading(true)
            try {
                // https://teekvillebackend.onrender.com
                // http://localhost:3000
               
                const response = await fetch(`https://teekvillebackend.onrender.com/api/post/${id}`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
                })
                const res = await response.json()
                console.log('Res: ',res)
                


                setComment(res.comments)
                setPost(res)
                console.log('Comment: ',comment)
                setLoading(false)
                return res
                


            }catch(error){
                console.log(error)
            }
        
        }
        fetchData()

   

        
    
},[])

const handleChange = (e) =>{
        setNewComment({
        ...newComment, 
        [e.target.name]: e.target.value
        })
    }

 const handleAddComment =  async() =>{
    try {

    

    const requestBody = {
        userName : `${firstName}`,
        commentBody: newComment.comment 
    }

    const token = localStorage.getItem('token')
    const res = await fetch(`https://teekvillebackend.onrender.com/api/comments/${id}`,{
        method: "POST",
        headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
        body: JSON.stringify(requestBody)
    })

    const response = await res.json()
    setComment((prev)=>[...prev, response])
    setNewComment({});
    console.log("comment: ",comment)
}
    
    catch(e){
        console.log("Error: ", e)
    }

    }
    
  return (
    
    <section className='bg-white py-5 rounded-2xl px-7'>
        {loading ? <h1>Loading Post...</h1>:
        <div>
        <div className='mb-2'>
            <div className=' flex flex-row gap-1.5 items-center'>
                <img src={avatar} alt=""  className='w-10 h-10'/>
                <div>
                    <h1 className='font-OxygenBold'>{post.userId?.firstName} {post.userId?.lastName}</h1>
                    <h1 className='text-[#435270]'>@{post.userId?.lastName}</h1>
                </div>
            </div>

            <h1 className='font-Oxygen text-[16px]'>{post.body}</h1>
        </div>
        <div>
            <input type="text"  placeholder='add a comment' value={newComment.comment || ""} className='bg-[#C4C4C433] w-full border-[1px] border-[#FFFFFF] rounded-[5px] py-3.5 px-4 mb-3 ' name='comment' onChange={handleChange}/>
            <button className='bg-[#1E5296] text-white p-2 rounded-xl' onClick={handleAddComment}>Post</button>
            {
                comment.map((comment, index) => (
              <div key={index} className='py-2'>
                
                <div className='flex flex-row gap-3 border-b-[1px] border-b-[#E5E5E5] '>
                    <h1>{comment.userName}</h1>
                    <h1 className='text-[#435270]'>@{comment.userName}</h1>
                    <h1 className='text-[#828CA9]'>{new Date(comment.time).toLocaleString()}</h1>
                </div>
                <p>{comment.commentBody}</p>
                
            
                {index < comment.length - 1 && <hr />}
              </div>
            ))
            }

        </div>
        
          
        </div>}
    </section>
  )
}

export default PostDetailsCard