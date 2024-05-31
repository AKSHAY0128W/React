import React, { useEffect, useState, useDeferredValue } from 'react'
import './App.css'
import Email from './Email'
function App() {
  return (
    <div className='App'>
      <h1>useId hook in React.</h1>

      {/* Example 1 */}

      <Email />

      <article>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam exercitationem autem, cumque at esse magni, velit accusamus nobis animi alias sapiente ullam reiciendis adipisci quos recusandae laboriosam totam accusantium fugiat sed similique, temporibus ut laudantium. Nobis laudantium, nihil distinctio fuga cumque optio! Nostrum consequuntur ex quam expedita odit aspernatur ipsam illo est iste, enim ut quae, sunt natus, reprehenderit voluptatibus assumenda. Aliquam id impedit sunt distinctio doloremque voluptate possimus eveniet tempora eius neque reprehenderit, sed voluptatem repellendus. Est adipisci facilis consequatur impedit officiis ipsam placeat officia at reiciendis aliquam cupiditate, debitis autem ut, amet numquam?
      </article>

      <Email />

    </div >
  )
}

export default App  