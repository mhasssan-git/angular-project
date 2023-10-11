import {
  Component,
  ViewChild,
  ElementRef,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgFor } from '@angular/common';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editItem: Ingredient;
  constructor(private shoppingService: ShoppingListService) {}
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  ngOnInit(): void {
    this.subscription = this.shoppingService.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedItemIndex = index;
        this.editItem = this.shoppingService.getIngredient(index);
        this.slForm.setValue({
          name: this.editItem.name,
          amount: this.editItem.amount,
        });
      }
    );
  }
  onSubmit({ form }: { form: NgForm; }) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode)
      this.shoppingService.updateIngredient(
        this.editedItemIndex,
        newIngredient
      );
    else this.shoppingService.addIngredient(newIngredient);
    this.slForm.reset();
    this.editMode = false;
  }
  onDelete()
  {
    this.shoppingService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }
  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }
}
