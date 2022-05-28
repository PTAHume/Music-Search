import {ResultItem} from './interfaces/result-item'

export class ResultsItem implements ResultItem {
  constructor(
    public artworkUrl30: string,
    public trackViewUrl: string,
    public trackName: string,
  ) {}
}