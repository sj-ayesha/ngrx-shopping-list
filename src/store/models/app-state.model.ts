import { ShoppingItem } from './shopping-item.models';

export interface AppState {
  readonly shopping: Array<ShoppingItem>
};
