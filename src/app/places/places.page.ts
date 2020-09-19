import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {

  places = [
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
  ];

  constructor() { }

  ngOnInit() {
  }

}
