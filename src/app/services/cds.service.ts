import { Injectable } from '@angular/core';
import { CD } from '../models/cd.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CdsService {

  constructor(private http: HttpClient) { }

  getCds(): Observable<CD[]>{
    return [
    ]
  }

  getCDById(id: number): CD {
    const cd = this.getCds().find(cd => cd.id === id);
    if(cd){
      return cd;
    }
    else {
      throw new Error('CD not trouvé');
    }
  }
}
