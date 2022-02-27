/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ModalityService } from './modality.service';

describe('Service: Modality', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModalityService]
    });
  });

  it('should ...', inject([ModalityService], (service: ModalityService) => {
    expect(service).toBeTruthy();
  }));
});
