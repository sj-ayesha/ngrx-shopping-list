import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { ShoppingActionTypes,
  LoadShoppingAction, LoadShoppingActionSuccess, LoadShoppingActionFailure,
  AddItemAction, AddItemActionSuccess, AddItemActionFailure,
  DeleteItemAction, DeleteItemActionSucces, DeleteItemActionFailure } from '../actions/shopping.actions';

import { ShoppingService } from 'src/app/shopping.service';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class ShoppingEffects {

  @Effect() loadShopping$ = this.actions$
    .pipe(
      ofType<LoadShoppingAction>(ShoppingActionTypes.LOAD_SHOPPING),
      mergeMap(
        () => this.shoppingService.getShoppingItems()
          .pipe(
            map(data => {
              return new LoadShoppingActionSuccess(data)
            }),
            catchError(error => of(new LoadShoppingActionFailure(error)))
          )
      )
    )

  @Effect() addShoppingItem$ = this.actions$
    .pipe(
      ofType<AddItemAction>(ShoppingActionTypes.ADD_ITEM),
      mergeMap(
        (data) => this.shoppingService.addShoppingItem(data.payload)
          .pipe(
            map(() => new AddItemActionSuccess(data.payload)),
            catchError(error => of(new AddItemActionFailure(error)))
          )
      )
    )

  @Effect() deleteShoppingItem$ = this.actions$
    .pipe(
      ofType<DeleteItemAction>(ShoppingActionTypes.DELETE_ITEM),
      mergeMap(
        (data) => this.shoppingService.deleteShoppingItem(data.payload)
          .pipe(
            map(() => new DeleteItemActionSucces(data.payload)),
            catchError(error => of(new DeleteItemActionFailure(error)))
          )
      )
    )

  constructor(private actions$: Actions, private shoppingService: ShoppingService) { }
}
