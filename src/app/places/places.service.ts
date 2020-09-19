import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  places: Place[] = [
    {
      id: '1',
      title: 'Eiffel tower',
      imageURL: 'https://i.pinimg.com/originals/d0/3e/2f/d03e2f00438ab794cb0769791358070a.jpg',
      comments: ['Awesome place', 'Great experience']
    },
    {
      id: '2',
      title: 'Statue of liberty',
      imageURL: 'https://www.statueofliberty.org/wp-content/uploads/2020/03/img-landing-liberty@2x.jpg',
      comments: ['Wow', 'Amazing!']
    },
    {
      id: '3',
      title: 'Giza pyramids',
      imageURL: 'https://images.immediate.co.uk/production/volatile/sites/7/2019/07/33-GettyImages-154260931-216706f.jpg?quality=90&resize=768%2C574',
      comments: []
    },
  ];

  constructor() { }

  getPlaces() {
    return [...this.places];
  }

  getPlace(placeId: string) {
    return {...this.places.find(place => place.id === placeId)};
  }

  addPlace(title: string, imageURL: string) {
    this.places.push({
      title,
      imageURL,
      id: parseInt(this.places.slice(-1)[0].id, 10) + 1 + '',
      comments: []
    });
  }

  deletePlace(placeId: string) {
    this.places = this.places.filter(place => place.id !== placeId);
  }

}
