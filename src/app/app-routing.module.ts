import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostProfileComponent } from './components/post-profile/post-profile.component';
import { InputComponent } from './components/input/input.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';

const routes: Routes = [
  {
    path: "post",
    component: PostProfileComponent
  },
  {
    path:"input",
    component: InputComponent
  },
  {
    path:"reactive",
    component:ReactiveFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
