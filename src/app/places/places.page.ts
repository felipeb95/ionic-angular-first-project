import { Component, OnInit } from '@angular/core';
import { PlacesService } from './places.service';
import { Place } from './place.model';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {

  places = [];

  constructor(private placesService: PlacesService) { }

  ngOnInit() {
    this.places = this.placesService.getPlaces();
  }

  ionViewWillEnter() {
    this.places = this.placesService.getPlaces();
  }

}
