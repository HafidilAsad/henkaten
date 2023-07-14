import React, { useState, useEffect } from "react";
import Draggable from "react-draggable";
import gambar from "../../assets/paksuyud.jpg";

const DraggableDot = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const storedPosition = localStorage.getItem("dotPosition");
    if (storedPosition) {
      setPosition(JSON.parse(storedPosition));
    }
  }, []);

  const handleDrag = (e, { x, y }) => {
    const newPosition = { x, y };
    setPosition(newPosition);
    localStorage.setItem("dotPosition", JSON.stringify(newPosition));
  };

  return (
    <Draggable position={position} onDrag={handleDrag}>
      {/* <div className="dot_green"></div> */}
      <img
        src={gambar}
        alt=""
        style={{
          width: 60, // Adjust the width as per your requirement
          height: 60,
          borderRadius: "50%",
          cursor: "pointer", // Adjust the height as per your requirement
        }}
      />
    </Draggable>
  );
};

export default DraggableDot;
