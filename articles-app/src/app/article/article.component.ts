import { Component, OnInit, Input } from '@angular/core';
import {Article} from '../models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  private symbols = 250;
  @Input() article: Article;
  @Input() articleDesc: string;
  descToShow: string;
  articleDescLen: number;
  showReadMoreBtn = true;
  showHideBtn =  false;
  imageIsShown = false;
  imageButtonTitle = 'Show Image';


  constructor() {
    this.articleDescLen = 0;
    this.descToShow = '';
  }

  readMore(): void {
    this.articleDescLen += this.symbols;
    if (this.articleDescLen >= this.articleDesc.length) {
      this.showReadMoreBtn = false;
      this.showHideBtn = true;
    } else {
      this.descToShow = this.articleDesc.substring(0, this.articleDescLen);
    }
  }

  toggleImage(): void {
    this.imageIsShown = !this.imageIsShown;
    this.imageButtonTitle = this.imageButtonTitle === 'Show Image'
    ? 'Hide Image' : 'Show Image';
  }

  hideDesc(): void {
    this.articleDescLen = 0;
    this.showReadMoreBtn = true;
    this.showHideBtn = false;
    this.descToShow = '';

  }

  ngOnInit() {
  }

}
