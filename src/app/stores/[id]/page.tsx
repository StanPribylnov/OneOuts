'use client';

import React from 'react';
import { useFetchStoreDetailsQuery } from '@/store/stores/apiSlice';
import { useParams } from "next/navigation";

// Define types for store details
interface StoreDetails {
  id: number;
  name: string;
  domain: string;
  games_count: number;
  image_background: string;
  description: string;
}

const StoreDetailsPage: React.FC = () => {
  const params = useParams();
  const { id } = params;

  const { data, error, isLoading } = useFetchStoreDetailsQuery(id) as {
    data: StoreDetails;
    error: any;
    isLoading: boolean;
  };

  if (isLoading) {
    return <div className="container mx-auto text-center">Loading...</div>;
  }

  if (error) {
    return (
      <div className="container mx-auto text-center text-red-500">
        Error: {error.toString()}
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">{data.name}</h1>
      <div className="grid grid-cols-1 gap-6">
        <img
          src={data.image_background}
          alt={data.name}
          className="w-full h-80 object-cover rounded"
        />
        <div>
          <div
            className="text-sm text-gray-600"
            dangerouslySetInnerHTML={{ __html: data.description }}
          />
          <p className="text-sm text-gray-600">Domain: {data.domain}</p>
          <p className="text-sm text-gray-600">Games Count: {data.games_count}</p>
        </div>
      </div>
    </div>
  );
};

export default StoreDetailsPage;
