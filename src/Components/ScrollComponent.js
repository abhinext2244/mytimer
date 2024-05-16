import React, { useEffect } from 'react';

const ScrollComponent = () => {
  useEffect(() => {
    const handleScroll = () => {
      console.log('Scrolled');
      // Add your scroll event handling logic here
    };

    // Add event listener when the component mounts
    document.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div>
      <h2>Scroll Component</h2>
      <p>Scroll to see the effect</p>
    </div>
  );
};

export default ScrollComponent;
