import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden -z-10">
      {/* Large Circle */}
      <div 
        className="absolute w-[500px] h-[500px] rounded-full bg-[#391180] placeholder opacity-25 blur-[100px]"
        style={{
          animation: 'moveCircleLarge 25s infinite linear',
          transform: 'translate(-50%, -50%)'
        }}
      />
      
      {/* Small Circle */}
      <div 
        className="absolute w-[300px] h-[300px] rounded-full bg-[#391180] opacity-25 blur-[80px]"
        style={{
          animation: 'moveCircleSmall 20s infinite linear',
          transform: 'translate(-50%, -50%)'
        }}
      />

      <style jsx>{`
        @keyframes moveCircleLarge {
          0% {
            left: 20%;
            top: 20%;
          }
          25% {
            left: 80%;
            top: 20%;
          }
          50% {
            left: 80%;
            top: 80%;
          }
          75% {
            left: 20%;
            top: 80%;
          }
          100% {
            left: 20%;
            top: 20%;
          }
        }

        @keyframes moveCircleSmall {
          0% {
            left: 80%;
            top: 80%;
          }
          25% {
            left: 20%;
            top: 80%;
          }
          50% {
            left: 20%;
            top: 20%;
          }
          75% {
            left: 80%;
            top: 20%;
          }
          100% {
            left: 80%;
            top: 80%;
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackground;