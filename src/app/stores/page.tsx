'use client';

import React from "react";
import { useFetchStoresQuery } from "@/store/stores/apiSlice";
import Link from "next/link";

interface Store {
  id: number;
  name: string;
  domain: string;
  games_count: number;
  image_background: string;
}

interface StoresResponse {
  results: Store[];
}

const StoresPage: React.FC = () => {
  const { data, error, isLoading } = useFetchStoresQuery(undefined) as {
    data: StoresResponse;
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
      <h1 className="text-2xl font-bold mb-4">Store List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.results.map((store: Store) => (
          <div key={store.id} className="bg-gray-100 rounded shadow p-4">
            <img
              src={store.image_background}
              alt={store.name}
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h2 className="text-lg font-semibold">{store.name}</h2>
            <p className="text-sm text-gray-600">Domain: {store.domain}</p>
            <p className="text-sm text-gray-600">Games Count: {store.games_count}</p>
            <Link href={`/stores/${store.id}`} className="text-blue-500 underline">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoresPage;
