import React from 'react';
import './App.css';
import Table from 'react-bootstrap/Table';
function App() {

  const tableData = [
    {
      id: 1,
      name: 'John Doe',
      age: 25,
      location: 'USA'
    },
    {
      id: 2,
      name: 'Jane Doe',
      age: 25,
      location: 'UK'
    },
    {
      id: 3,
      name: 'Tom Cruise',
      age: 45,
      location: 'JAPAN'
    },
    {
      id: 4,
      name: 'Brad Pitt',
      age: 35,
      location: 'INDIA'
    },
    {
      id: 5,
      name: 'Angelina Jolie',
      age: 30,
      location: 'FRANCE'
    }
  ]

  return (
    <>
      <div className="App">
        <h1>Bootstarp Table in React.</h1>
        <div>
          <Table striped="columns" responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {
                tableData.map((data) => (
                  data.age > 30 ?

                    <tr key={data.id}>
                      <td>{data.id}</td>
                      <td>{data.name}</td>
                      <td>{data.age}</td>
                      <td>{data.location}</td>
                    </tr>
                    : null
                ))
              }
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default App;