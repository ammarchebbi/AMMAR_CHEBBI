import { Component, OnInit } from '@angular/core';
import { Article } from './models/article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';
  listArticle: Article[]
  ngOnInit() {
    this.listArticle = [
      { titre: "Le champion du monde", auteur: "Med Taher", contenu: "le champion du mode", date: "12/12/2005" },
      { titre: "Le champion du monde", auteur: "Med Taher", contenu: "le champion du mode", date: "12/12/2005" },
      { titre: "Le champion du monde", auteur: "Med Taher", contenu: "le champion du mode", date: "12/12/2005" },
      { titre: "Le champion du monde", auteur: "Med Taher", contenu: "le champion du mode", date: "12/12/2005" }
    ]
  }
}
