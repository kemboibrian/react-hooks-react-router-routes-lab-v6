// Home.js
import React from 'react';
import MovieCard from '../components/MovieCard';

const Home = () => {
  // Assuming you have some movie data
  const movies = [
    { id: 1, title: 'Movie 1' },
    { id: 2, title: 'Movie 2' },
    // Add more movie objects as needed
  ];

  return (
    <div>
      <h1>Home Page</h1>
      <div className="movies-list">
        {movies.map(movie => (
          <MovieCard key={movie.id} id={movie.id} title={movie.title} />
        ))}
      </div>
    </div>
  );
};

export default Home;
