import { createContext, useContext, useState } from 'react';
import { SampleList } from './sampleData';

export const StoreContext = createContext();

export const Store = ({ children }) => {
  const [sample, setSample] = useState(SampleList);
  return (
    <StoreContext.Provider value={sample}>{children}</StoreContext.Provider>
  );
};
