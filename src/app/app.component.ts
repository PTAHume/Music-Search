import { Component } from '@angular/core';
import { SearchService } from '../search.service';
import { ResultsItem } from '../results-item';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private loading: boolean = false;
  posts = new Array<ResultsItem>();
  constructor(private itunes: SearchService) {}

  doSearch(term: string) {
    this.loading = true;
    this.itunes.search(term).subscribe((response) => {
      this.posts = 
        response.results.map((result) => 
            new ResultsItem (
              result.artworkUrl30, 
              result.trackViewUrl, 
              result.trackName)
      );
      console.log(this.posts);
    });
  }
}
