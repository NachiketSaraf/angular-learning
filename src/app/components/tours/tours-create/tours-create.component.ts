import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToursService } from '../../../service/toursService/tours.service';
import { Tour } from '../../../model/tour.model';

@Component({
  selector: 'app-tours-create',
  templateUrl: './tours-create.component.html',
  styleUrl: './tours-create.component.css'
})
export class ToursCreateComponent {

  constructor(public tourService: ToursService) {
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const formData: Tour = form.value; // Partial type for optional fields
      this.tourService.postTour(formData).subscribe(res => {
        console.log(res);
      })
    };
  }

}

