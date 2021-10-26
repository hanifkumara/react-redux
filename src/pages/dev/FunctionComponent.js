import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'

const Functioncomponent = () => {
  const products = useSelector(state => state.products)

  return (
    <div>
      <h1>Hello World! Function Component</h1>
      <ul>
        {products.map(value => 
          <li>
            {value.name}
          </li>
        )}    
      </ul>
      <Link to="/class-component">
        <Button variant="primary">To Class Component</Button>
      </Link>
      <Button variant="success">Success</Button>{' '}
    </div>
  );
}

export default Functioncomponent;
