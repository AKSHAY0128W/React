import React, { useState, useEffect } from 'react'

function UpdateMethod() {

   const [postData, setPostData] = useState({
      id: 1,
      title: "",
      body: "",
   });

   const [message, setMessage] = useState("")
   const [loading, setLoading] = useState(false)

   const handleChange = (e) => {
      const { name, value } = e.target;
      console.log(name, value)
      setPostData(
         {
            ...postData,
            [name]: value,
         }
      );
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      setLoading(true);

      let apiURL = `https://jsonplaceholder.typicode.com/posts/${postData.id}`;
      const requestOptions = {
         method: "PUT",
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify(postData)
      }

      // send the PUT(update) request
      fetch(apiURL, requestOptions)
         .then((response) => response.json())
         .then((data) => {
            setMessage("Post Successfully")
            console.log(data)
         })
         .catch((error) => {
            console.error("Error", error)
            setMessage("Error updating the post!!!")
         })
         .finally(() => {
            setLoading(false);
         });
   };

   // Load the initial post data when the component is mount.
   useEffect(() => {
      const postId = postData.id;
      let apiURL = `https://jsonplaceholder.typicode.com/posts/${postId}`;
      fetch(apiURL)
         .then((response) => response.json())
         .then((data) => {
            setPostData(data)
            console.log(data)
         })
         .catch((error) => console.error("Error", error))
   }, [postData.id])

   return (
      <>
         <form onSubmit={handleSubmit}>
            {loading && <p>Loading...</p>}
            {message && <p>{message}...</p>}
            <div>
               <label htmlFor="title"></label>
               <input type="text" name='title' value={postData.title} onChange={handleChange} />
            </div>
            <div>
               <label htmlFor="body"></label>
               <textarea name='body' value={postData.body} onChange={handleChange} />
            </div>
            <button type='submit'>Update Post</button>
         </form>
      </>
   )
}

export default UpdateMethod