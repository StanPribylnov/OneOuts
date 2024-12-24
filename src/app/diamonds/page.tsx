'use client';
import React from 'react';
import { useDiamondContext } from '@/context/diamonds';

const DiamondsPage = () => {
  const { diamondBalance, setDiamondBalance } = useDiamondContext();

  const handlePurchase = () => {
    const purchaseAmount = 10; // Example: Each click adds 10 diamonds
    setDiamondBalance(diamondBalance + purchaseAmount);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4 text-center">Diamond Store</h1>
      <div className="flex items-center justify-center space-x-4">
        <span className="text-lg">Your Diamonds: {diamondBalance}</span>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={handlePurchase}
        >
          Purchase 10 Diamonds
        </button>
      </div>
    </div>
  );
};

export default DiamondsPage;
