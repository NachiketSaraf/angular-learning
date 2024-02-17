import { Component, OnInit } from '@angular/core';
import { ToursService } from '../../../service/toursService/tours.service';
import { Tour } from '../../../model/tour.model';

@Component({
  selector: 'app-tours-list',
  templateUrl: './tours-list.component.html',
  styleUrl: './tours-list.component.css'
})
export class ToursListComponent implements OnInit {

  tourArr: Tour[] = [];

  constructor(public tourService: ToursService) {
  }
  ngOnInit() {
    this.getTours();
  }
  getTours() {  
    this.tourService.getTours()
      .subscribe(res => {
        this.tourArr = res.data.tours;
      }
      )
    console.log(this.tourArr);
  }
  deleteTour(tourId: string) {
    this.tourService.deleteTour(tourId).subscribe(() => {
      this.getTours();

    });
  }
}
