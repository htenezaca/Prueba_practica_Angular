/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import faker from '@faker-js/faker';

import { Vehiculo } from '../vehiculo';
import { ListarVehiculoComponent } from './listar-vehiculo.component';

describe('ListarVehiculoComponent', () => {
  let component: ListarVehiculoComponent;
  let fixture: ComponentFixture<ListarVehiculoComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListarVehiculoComponent],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarVehiculoComponent);
    component = fixture.componentInstance;
    let vehiculos: Vehiculo[] = [];

    for (let index = 1; index <= 3; index++) {
      vehiculos.push(new Vehiculo(
        index,
        faker.vehicle.manufacturer(),
        faker.vehicle.model(),
        faker.vehicle.type(),
        faker.random.number({ min: 1970, max: 2022 }),
        faker.random.number({ min: 0, max: 200000 }),
        faker.commerce.color(),
        faker.image.imageUrl()
      ));
    }

    component.vehiculos = vehiculos;
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should has correct number of rows (3 rows of vehicles and header) ', () => {
    fixture.detectChanges();
    const rowDebugElements = debug.queryAll(By.css('table tr'));
    expect(rowDebugElements.length).toBe(4);
  });
});
