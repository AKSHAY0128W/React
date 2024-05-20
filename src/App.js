import React from 'react';
import './App.css';
// boostrap
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <>
      <div className="App">
        <h1>Install Bootstrap In React.</h1>
        <Button variant="primary">Primary</Button>{' '}
        <Button variant="secondary">Secondary</Button>{' '}
        <Button variant="success">Success</Button>{' '}
        <Button variant="warning">Warning</Button>{' '}
        <Button variant="danger">Danger</Button>{' '}
        <Button variant="info">Info</Button>{' '}
        <Button variant="light">Light</Button>{' '}
        <Button variant="dark">Dark</Button>
        <Button variant="link">Link</Button>
      </div>
    </>
  );
}

export default App;