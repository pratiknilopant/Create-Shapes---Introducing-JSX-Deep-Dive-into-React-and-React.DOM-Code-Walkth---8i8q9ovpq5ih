import React from 'react'
import '../styles/App.css';
import React, { useState } from "react";

const App = () => {

    const [selectedShape, setSelectedShape] = useState("square");
    const [shapes, setShapes] = useState([]);
  
    const handleShapeChange = (event) => {
      setSelectedShape(event.target.value);
    };
  
    const handleAddShape = () => {
      const newShapes = [...shapes, selectedShape];
      setShapes(newShapes);
    };

  return (
    <div id="main">
      <div className="shape-creator">
      <select value={selectedShape} onChange={handleShapeChange}>
        <option value="square">Square</option>
        <option value="circle">Circle</option>
      </select>
      <button onClick={handleAddShape}>Add Shape</button>
      <div className="shapes-holder">
        {shapes.map((shape, index) => (
          <div key={index} className={`shape ${shape}`} />
        ))}
      </div>
    </div>
    </div>
  )
}


export default App;
