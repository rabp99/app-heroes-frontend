import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private APIEndpoint = environment.APIEndpoint;
  
  constructor() { }

  getApiUrl(): string {
    return this.APIEndpoint;
  }

  getApiV1Url(): string {
    return this.APIEndpoint + '/v1';
  }
}