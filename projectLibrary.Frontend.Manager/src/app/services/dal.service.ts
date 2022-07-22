import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookModel } from '../models/BookModel';
import { LanguageModel } from '../models/LanguageModel';

@Injectable({
  providedIn: 'root'
})
export class DalService {

  constructor(
    private http: HttpClient
  ) { }



  getBook(){
    return this.http.get<BookModel[]>("https://localhost:7143/api/Book");
    }

    getLanguage() {
      return this.http.get<LanguageModel[]>("https://localhost:7143/api/Language");
    }
    
}
