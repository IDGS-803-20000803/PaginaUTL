import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarSomosComponent } from './nav-bar-somos.component';

describe('NavBarSomosComponent', () => {
  let component: NavBarSomosComponent;
  let fixture: ComponentFixture<NavBarSomosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavBarSomosComponent]
    });
    fixture = TestBed.createComponent(NavBarSomosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
