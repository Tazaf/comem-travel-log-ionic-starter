import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TripListPage } from './trip-list.page';

describe('TripListPage', () => {
  let component: TripListPage;
  let fixture: ComponentFixture<TripListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TripListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
