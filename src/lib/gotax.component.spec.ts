import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GotaxComponent } from './gotax.component';

describe('GotaxComponent', () => {
  let component: GotaxComponent;
  let fixture: ComponentFixture<GotaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GotaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GotaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
