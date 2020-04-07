import React from 'react';
import faker from 'faker';
import Square from './Square';
import Sidebar from './Sidebar';

const Body = () => {
  return (
    <div className="body">
      <Sidebar />
      <div className="main">
        <img src="/download.jpeg" alt="..." />
        <p className="main-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu
          bibendum at varius vel pharetra. Augue eget arcu dictum varius duis at
          consectetur lorem donec. Morbi tempus iaculis urna id volutpat lacus
          laoreet. Neque laoreet suspendisse interdum consectetur libero id.
          Tortor condimentum lacinia quis vel eros.
        </p>
        <div className="squares">
          <Square text="square 1" />
          <Square text="square 2" />
          <Square text="square 3" />
          <Square text="square 4" />
        </div>
      </div>
    </div>
  );
};

export default Body;
