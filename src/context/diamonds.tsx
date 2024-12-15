'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

interface DiamondContextType {
  diamondBalance: number;
  setDiamondBalance: (balance: number) => void;
}

const DiamondContext = createContext<DiamondContextType | undefined>(undefined);

export const DiamondProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [diamondBalance, setDiamondBalanceState] = useState<number>(0);

  useEffect(() => {
    const storedBalance = localStorage.getItem('diamondBalance');
    setDiamondBalanceState(storedBalance ? parseInt(storedBalance, 10) : 0);
  }, []);

  const setDiamondBalance = (balance: number) => {
    setDiamondBalanceState(balance);
    localStorage.setItem('diamondBalance', balance.toString());
  };

  return (
    <DiamondContext.Provider value={{ diamondBalance, setDiamondBalance }}>
  {children}
  </DiamondContext.Provider>
);
};

export const useDiamondContext = () => {
  const context = useContext(DiamondContext);
  if (!context) {
    throw new Error('useDiamondContext must be used within a DiamondProvider');
  }
  return context;
};
