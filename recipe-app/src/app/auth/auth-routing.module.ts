import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'auth',
        component: AuthComponent,
      },
    ])
  ],
  exports:[RouterModule]
})
export class AuthRoutingModule { }
