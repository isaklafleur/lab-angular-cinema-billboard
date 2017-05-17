import { Component, OnInit } from '@angular/core';

import { CinemaService } from '../cinema.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.css']
})
export class MyHomeComponent implements OnInit {
  movies: Object[];

  constructor(private cinemaservice: CinemaService, private router: Router) {
    this.movies = cinemaservice.getMovies();
    console.log(this.movies);
  }

  ngOnInit() {
  }
  viewDetails(id) {
    this.router.navigate(['movie', id]);
  }
}
