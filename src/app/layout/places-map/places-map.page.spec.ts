import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlacesMapPage } from './places-map.page';

describe('PlacesMapPage', () => {
  let component: PlacesMapPage;
  let fixture: ComponentFixture<PlacesMapPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PlacesMapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
