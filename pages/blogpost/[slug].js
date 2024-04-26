import React from 'react'
import { useRouter } from 'next/router';
import styles from '@/styles/BlogPost.module.css'
import { useState,useEffect } from 'react';


const slug = () => {
  const router =useRouter();
  const {slug}= router.query;
   
    const[blogDetail,setBlogDetail]=useState([])

    useEffect(()=>{
      
      fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((a)=>{
        return (a.json());
      }).then((parsed)=>{
        setBlogDetail(parsed);
      })
},[])

  return (

    <div className={styles.blogcontent}>

    <div className={styles.blog}>
      <h1>{blogDetail.title}</h1>
    </div>

    <p>{blogDetail.content}</p>

    <h2 style={{textAlign:'center',marginTop:'20px',marginDown:'20px'}}>Written By: {blogDetail.author}</h2>

    </div>
    
  )
}

export default slug
