import {Component, EventEmitter, Output} from '@angular/core';
import {Profile} from '../../model/profile.model';
import {NgForm} from '@angular/forms';
import { ProfileService } from '../../service/profileService/profile.service';
@Component({
  selector: 'app-post-profile',
  templateUrl: './post-profile.component.html',
  styleUrl: './post-profile.component.css',
})
export class PostProfileComponent {
  // inputName = "";
  // inputContent="";

  // @Output() createdProfile = new EventEmitter();

  constructor(public profileService: ProfileService) {

  }

  profileData(userForm: NgForm) {
    if (userForm.invalid) {
      return;
    }
    this.profileService.addProfile(userForm.value.inputName,userForm.value.inputContent);
    userForm.resetForm();

    // const userProfile: Profile ={
    //
    //   userName: userForm.value.inputName,
    //   userContent: userForm.value.inputContent
    // }
    // console.log(userProfile);
    // this.createdProfile.emit(userProfile);
  }
}
