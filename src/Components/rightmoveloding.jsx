import React from 'react';

const RightMoveLoding = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <button className="flex items-center justify-center w-full h-20">
        <span className="h-5 w-1 mr-2 bg-black rounded-full"></span>
        <span className="h-5 w-1 mr-2 bg-black rounded-full animate-blink"></span>
        <span className="h-5 w-1 bg-black rounded-full animate-leftmove"></span>
      </button>

      <style jsx>{`
        @keyframes leftmove {
          0% {
            left: 50%;
          }
          100% {
            left: 90%;
            opacity: 0;
            transform: rotate(360deg);
          }
        }
        @keyframes blink {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1; /* Changed from 10 to 1 */
            transform: rotate(-8deg);
          }
        }
        .animate-leftmove {
          position: absolute;
          animation: leftmove 1.5s infinite;
          border-radius: 20px;
        }
        .animate-blink {
          animation: blink 1.5s infinite;
          border-radius: 20px;
        }
      `}</style>
    </div>
  );
};

export default RightMoveLoding;