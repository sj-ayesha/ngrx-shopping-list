import { Action } from '@ngrx/store';
import { ShoppingItem } from '../models/shopping-item.models';

export enum ShoppingActionTypes {
  LOAD_SHOPPING = '[SHOPPING] Load Shopping',
  LOAD_SHOPPING_SUCCESS = '[SHOPPING] Load Shopping Success',
  LOAD_SHOPPING_FAILURE = '[SHOPPING] Load Shopping Failure',

  ADD_ITEM = '[SHOPPING] Add Item',
  ADD_ITEM_SUCCESS = '[SHOPPING] Add Item Success',
  ADD_ITEM_FAILURE = '[SHOPPING] Add Item Failure',

  DELETE_ITEM = '[SHOPPING] Delete Item',
  DELETE_ITEM_SUCCESS = '[SHOPPING] Delete Item Success',
  DELETE_ITEM_FAILURE = '[SHOPPING] Delete Item Failure',
}

// LOAD ACTIONS
export class LoadShoppingAction implements Action {
  readonly type = ShoppingActionTypes.LOAD_SHOPPING;
}

export class LoadShoppingActionSuccess implements Action {
  readonly type = ShoppingActionTypes.LOAD_SHOPPING_SUCCESS;

  constructor(public payload: Array<ShoppingItem>) { }
}

export class LoadShoppingActionFailure implements Action {
  readonly type = ShoppingActionTypes.LOAD_SHOPPING_FAILURE;

  constructor(public payload: Error) { }
}

// ADD ITEM ACTIONS
export class AddItemAction implements Action {
  readonly type = ShoppingActionTypes.ADD_ITEM;

  constructor(public payload: ShoppingItem) { }
}

export class AddItemActionSuccess implements Action {
  readonly type = ShoppingActionTypes.ADD_ITEM_SUCCESS;

  constructor(public payload: ShoppingItem) { }
}

export class AddItemActionFailure implements Action {
  readonly type = ShoppingActionTypes.ADD_ITEM_FAILURE;

  constructor(public payload: Error) { }
}

// DELETE ITEM ACTIONS
export class DeleteItemAction implements Action {
  readonly type = ShoppingActionTypes.DELETE_ITEM;

  // payload will be id since we are deleting according to id
  constructor(public payload: string) { }
}

export class DeleteItemActionSucces implements Action {
  readonly type = ShoppingActionTypes.DELETE_ITEM_SUCCESS;

  // payload will be id since we are deleting according to id
  constructor(public payload: string) { }
}

export class DeleteItemActionFailure implements Action {
  readonly type = ShoppingActionTypes.DELETE_ITEM_FAILURE;

  // payload will be id since we are deleting according to id
  constructor(public payload: string) { }
}

export type ShoppingAction = LoadShoppingAction | LoadShoppingActionSuccess | LoadShoppingActionFailure |
  AddItemAction | AddItemActionSuccess | AddItemActionFailure |
  DeleteItemAction | DeleteItemActionSucces | DeleteItemActionFailure;
