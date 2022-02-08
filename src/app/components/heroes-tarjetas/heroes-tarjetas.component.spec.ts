import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesTarjetasComponent } from './heroes-tarjetas.component';

describe('HeroesTarjetasComponent', () => {
  let component: HeroesTarjetasComponent;
  let fixture: ComponentFixture<HeroesTarjetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesTarjetasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesTarjetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
