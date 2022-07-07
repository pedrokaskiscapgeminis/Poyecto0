import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/models/app.state';
import { selectItems } from 'src/app/state/selectors/carrito.selectors';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})

export class NavMenuComponent implements OnInit {
  @Input() counter: number = 0;
  

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select(selectItems).subscribe((item) => {
      this.counter = item;
    });
  }

}
