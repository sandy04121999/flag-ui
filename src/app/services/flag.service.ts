import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class FlagService {

    constructor(private http: HttpClient) {}

  evaluate(key: string, region: string):Observable<boolean> {
    return this.http.get<boolean>(
      `http://localhost:5000/api/features/evaluate?key=${key}&region=${region}`
    );
  }

}
