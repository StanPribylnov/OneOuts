// LeaderBoardPage.tsx
'use client';
import React, { useState } from "react";
import { useFetchLeaderboardQuery } from "@/store/leaderboard/apiSlice";
import Link from "next/link";

// Type for each creator in the leaderboard
interface Creator {
  id: number;
  name: string;
  image?: string;
  image_background?: string;
  games_count: number;
}

interface LeaderboardData {
  results: Creator[];
}

const LeaderBoardPage: React.FC = () => {
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = useFetchLeaderboardQuery({ page, page_size: 10 }) as {
    data: LeaderboardData;
    error: any;
    isLoading: boolean;
  };

  if (isLoading) {
    return <div className="container mx-auto text-center">Loading...</div>;
  }

  if (error) {
    return (
      <div className="container mx-auto text-center text-red-500">
        Error: {error.message || "Failed to fetch leaderboard"}
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Leaderboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.results?.map((creator: Creator) => (
          <div key={creator.id} className="bg-gray-100 rounded shadow p-4">
            <img
              src={creator.image || creator.image_background}
              alt={creator.name}
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h2 className="text-lg font-semibold">{creator.name}</h2>
            <p className="text-sm text-gray-600">Games Count: {creator.games_count}</p>
            <Link href={`/leaderboard/${creator.id}`} className="text-blue-500 underline">
              View Details
            </Link>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-8 flex justify-between">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
          disabled={page === 1}
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        >
          Previous
        </button>
        <span>Page {page}</span>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default LeaderBoardPage;
