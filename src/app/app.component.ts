import { Component } from '@angular/core';
import { Profile } from './model/profile.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'learning-angular';
  
  storedProfile: Profile[]=[];

  addProfile(p:Profile){
    this.storedProfile.push(p) 
  }
}
