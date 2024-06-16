import React from 'react'

const MoviePage = ({params}) => {
    const movieId = params.id;
    const res = await fetch(`https://api.themoviesdb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`)
    const movie = await res.json();
  return (
    <div>MoviePage</div>
  ) 
}

export default MoviePage