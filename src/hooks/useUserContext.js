// Not used in the app -- Needs update for React 19
// This file is not used in the app, but it is a good example of how to create a context provider and a custom hook to manage the state of the user in a React application.
import React, { createContext, useContext, useState } from 'react';

const LayoutContext = createContext([{}, () => {}]);

export const LayoutContextProvider = ({ authUser = {}, children }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LayoutContext.Provider value={{ authUser, isLoading, setIsLoading }}>
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayoutContext = () => useContext(LayoutContext);
