import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../models/article';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  @Input() nbArticle :number;
  @Input() listeArticles :Article[];

  constructor() { }

  ngOnInit() {
    console.log(this.listeArticles);
    console.log(this.nbArticle);
  }

}
