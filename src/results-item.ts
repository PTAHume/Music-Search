import { ResultItem } from './interfaces/result-item';
export class ResultsItem implements ResultItem {
  constructor(
    public track: string,
    public artist: string,
    public link: string,
    public thumbnail: string,
    public artistId: string
  ) {}
}