import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ShoppingListPage } from './shopping-list';
import { ShoppingListPageRoutingModule } from './shopping-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ShoppingListPageRoutingModule
  ],
  declarations: [ShoppingListPage],
})
export class ShoppingListModule {}
