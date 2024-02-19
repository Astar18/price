import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaPrecioComponent } from './consulta-precio.component';

describe('ConsultaPrecioComponent', () => {
  let component: ConsultaPrecioComponent;
  let fixture: ComponentFixture<ConsultaPrecioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsultaPrecioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultaPrecioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
