import React from "react";

const TestComponent = () => {
  return (
    <>
      <style>
        {`
                      .container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  perspective: 1000px;
}
.button-wrapper {
  position: relative;
  width: 506px;
  height: 66px;
}
.button2 {
  width: 500px;
  height: 60px;
  background-color: yellow;
  border-radius: 0.5rem;
  position: absolute;
  top: 0;
  left: 0;
}
.button {
  width: 500px;
  height: 60px;
  background-color: red;
  border-radius: 0.5rem;
  color: white;
  font-weight: 700;
  position: absolute;
  animation: seesaw 4s linear infinite;
  transform-style: preserve-3d;
  z-index: 1; 
}
 @keyframes seesaw {
  0% { transform: rotateX(0deg) rotateY(0deg); }
  25% { transform: rotateX(8deg) rotateY(4deg); }
  50% { transform: rotateX(0deg) rotateY(8deg); }
  75% { transform: rotateX(-8deg) rotateY(4deg); }
  100% { transform: rotateX(0deg) rotateY(5deg); }

}  
                `}
      </style>
      <div className="container">
        <div className="button-wrapper">
          <div className="button2"></div>
          <button className="button">Button</button>
        </div>
      </div>
    </>
  );
};

export default TestComponent;
