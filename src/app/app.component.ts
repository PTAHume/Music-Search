import { Component } from '@angular/core';
import { SearchService } from '../search.service';
import { ResultsItem } from '../results-item';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  loading: boolean = false;
  searchResults = new Array<ResultsItem>();
  constructor(private searchService: SearchService) {}

  doSearch(term: string) {
    this.loading = true;
    this.searchService.search(term).subscribe((response) => {
      this.searchResults = response.results.map(
        (result) =>
          new ResultsItem(
            result.trackName,
            result.artistName,
            result.trackViewUrl,
            result.artworkUrl30,
            result.artistId
          )
      );
      this.loading = false;
      console.log(this.searchResults);
    });
  }
}
