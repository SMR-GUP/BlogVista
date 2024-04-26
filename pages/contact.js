import React from 'react'
import styles from '@/styles/Contact.module.css'
import Image from "next/image";


const contact = () => {

  const handleSubmit = async (event) =>{
    event.preventDefault(); 

    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value,
      phoneno: event.target.phoneno.value
    };

    console.log(formData);
    console.log(typeof formData);

    try {
      const response = await fetch("http://localhost:3000/api/postcontact", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
      alert('Your details have been sent!');
    } catch (error) {
      console.error("Error:", error);
    }

    event.target.reset();
     
    
  };


  return (
    <div className={styles.container}>
      <h1 style={{textAlign:'center'}}>Contact Us</h1>
      <Image className={styles.contact} src="/contact.jpg" alt="image loading..." width={280} height={200}/>

      <p style={{textAlign:'center',fontSize:'25px'}}>If you have any questions or feedback, feel free to reach out to us!</p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4"></textarea>
        <label htmlFor="phoneno">Phone No:</label>
        <input type="text" id="phoneno" name="phoneno" ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default contact
