import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Movie } from "../../models/Movie.model"
import { CinemaService } from "../../services/cinema.service";

@Component({
  selector: "app-my-home",
  templateUrl: "./my-home.component.html",
  styleUrls: ["./my-home.component.css"]
})
export class MyHomeComponent implements OnInit {
  movies: Movie[];

  constructor(private cinemaservice: CinemaService, private router: Router) {
    this.movies = cinemaservice.getMovies();
    console.log(this.movies);
  }

  ngOnInit() {
  }
  viewDetails(id: number) {
    this.router.navigate(["movie", id]);
  }
}
