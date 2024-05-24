import React, { forwardRef, useRef, useImperativeHandle } from 'react'

function ChildComp(props, ref) {


   // Example 2
   const childRef = useRef();


   const handleButtonClick = () => {
      console.log("Child Button Click");
   }

   useImperativeHandle(ref, () => ({
      handleButtonClick,
   }));

   return (
      <div>

         {/* Example 1 */}
         {/* <input type="text" ref={ref} />  */}

         {/* Example 2 */}
         <button ref={childRef}>Click Me</button>
      </div>
   )
}

export default forwardRef(ChildComp)
