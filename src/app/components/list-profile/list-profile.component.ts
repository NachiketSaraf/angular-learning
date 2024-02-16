import { Component, Input, OnDestroy, OnInit, input } from '@angular/core';
import { Profile } from '../../model/profile.model'
import { Subscription } from 'rxjs';
import { ProfileService } from '../../service/profileService/profile.service';
import { threadId } from 'worker_threads';
import { profile } from 'console';

@Component({
  selector: 'app-list-profile',
  templateUrl: './list-profile.component.html',
  styleUrl: './list-profile.component.css'
})


export class ListProfileComponent implements OnInit,OnDestroy {
  // @Input() profiles: Profile[] =[];

  public profiles: Profile[] = [];
  private postSub!: Subscription; 

  constructor(public profileService: ProfileService) {
  } 

  ngOnInit(): void {
    this.profiles = this.profileService.getProfile();
    this.postSub = this.profileService.getUpdatedProfles()
    .subscribe((updateProfileArr : Profile[]) =>{
      this.profiles = updateProfileArr;
    })
  } 
  
  ngOnDestroy(): void {
    this.postSub.unsubscribe;
  }

}
