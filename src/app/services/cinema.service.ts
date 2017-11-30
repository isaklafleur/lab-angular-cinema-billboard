import { Injectable } from "@angular/core";
import { movieList } from "../data/movies";
import { Movie } from "../models/Movie.model";


@Injectable()
export class CinemaService {
  movies: Movie[];
  constructor() {
    this.movies = movieList;
  }

  getMovies(): Movie[] {
    return this.movies;
  }
  getMovie(id: number): Movie {
    return this.movies.find(movie => {
      return movie.id === id;
    });
  }
}
