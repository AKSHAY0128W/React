import React, { useState, useEffect } from 'react'

function PostMethod() {
   // useState
   const [formData, setFormdata] = useState({
      title: "",
      body: "",
   })

   const [data, setData] = useState([]); // New state for the data

   const handleChange = (e) => {
      const { name, value } = e.target;

      setFormdata({
         ...formData,
         [name]: value,
      })
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      const apiURL = "https://jsonplaceholder.typicode.com/posts";

      // create the request object
      const requestOptions = {
         method: "POST",
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify(formData)
      };

      // Send the post Request
      fetch(apiURL, requestOptions)
         .then((response) => response.json())
         .then((newData) => {
            // Handle the Response the data
            console.log("Response:", newData);
            setData([...data, newData]); // Add the new data to the existing data
         })
         .catch((error) => console.log("Error", error))
   };

   // Fetch the old data when the component mounts
   useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
         .then(response => response.json())
         .then(oldData => setData(oldData))
         .catch(error => console.log("Error", error));
   }, []);

   return (
      <>
         <form onSubmit={handleSubmit}>
            <div>
               <label htmlFor="title">Title:</label>
               <input type="text" name='title' value={formData.title} onChange={handleChange} />
            </div>
            <div>
               <label htmlFor="body">Body:</label>
               <textarea name='body' value={formData.body} onChange={handleChange} />
            </div>
            <button type='submit'>Submit</button>
         </form>

         {/* Display the data in a table */}
         <table>
            <thead>
               <tr>

                  <th>ID</th>
                  <th>Title</th>
                  <th>Body</th>
               </tr>
            </thead>
            <tbody>
               {data.map((item, index) => (
                  <tr key={index}>
                     <td>{item.id}</td>
                     <td>{item.title}</td>
                     <td>{item.body}</td>
                  </tr>
               ))}
            </tbody>
         </table>
      </>
   )
}

export default PostMethod