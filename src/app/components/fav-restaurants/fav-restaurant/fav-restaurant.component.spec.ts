import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavRestaurantComponent } from './fav-restaurant.component';

describe('FavRestaurantComponent', () => {
  let component: FavRestaurantComponent;
  let fixture: ComponentFixture<FavRestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavRestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
