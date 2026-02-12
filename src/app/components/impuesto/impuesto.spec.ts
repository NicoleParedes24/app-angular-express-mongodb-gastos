import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Impuesto } from './impuesto';

describe('Impuesto', () => {
  let component: Impuesto;
  let fixture: ComponentFixture<Impuesto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Impuesto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Impuesto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
