import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterstitalComponent } from './interstital.component';

describe('InterstitalComponent', () => {
  let component: InterstitalComponent;
  let fixture: ComponentFixture<InterstitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterstitalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterstitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
