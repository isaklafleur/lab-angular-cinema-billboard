import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../cinema.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.css']
})
export class MyMovieComponent implements OnInit {
  movieId: number;
  movie: Object;
  
  constructor(private cinemaservice: CinemaService, private router: ActivatedRoute) {}

  ngOnInit() {
    this.router.params
    .subscribe(params => this.movieId = Number(params['id']));
    this.movie = this.cinemaservice.getMovie(this.movieId);
  }
}
