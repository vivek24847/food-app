import React from "react";

const TestComponent2 = () => {
  return (
    <>
      <style>
        {`
          .container2 {
            height: 30px;
          }

          .button-wrapper2 {
            position: relative;
            width: 400px;
            height: 60px;
          }

          .button-yellow {
            width: 300px;
            height: 49px;
            background-color: yellow;
            border-radius: 10px;
            position: absolute;
          }

          .button-red {
            width: 300px;
            height: 50px;
            background-color: red;
            border-radius: 10px;
            color: white;
            font-weight: 700;
            font-size: 18px;
            position: absolute;
            top: 1px; 
            left: 1px; 
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            animation: animate 4s ease-in-out infinite;
          }

          @keyframes animate {
            0%, 100% {
              clip-path: inset(0px 0px 0px 3px);
            }
            25% {
              clip-path: inset(3px 0px 0px 0px);
            }
            50% {
              clip-path: inset(0px 3px 0px 0px);
            }
            75% {
              clip-path: inset(0px 0px 3px 0px);
            }
          }
        `}
      </style>
      <div className="container2">
        <div className="button-wrapper2">
          <div className="button-yellow"></div>
          <button className="button-red">Button</button>
        </div>
      </div>
    </>
  );
};

export default TestComponent2;
