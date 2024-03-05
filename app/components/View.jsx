import React, { createContext, useState, useContext, useEffect } from 'react';

const ViewCountContext = createContext();

export const ViewCountProvider = ({ children }) => {
  const [viewCount, setViewCount] = useState(0);

  useEffect(() => {
    // Load the view count from localStorage
    const storedCount = parseInt(localStorage.getItem('expertPageViewCount')) || 0;
    setViewCount(storedCount);
  }, []);

  const incrementViewCount = () => {
    const newCount = viewCount + 1;
    localStorage.setItem('expertPageViewCount', newCount);
    setViewCount(newCount);
  };

  return (
    <ViewCountContext.Provider value={{ viewCount, incrementViewCount }}>
      {children}
    </ViewCountContext.Provider>
  );
};

export const useViewCount = () => useContext(ViewCountContext);
