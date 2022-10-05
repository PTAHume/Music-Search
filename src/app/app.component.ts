import { Component } from '@angular/core';
import { SearchService } from '../search.service';
import { ResultsItem } from '../results-item';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  loading: boolean = false;
  searchResults = new Array<ResultsItem>();
  constructor(private searchService: SearchService) {}

  searchform = new FormGroup({
    search: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  get searchControls() {
    return this.searchform.controls;
  }

  doSearch(searchTerm: string) {
    this.loading = true;
    this.searchService.search(searchTerm).subscribe((response) => {
      this.searchResults = response.results.map(
        (result: any) =>
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
