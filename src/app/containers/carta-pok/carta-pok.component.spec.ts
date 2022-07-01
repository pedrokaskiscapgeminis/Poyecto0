import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaPokComponent } from './carta-pok.component';

describe('CartaPokComponent', () => {
  let component: CartaPokComponent;
  let fixture: ComponentFixture<CartaPokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartaPokComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartaPokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
