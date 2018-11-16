import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AnnonceService {

    constructor(private http: Http) {
        console.log("Annonce Service");
    }

    getAnnonces() {
        return this.http.get('assets/annonces.json').map(res => res.json());
    }
}