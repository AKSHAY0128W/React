import React from 'react'

function ReuseableList({ items }) {
   return (
      <div>
         <ul>
            {
               items.map((item, index) => (
                  <li key={index}>{item}</li>
               ))
            }
         </ul>
      </div>
   )
}

export default ReuseableList
