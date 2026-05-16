import React, { useState, useEffect } from 'react';

const SpamTag = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Show the button after 7 seconds when the app starts
    const timer = setTimeout(() => {
      setShowButton(true); // Show the button after 7 seconds
    }, 7000); // 7000 milliseconds = 7 seconds

    // Cleanup timeout on component unmount
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    setIsHidden(true); // Hide the divs immediately
    setShowButton(false); // Hide the button
  };

  return (
    <div>
      {showButton && (
        <button onClick={handleClick}>
          Hide Spam
        </button>
      )}

      {!isHidden && (
        <>
          <div style={{ border: '1px solid red', margin: '10px', padding: '10px' }}>
            <p>This is the first spam div.</p>
          </div>

          <div style={{ border: '1px solid blue', margin: '10px', padding: '10px' }}>
            <p>This is the second spam div.</p>
          </div>
        </>
      )}
    </div>
  );
};

export default SpamTag;
