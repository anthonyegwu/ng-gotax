import { Injectable, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GotaxConfig } from './gotax.module';

@Injectable({
  providedIn: 'root',
})
export class OrganizationService {
  baseUrl: string = 'http://3.130.118.251:8092/v1';

  constructor(private http: HttpClient, @Optional() config: GotaxConfig) {
    if (config) {
      this.baseUrl = config.userServiceUrl;
    }
  }
}
