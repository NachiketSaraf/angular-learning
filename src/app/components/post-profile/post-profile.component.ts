import { Component,EventEmitter,Output } from '@angular/core';
import { profile } from '../../model/profile.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-profile',
  templateUrl: './post-profile.component.html',
  styleUrl: './post-profile.component.css',
})
export class PostProfileComponent {
  // inputName = "";
  // inputContent="";

  @Output() createdProfile = new EventEmitter();

  profileData(userForm:NgForm) {
    if(userForm.invalid){
      return;
    }
    const userProfile: profile ={
      userName: userForm.value.inputName,
      userContent: userForm.value.inputContent
    }
    console.log(userProfile);
    this.createdProfile.emit(userProfile);
  } 
}
