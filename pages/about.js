import React from 'react'
import styles from "@/styles/About.module.css"
import Image from 'next/image'

const about = () => {
  return (
    <div className={styles.container}>
      <p>Hunting Coder is a platform designed to help coders overcome challenges, find solutions to coding errors, and expand their programming knowledge. Whether you're a beginner just starting your coding journey or an experienced developer seeking answers to complex problems, Hunting Coder is here to assist you.</p>
      <h1>Our Mission</h1>
      <p>At Hunting Coder, our mission is to empower coders of all skill levels by providing a supportive and collaborative environment for learning and problem-solving. We believe that through sharing knowledge and experiences, we can help each other grow and succeed in the ever-evolving field of technology.</p>
      <h1>About Me</h1>
      <div className={styles.imageContainer}>
      <Image className={styles.smritiimg} src="/Smriti.jpg" alt="image loading" width={280} height={220} />
      </div>
     
      <p>I am Smriti Gupta ,a final year B.Tech student at IGDTUW with a passion for coding and a vision for creating a supportive community for fellow coders. With experience in web development, I am dedicated to making Hunting Coder a valuable resource for coders around the world.</p>

    </div>
  )
}

export default about
