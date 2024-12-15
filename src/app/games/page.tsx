'use client';
import React, { useState } from "react";
import { useFetchGamesQuery } from "@/store/games/apiSlice";
import Link from "next/link";

interface Game {
  id: number;
  name: string;
  background_image: string;
  released: string;
  rating: number;
}

const GamesPage = () => {
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = useFetchGamesQuery({ page, page_size: 10 });

  const handleNextPage = () => {
    if (data?.next) {
      setPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
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
      <h1 className="text-2xl font-bold mb-4">Games List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.results.map((game: Game) => (
          <div key={game.id} className="bg-gray-100 rounded shadow p-4">
            <img
              src={game.background_image}
              alt={game.name}
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h2 className="text-lg font-semibold">{game.name}</h2>
            <p className="text-sm text-gray-600">Released: {game.released}</p>
            <p className="text-sm text-gray-600">Rating: {game.rating}</p>
            <Link
              href={`/games/${game.id}`}
              className="text-blue-500 underline"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mt-8">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
          onClick={handlePrevPage}
          disabled={page === 1}
        >
          Previous
        </button>
        <span>Page {page}</span>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
          onClick={handleNextPage}
          disabled={!data?.next}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default GamesPage;
