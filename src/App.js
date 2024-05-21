import React from 'react';
import './App.css';

function App() {

  // Example 1
  const names = ["Alice", "bob", "charlie", "bhaskar"]


  // Example 2

  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 100
    },
    {
      id: 2,
      name: "Product 2",
      rice: 200
    },
    {
      id: 3,
      name: "Product 3",
      price: 300
    },
    {
      id: 4,
      name: "Product 4",
      price: 400
    }
  ]

  // Example 3 return map function

  const fruits = ["Apple", "Banana", "Orange", "Mango"]

  const fruitsItems = fruits.map((fruit, index) => <li key={index}>{fruit}</li>)

  return (
    <>
      <div className="App">
        <h1>Array With Map Function.</h1>

        {/* Example 1 Array */}

        <ul>
          {
            names.map((name, index) => (
              <li key={index}>{name}</li>
            ))
          }
        </ul>


        {/* Example 2 Array Of Objects */}

        <ul>
          {
            products.map((product) => (
              <li key={product.id}>{product.name} - ${product.price}</li>
            ))
          }
        </ul>


        {/* Example 3 return map function */}
        <ul>{fruitsItems}</ul>
      </div>
    </>
  );
}

export default App;