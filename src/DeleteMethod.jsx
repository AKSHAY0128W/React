import React, { useState, useEffect } from 'react'

function UpdateMethod() {

   const [data, setData] = useState([])
   const [loading, setLoading] = useState(true)
   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            if (!response.ok) {
               throw new Error('Network response was not ok')
            }
            const jsonData = await response.json()
            setData(jsonData)
            setLoading(false)
            console.log(jsonData)
         }
         catch (error) {
            console.error("Error Fetching Data", error)
         }
      };

      fetchData();
   }, [])


   const handleDelete = (id) => {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
         method: 'DELETE',
      }).then((response) => {
         if (!response.ok) {
            throw new Error('Network response was not ok')
         }
         return response.json()
      }).then(() => {
         // Remove the delete item from the data array
         setData(data.filter((item) => item.id !== id))
      }).catch((error) => {
         console.error("Error Deleting Data", error)
      })

   }

   return (
      <>
         <table>
            <thead>
               <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Action</th>
               </tr>
            </thead>
            <tbody>
               {
                  data.map((item) => (
                     <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td><button onClick={() => handleDelete(item.id)}>Delete</button></td>
                     </tr>

                  ))
               }
            </tbody>
         </table>
      </>
   )
}

export default UpdateMethod