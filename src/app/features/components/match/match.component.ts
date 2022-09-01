import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss'],
})
export class MatchComponent implements OnInit {
  redirect() {
    this.router.navigate(['']);
  }

  constructor(private router: Router) {}

  ngOnInit(): void {}
}