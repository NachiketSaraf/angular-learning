import { Injectable } from '@angular/core';
import { Profile } from '../../model/profile.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private profiles : Profile []= [];
  private updatedPofiles = new Subject<Profile[]>()

  getProfile(){
    return[...this.profiles]
  }
  getUpdatedProfles(){
    return this.updatedPofiles.asObservable();
  }
  addProfile(name:string,content:string){
    const prfle : Profile = {
      id :null,
      userName : name,
      userContent: content
    }
    this.profiles.push(prfle)
    this.updatedPofiles.next([...this.profiles]);
  }

}
