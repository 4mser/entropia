import { Component } from "react";
import axios from "axios";
import styled from "styled-components";

class MovieSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      movies: [],
      selectedMovie: null,
      movieDetails: null,
    };
  }

  handleInputChange = (event) => {
    this.setState({ query: event.target.value });
  };

  searchMovies = () => {
    const API_KEY = "79a58176fa8599caf246a4aba99dfa0f";
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${this.state.query}`;

    axios
      .get(url)
      .then((response) => {
        const movies = response.data.results;
        this.setState({ movies });
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  };

  selectMovie = (movie) => {
    const API_KEY = "79a58176fa8599caf246a4aba99dfa0f";
    const url = `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${API_KEY}`;

    axios
      .get(url)
      .then((response) => {
        const movieDetails = response.data;
        this.setState({ selectedMovie: movie, movieDetails });
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
      });
  };

  render() {
    const { query, movies, selectedMovie, movieDetails } = this.state;

    return (
      <BuscadorPelis>
        <input type="text" value={query} onChange={this.handleInputChange} />
        <button onClick={this.searchMovies}>Search</button>

        <div>
          {movies.map((movie) => (
            <div key={movie.id} onClick={() => this.selectMovie(movie)}>
              <img
                src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                alt={movie.title}
              />
              {movie.title} - {movie.release_date}
            </div>
          ))}
        </div>

        {selectedMovie && movieDetails && (
          <div>
            <h2>Title: {movieDetails.title}</h2>
            <p>
              Genres:{" "}
              {movieDetails.genres.map((genre) => genre.name).join(", ")}
            </p>
            <p>Overview: {movieDetails.overview}</p>
            <p>Average Rating: {movieDetails.vote_average}</p>
          </div>
        )}
      </BuscadorPelis>
    );
  }
}

export default MovieSearch;

const BuscadorPelis = styled.div`
  width: 100%;
  margin-top: 5rem;
  padding: 2rem;
  height: 10rem;
`;
