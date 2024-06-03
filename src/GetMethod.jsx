import React, { useState, useEffect } from 'react'
import { Spinner } from 'react-bootstrap';
function GetMethod() {

   const [data, setData] = useState([]);

   const [loading, setLoading] = useState(true);


   useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
         .then((response) => {
            if (!response.ok) {
               throw new Error("Network Response Was not ok")
            }
            return response.json();
         })
         .then((data) => {
            setData(data);
            setLoading(false);
            console.log(data)
         })
         .catch((error) => console.log("Error:", error))
   }, [])

   return (
      <div>
         {
            loading ? (<Spinner animation="border" role="status">
               <span className="sr-only mt-5"></span>
            </Spinner>) : (
               <table>
                  <thead>
                     <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Message</th>
                     </tr>
                  </thead>
                  <tbody>
                     {
                        data.map((list, index) => (
                           <tr key={index}>
                              <th>{list.id}</th>
                              <th>{list.title}</th>
                              <th>{list.body}</th>
                           </tr>
                        ))
                     }

                  </tbody>
               </table>
            )
         }



      </div>
   )
}

export default GetMethod
