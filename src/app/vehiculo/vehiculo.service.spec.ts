/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import { VehiculoService } from './vehiculo.service';

describe('Service: Vehiculo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VehiculoService],
      imports: [HttpClientTestingModule],
    });
  });

  it('should ...', inject([VehiculoService], (service: VehiculoService) => {
    expect(service).toBeTruthy();
  }));
});
