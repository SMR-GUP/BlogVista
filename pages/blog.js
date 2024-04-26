import React, { useEffect, useState } from 'react'
import styles from '@/styles/Blog.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'


const blog = () => {


  const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        console.log("useeffect is running");
        fetch('http://localhost:3000/api/blogs').then((a) => {
            return a.json();
        })
            .then((parsed) => {
                setBlogs(parsed)
            })
    }, [])


  return (

    <div className={styles.blogItems}>
     

      {blogs.map((blogitem)=>{
        return <div className={styles.blog} key={blogitem.title}>
<Link href={'blogpost/'+blogitem.slug}>
  <h3 style={{
    textAlign:'center',
    marginTop:'15px',
    fontSize:'25px',
    textDecoration:'none',
    color:'black',
    transition: 'font-size 0.3s ease', /* Smooth transition effect */
    }}
    onMouseOver={(e) => e.target.style.fontSize = '29px'} /* Increase font size on hover */
    onMouseOut={(e) => e.target.style.fontSize = '25px'} /* Restore font size on mouse out */
  >
    {blogitem.title}
  </h3>
</Link>
            <p style={{textAlign:'center', marginLeft:'70px',marginRight:'70px',fontSize:'20px'}}>
              {blogitem.content.substr(0,220)+"......"+"click on link above to read more"}
            </p>
        </div>
      })}
      
    </div>

  )
}

export default blog