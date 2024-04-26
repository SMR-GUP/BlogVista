import React from 'react'
import styles from '@/styles/Addblog.module.css'
import { useState } from 'react';


const Addblog = () => {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const[slug,setSlug]=useState('');

  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    // Generate slug from title
    const newSlug = newTitle.toLowerCase().replace(/\s+/g, '-'); // Replace spaces with hyphens
    setSlug(newSlug);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/addblog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content, author, slug }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form data');
      }

      // Reset form fields after successful submission
      setTitle('');
      setContent('');
      setAuthor('');
      setSlug('');

      console.log('Form data submitted successfully');
      alert('Blog added!');
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };


  return (


    <div className={styles.formContainer}>
          <h1 style={{paddingTop:'20px'}}>Add New Blog</h1>

    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input 
          type="text" 
          id="title" 
          value={title} 
          onChange={handleTitleChange} 

          required 
        />
      </div>
      <div>
        <label htmlFor="content">Content:</label>
        <textarea 
          id="content" 
          value={content} 
          onChange={(e) => setContent(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label htmlFor="author">Author:</label>
        <input 
          type="text" 
          id="author" 
          value={author} 
          onChange={(e) => setAuthor(e.target.value)} 
          required 
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
  )
}

export default Addblog;
