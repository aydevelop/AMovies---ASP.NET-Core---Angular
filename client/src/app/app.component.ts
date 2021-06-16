import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {}

  duplicateNumber(n: number) {
    return n * 2;
  }

  handleRating(rate: number) {
    alert(`The user selected  ${rate}`);
  }
}
