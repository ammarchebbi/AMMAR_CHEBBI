import { Component, OnInit } from '@angular/core';
import { Annonce } from '../../models/annonce';
import { AnnonceService } from '../../services/annonce.service';

@Component({
  selector: 'app-list-annonces',
  templateUrl: './list-annonces.component.html',
  styleUrls: ['./list-annonces.component.css'],
  providers: [AnnonceService]

})
export class ListAnnoncesComponent implements OnInit {
  listAnnonces : Annonce[];
  constructor(private annonceService: AnnonceService) { }

  ngOnInit() {
    this.annonceService.getAnnonces().subscribe((data) => {
      console.log(data);
      this.listAnnonces = data;
    });

  }

}
