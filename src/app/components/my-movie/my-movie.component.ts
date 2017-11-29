import { Component, OnInit } from "@angular/core";
import { CinemaService } from "../../services/cinema.service";
import { ActivatedRoute } from "@angular/router";

import { Movie } from "../../models/Movie.model";

@Component({
  selector: "app-my-movie",
  templateUrl: "./my-movie.component.html",
  styleUrls: ["./my-movie.component.css"]
})
export class MyMovieComponent implements OnInit {
  movieId: number;
  movie: Movie;

  constructor(private cinemaservice: CinemaService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe(params => this.movieId = Number(params["id"]));
    this.movie = this.cinemaservice.getMovie(this.movieId);
  }
}
