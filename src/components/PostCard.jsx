import React, { useEffect, useState } from 'react'


import avatar from '../assets/Avatarsdash.png'

[
    {
        "_id": "68ff958d86691e3a421b8e8e",
        "userId": {
            "_id": "68f7838ab85baba807a4f2ea",
            "firstName": "Israel",
            "lastName": "Olaoye"
        },
        "body": "This is a new post",
        "time": "2025-10-27T15:53:49.140Z",
        "tags": [],
        "createdAt": "2025-10-27T15:53:49.152Z",
        "updatedAt": "2025-10-27T15:53:49.152Z",
        "__v": 0
    }
]

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





const PostCard = () => {
  const [readMore , setReadMore] = useState(null)
  const [data, setData] = useState([])
  
  const handleshow =(index)=>{
    if (readMore === index){
      setReadMore(null)
    }
    else{
      setReadMore(index)
    }
   
  }
  console.log(data)

  useEffect(()=>{
    const token = localStorage.getItem('token')

    const fetchData = async()=>{
      try{
        const response = await fetch('https://teekvillebackend.onrender.com/api/post',{
        method: "GET",
        headers:{
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${token}`
        }
      })
      const result = await response.json()
      console.log(result)
      if (result.success === true){
        const timeString = result.posts.time;
        console.log(timeString)
        const date = new Date(timeString);

        const formattedTime = date.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
        });
      result.posts.time = formattedTime
      console.log(result.posts.time)

        setData(result.posts)
      }
      else{

      }

      }
      catch(e){
        console.log('Error: ', e)

      }

    }
    fetchData();

  }, [])

  console.log(data)
  

 





  
  return (
    <>
    <div className='hidden md:block'>
    {data.map((item, index)=>{
      return(
      (<div className='bg-white py-6 px-[27px] rounded-[15px] ' key={index}>
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
              <p className='font-Oxygen text-[16px]/[136%] mt-2'>{readMore === index ? item.body : item.body.substring(0,100)} <span onClick={()=>handleshow(index)} className='text-[#1E5296]'>{!(readMore === index) ? 'Read More': 'Show Less'}</span> </p>
            </div>
    
            <div className='mt-[2px]'>
              <div className='flex flex-row'>
                <h1 className='text-[#D42620] font-Oxygen text-sm'>Tags: {item.tags?.join(' ')}</h1>
                <h1 className='ml-3.5 text-[#130D3AB2] font-Oxygen text-sm'>{item.time}</h1>
                
              </div>
    
              <div></div>
    
              <div className='border-[0.5px] border-[#595575] rounded-[5px] mt-2.5'>
                <input type="text" placeholder='add comment' className='py-3 px-2.5 w-full'/>
              </div>
    

    {/* comments */}
              <div>
                <div className='mb-3.5 flex flex-row gap-2.5 pt-3.5'>
                  <div className='flex flex-row items-center gap-1.5'>
                    <img src={avatar} className='h-4 w-4' alt="" />
                    <h1 className='font-InterSemiBold'>Erren Yema</h1>
                  </div>
                  <h2 className='text-[#435270]'>@erren_yema</h2>
                  <h2 className='text-[#828CA9]'>12 hours ago</h2>
                  
                </div>
                <h1 className='mt-[7px] ml-5 font-Inter'>Well played boys. We’ll get them next time up the ladder and do ..sdfsdfdsdf.</h1>
              </div>
    
              
            </div>
    
            <div>
              
            </div>
    
          </div>))

    })}
    </div>
    <div className='flex flex-1 md:hidden justify-center items-center'>
      <h1 className='text-center font-InterBold'>Please Switch to Desktop </h1>

    </div>
    </>

    
     
  )
}

export default PostCard