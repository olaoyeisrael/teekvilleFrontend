import gsap from 'gsap'
import React, { useEffect } from 'react'
import SplitType from 'split-type'

const Blog = () => {

  useEffect(()=>{

     const paragraph = new SplitType('h1', {types: 'words'})
    const paragraphelement = [...paragraph.words]


  gsap.from(paragraphelement, 
    {
      y: 24,
      opacity: 0,
      duration: 0.8,
      stagger: {amount: 1},
      ease: 'ease'
    }

  )

  }, [])

 
  return (
    <section id='hero-blog' className='blog'>
      <h1 className='text-black mb-70'>This is page is under constuction</h1>
    </section>
  )
}

export default Blog