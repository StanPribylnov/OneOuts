'use client';
import React from 'react';
import { useFetchCreatorDetailsQuery } from '@/store/leaderboard/apiSlice';
import { useParams } from 'next/navigation';

// Type for Creator details
interface CreatorDetails {
  id: number;
  name: string;
  image_background: string;
  description: string;
  games_count: number;
  reviews_count: number;
  rating: number;
}

const CreatorDetailsPage: React.FC = () => {
  const params = useParams();
  const { id } = params;

  const { data, error, isLoading } = useFetchCreatorDetailsQuery(id) as {
    data: CreatorDetails;
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
          <p className="text-sm text-gray-600">Games Count: {data.games_count}</p>
          <p className="text-sm text-gray-600">Reviews Count: {data.reviews_count}</p>
          <p className="text-sm text-gray-600">Rating: {data.rating}</p>
        </div>
      </div>
    </div>
  );
};

export default CreatorDetailsPage;
