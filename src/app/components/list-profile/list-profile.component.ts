import { Component, Input, input } from '@angular/core';
import {profile} from '../../model/profile.model'
@Component({
  selector: 'app-list-profile',
  templateUrl: './list-profile.component.html',
  styleUrl: './list-profile.component.css'
})


export class ListProfileComponent {

@Input() profiles: profile[] =[];

}
