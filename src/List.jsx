import React, { useMemo, useEffect, useDeferredValue } from 'react'

function List({ input }) {
   const dataSize = 5000;
   const deferredInput = useDeferredValue(input)

   const list = useMemo(() => {
      const a = [];
      for (let i = 0; i < dataSize; i++) {
         a.push(<div key={i}>{input}</div>)
      }
      return a;
   }, [deferredInput])

   useEffect(() => {
      // console.log(`Input:${input} \nDeferredValue ${deferredInput}`);
   })

   return list;
}

export default List