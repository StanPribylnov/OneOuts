'use client';
import React from 'react';
import { useFetchGameDetailsQuery } from '@/store/games/apiSlice';
import { useParams } from "next/navigation";

interface GameDetails {
  id: number;
  name: string;
  description: string;
  background_image: string;
  released: string;
  rating: number;
}

const GameDetailsPage: React.FC = () => {
  const params = useParams();
  const { id } = params;

  const { data, error, isLoading } = useFetchGameDetailsQuery(id) as {
    data: GameDetails;
    error: unknown;
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
          src={data.background_image}
          alt={data.name}
          className="w-full h-80 object-cover rounded"
        />
        <div>
          <div
            className="text-sm text-gray-600"
            dangerouslySetInnerHTML={{ __html: data.description }}
          ></div>
          <p className="text-sm text-gray-600">Released: {data.released}</p>
          <p className="text-sm text-gray-600">Rating: {data.rating}</p>
        </div>
      </div>
    </div>
  );
};

export default GameDetailsPage;
