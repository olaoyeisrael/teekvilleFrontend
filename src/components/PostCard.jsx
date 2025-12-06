import React, { useEffect, useState } from 'react'


import avatar from '../assets/Avatarsdash.png'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'



//   const data = [
//   {
//     username: 'Matthew',
//     text: 'The fundamental flaws of existing launchpads is that acquiring enough tokens to act in the ecosystem is prohibitive, and even if you do stake the tokens, you are guaranteed an allocation spot...',
//     time: '16:15',
//     tags: ["Education", "Health"]
//   },
//   {
//     username: 'Matthew1',
//     text: 'The fundamental flaws of existing launchpads is that acquiring enough tokens to act in the ecosystem is prohibitive, and even if you do stake the tokens, you are guaranteed an allocation spot...',
//     time: '16:15',
   
//   },
//   {
//     username: 'Matthew2',
//     text: 'The fundamental flaws of existing launchpads is that acquiring enough tokens to act in the ecosystem is prohibitive, and even if you do stake the tokens, you are guaranteed an allocation spot...',
//     time: '16:15'
//   }
// ]

// const comments = [
//     {
//         "_id": "691ab5bea37d90b36c9ed2b3",
//         "postId": "68ffc5b1c8f5390085026481",
//         "userName": "davesanta",
//         "commentBody": "Backend Comment Update",
//         "time": "2025-11-17T05:42:22.809Z",
//         "createdAt": "2025-11-17T05:42:22.812Z",
//         "updatedAt": "2025-11-17T05:42:22.812Z",
//         "__v": 0
//     },
//     {
//         "_id": "691abc248118bb0d8ec762e4",
//         "postId": "68ffc5b1c8f5390085026481",
//         "userName": "davesanta",
//         "commentBody": "Backend Comment Update",
//         "time": "2025-11-17T06:09:40.112Z",
//         "createdAt": "2025-11-17T06:09:40.116Z",
//         "updatedAt": "2025-11-17T06:09:40.116Z",
//         "__v": 0
//     },
//     {
//         "_id": "691ac18810fddc1ef0832bd6",
//         "postId": "68ffc5e4c8f5390085026487",
//         "userName": "davesanta",
//         "commentBody": "Backend Comment Update2",
//         "time": "2025-11-17T06:32:40.550Z",
//         "createdAt": "2025-11-17T06:32:40.555Z",
//         "updatedAt": "2025-11-17T06:32:40.555Z",
//         "__v": 0
//     }
// ]
 






const PostCard = () => {
  const [readMore , setReadMore] = useState(null)
  const [loading, setLoading] = useState(false)
  const [postdata, setPostData] = useState([])
  const [comment, setComment] = useState({})
  const [newComment, setNewComment] = useState({})
  const firstName = useSelector((state)=> state.userDetails.firstName)

  
  const handleshow =(index)=>{
    if (readMore === index){
      setReadMore(null)
    }
    else{
      setReadMore(index)
    }
   
  }
  console.log(postdata)
  const handleChange = (e) =>{
        setNewComment({
        ...newComment, 
        [e.target.name]: e.target.value
        })
    }
  

 useEffect(() => {
    const token = localStorage.getItem('token')
    
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await fetch('https://teekvillebackend.onrender.com/api/post', {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        })
        const result = await response.json()
        
        if (result.success === true) {
          const formattedPosts = result.posts.map(post => {
            const date = new Date(post.time)
            const formattedTime = date.toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })
            return {
              ...post,
              formattedTime
            }
          })
          
          setPostData(formattedPosts)
          const postComments = result.posts.reduce((acc, post) => {
            acc[post._id] = post.comments;  
            return acc;
          }, {});

          setComment(postComments)
          setLoading(false)
        }
      } catch (e) {
        console.log('Error: ', e)
      }
    }
    
    fetchData()
  }, [])

  const handleClick = () =>{
    
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
    <section>

    { loading ? (<h1 className='text-center text-4xl mt-2 font-Oxygen'>Fetching Posts...</h1>) :  


    (<div className='block'>
    {postdata.map((item, index)=>{
      return(


      (<div className='bg-white py-4 md:py-6 md:px-[27px] rounded-[15px] my-3 ' key={index} >
        
            <div className='w-[626x]'>
              <div>
                <div className='flex flex-row gap-[5px] items-center'>
                  <img src={avatar} alt=""  className='w-10 h-10'/>
                  <div>
                    <h1 className='font-OxygenBold text-[15px]'>{item.userId.lastName} {item.userId.firstName}</h1>
                    <h2 className='font-Oxygen text-[13px]'>@{item.userId.lastName.toLowerCase()}</h2>
                  </div>
                </div>
                <div></div>
              </div>
              <p className='font-Oxygen text-[16px]/[136%] mt-2'>{readMore === index ? item.body : item.body.substring(0,100)} {item.body.length > 100 && ( <span onClick={()=>handleshow(index)} className='text-[#1E5296]'>{!(readMore === index) ? 'Read More': 'Show Less'}</span> )}</p>
            </div>
           
            <div className='mt-[2px]'>
              <div className='flex flex-row'>
                <h1 className='text-[#D42620] font-Oxygen text-sm'>Tags: {item.tags?.join(' ')}</h1>
                <h1 className='ml-3.5 text-[#130D3AB2] font-Oxygen text-sm'>{item.time}</h1>
                
              </div>
    
              <div></div>

              {/* Add Comment */}
              <NavLink to={`/postDetails/${item._id}`}>
    
              <div className='border-[0.5px] border-[#595575] rounded-[5px] mt-2.5'>
                <input type="text" placeholder='add comment' value={newComment.comment || ""} className='py-3 px-2.5 w-full' name='comment' onChange={handleChange}/>
              </div>
              {/* <button className='bg-[#1E5296] text-white p-2 rounded-xl' onClick={handleAddComment}>Post</button> */}
    

    {/* comments */}
    
              <div className='' >
                {comment[item._id]?.slice(0, 1).map((comment, idx) => (
                  <div key={idx}>
                <div className='mb-3.5 flex flex-row gap-2.5 pt-3.5'>
                  <div className='flex flex-row items-center gap-1.5'>
                    <img src={avatar} className='h-4 w-4' alt="" />
                    <h1 className='font-InterSemiBold'>{comment.name}</h1>
                  </div>
                  <h2 className='text-[#435270]'>{comment.userName}</h2>
                  <h2 className='text-[#828CA9]'>{new Date(comment.time).toLocaleString()}</h2>
                  
                </div>
                <h1 className='mt-[7px] ml-5 font-Inter'>{comment.commentBody}</h1></div>
     )) }
              </div>
</NavLink>
             
    
              
            </div>
    
            <div>
              
            </div>
            
    
          </div>))

    })}
    </div> ) }
   
 
 
</section>
    
     
  )
}

export default PostCard