import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingEditComponent } from '../shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from '../shopping-list.component';
import { RouterModule } from '@angular/router';
import { ShoppingListRouterModule } from '../shopping-list-router/shopping-list-router.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent,
  ],
  imports: [
   
    RouterModule,
    ShoppingListRouterModule,
    FormsModule,
    SharedModule,
    CommonModule
  ]
})
export class ShoppingListModule { }
