import React from 'react'

function ReuseableButtton(props) {
   let { text, onClick } = props;
   return (
      <div>
         <button onClick={onClick}>{text}</button>
      </div>
   )
}

export default ReuseableButtton
