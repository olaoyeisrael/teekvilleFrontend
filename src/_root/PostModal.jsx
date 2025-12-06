import React, { useState } from 'react'
import avatar from '../assets/Avatarsdash.png'

const PostModal = ({showModal, setShowModal, onClose}) => {

   
   const [body, setBody] = useState('')
   const [tag, setTag] = useState([])
   const [error, setError] = useState('')

    
  

    const handleChangeBody = (e) =>{
      setBody(e.target.value)
    }
    const handleChangeTag = (e) =>{
      const value = e.target.value
      const tagsArray = value.split(' ').filter(tag => tag.trim() !== '');
      setTag(tagsArray)
    }
    


       

        const handlePost = async()=>{
            // e.preventDefault();
           
            
            const token = localStorage.getItem("token")
           
            try{
              const response = await fetch('https://teekvillebackend.onrender.com/api/post', {
                method: "POST",
                headers:{
                  'Content-Type': 'application/json',
                  'Authorization' : `Bearer ${token}`
                },
                body: JSON.stringify({body, tags: tag})
              })
              const res = await response.json()
              if (res.success === true) {
                onClose()
              }
              else{
                setError(res.message)
              }
             
            } catch(e){
              console.error("Error Message", e)
              setError(e.message)
            }
        
        
        }
  return (
    <div  className='lg:max-w-[600px] max-w-[300px] container' > 
                <div className='lg:px-[34px] mb-4 flex flex-row items-center justify-between gap-[15px]'> 
                    <img src={avatar} alt="" className='w-11 h-11'/>
                    <div>
                    <textarea name="body" onChange={handleChangeBody} id="" placeholder='Say something...' className='w-full p-1'></textarea>
                    <label htmlFor="tags">Tags: </label>
                    <select name="tag"  id="tags" onChange={handleChangeTag}>
                        <option value="">--</option>
                        <option value="Art, Nature">Art and Nature</option>
                        <option value="Science, Technology">Science and Technology</option>
                    </select>
                    </div>
                </div>
                
                <div className='border-[0.5px] border-[#0000001A]'></div>
                { error && <h1 className='text-red-500'>{error}</h1>}
                <button onClick={handlePost} className='bg-[#1E5296] py-3 rounded-[10px] text-white px-5 flex justify-end mt-4 font-OxygenBold ml-[34px]' >Post</button>
            </div>

  )
}

export default PostModal