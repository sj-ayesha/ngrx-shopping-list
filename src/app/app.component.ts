import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/store/models/app-state.model';
import { Observable } from 'rxjs';
import { ShoppingItem } from 'src/store/models/shopping-item.models';
import { AddItemAction } from 'src/store/actions/shopping.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ngrx-shopping-list';

  shoppingItems$: Observable<Array<ShoppingItem>>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.shoppingItems$ = this.store.select(store => store.shopping);

    setTimeout(() => {
      this.addItem();
    }, 2000);
  }

  addItem() {
    this.store.dispatch(new AddItemAction({id: '123', name: 'Dr Pepper'}));
  }
}
