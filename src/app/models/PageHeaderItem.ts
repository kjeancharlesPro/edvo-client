export class PageHeaderItem {
  id: number;
  url: string;
  header: string;
  subheader: string;
  imageUrl: string;

  constructor(
    id: number,
    url: string,
    header: string,
    subheader: string,
    imageUrl: string
  ) {
    this.id = id;
    this.url = url;
    this.header = header;
    this.subheader = subheader;
    this.imageUrl = imageUrl;
  }
}
