import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { ShoppingListComponent } from '../shopping-list.component';

const routs:Route[]=[
  { path: 'shopping-list', component: ShoppingListComponent },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routs)
  ],
  exports:[RouterModule]
})
export class ShoppingListRouterModule { }
