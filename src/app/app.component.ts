import { Component } from '@angular/core';
import { profile } from './model/profile.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'learning-angular';
  
  storedProfile: profile[]=[];

  addProfile(p:profile){
    this.storedProfile.push(p) 
  }
}
