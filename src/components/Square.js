import React from 'react';
import faker from 'faker';

const Square = (props) => {
  return (
    <div
      className="square"
      style={{ backgroundImage: `url(${faker.image.abstract()})` }}
    >
      <h4>{props.text}</h4>
    </div>
  );
};

export default Square;
