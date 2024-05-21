import React from 'react';
import './App.css';
import { Table, Container, Row, Col } from 'react-bootstrap';
function App() {

  const countriesWithCities = [
    {
      country: 'India',
      cities: ['Delhi', 'Mumbai', 'Kolkata']
    },
    {
      country: 'USA',
      cities: ['New York', 'Los Angeles', 'Chicago']
    },
    {
      country: 'UK',
      cities: ['London', 'Manchester', 'Liverpool']
    }
  ];

  const nestedData = [
    { category: "Fruits", items: ["Apple", "Banana", "Mango"] },
    { category: "Vegetables", items: ["Tomato", "Potato", "Onion"] },
    { category: "Beverages", items: ["Tea", "Coffee", "Milk"] }
  ];

  return (
    <>
      <div className="App">
        <h1>Nested Map Function in React.</h1>

        {/* Example 1 */}
        <ul>
          {
            countriesWithCities.map((countryObj, index) => (
              <li key={index}>
                <b>{countryObj.country}</b>
                <ul>
                  {
                    countryObj.cities.map((city, cityIndex) => (
                      <li key={cityIndex}>{city}</li>
                    ))
                  }
                </ul>
              </li>
            ))
          }
        </ul>


        {/* Example 2 */}

        <Container>
          <Row>
            <Col>
              <Table className="table">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Items</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    nestedData.map((data, index) => (
                      <tr key={index}>
                        <td>{data.category}</td>
                        <td>
                          <ul className='list-unstyled'>
                            {
                              data.items.map((item, itemIndex) => (
                                <li key={itemIndex}>{item}</li>
                              ))
                            }
                          </ul>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;