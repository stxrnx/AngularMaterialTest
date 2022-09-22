import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestfidAppComponent } from './gestfid-app.component';

describe('GestfidAppComponent', () => {
  let component: GestfidAppComponent;
  let fixture: ComponentFixture<GestfidAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestfidAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestfidAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
