import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationTabComponent } from './navigation-tab.component';

describe('NavigationTabComponent', () => {
  let component: NavigationTabComponent;
  let fixture: ComponentFixture<NavigationTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
