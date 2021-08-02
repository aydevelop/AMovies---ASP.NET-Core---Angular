import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { RatingService } from 'src/app/utils/rating.service';
import { movieDTO } from '../movies.model';
import { MoviesService } from '../movies.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit {
  constructor(
    private moviesService: MoviesService,
    private ratingsService: RatingService,
    private actiatedRoute: ActivatedRoute //private sanitizer: DomSanitizer
  ) {}

  movie!: any;
  releaseDate!: Date;
  trailerURL!: SafeResourceUrl;

  ngOnInit(): void {
    this.actiatedRoute.params.subscribe((params) => {
      //this.trailerURL = this.generateYoutubeURLForEmbeddedVideo(movie.trailer);

      this.moviesService.getById(params.id).subscribe((movie) => {
        this.movie = movie;
        this.releaseDate = new Date(movie.releaseDate);
        console.log(this.movie.summary);
      });
    });
  }

  // generateYoutubeURLForEmbeddedVideo(url: any): SafeResourceUrl{
  //   if (!url){
  //     return '';
  //   }
  //   let videoId = url.split('v=')[1];
  //   const ampersandPosition = videoId.indexOf('&');
  //   if (ampersandPosition !== -1){
  //     videoId = videoId.substring(0, ampersandPosition);
  //   }

  //    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${videoId}`);
  // }

  onRating(rate: number) {
    this.ratingsService.rate(this.movie.id, rate).subscribe(() => {
      Swal.fire('Success', 'Your vote has been received', 'success');
    });
  }
}
