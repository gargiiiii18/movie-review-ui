
export default function MovieCard () {

  const movie = {
    movieName: "Inception",
    moviePoster: "/inception.jpg",
    movieReleaseYear: {date: "16 July", year: 2010},
    rating: 4
  }

  return (
    <div className="container">
      {/* <h1>Hello {myName}</h1>
      <button>Click Me</button>
      <p>Button Clicked</p> */}

      <h2>{movie.movieName}</h2>
      <p>{movie.moviePoster}</p>
      <p>{movie.movieReleaseYear.date}</p>
      <p>{movie.movieReleaseYear.year}</p>
      <p>{movie.rating}</p>
    </div>
  )
}