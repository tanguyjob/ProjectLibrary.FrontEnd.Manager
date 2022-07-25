import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookModel } from '../models/BookModel';
import { LanguageModel } from '../models/LanguageModel';
import { AuthorModel } from '../models/AuthorModel';

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

    postBook(book: BookModel) {
      return this.http.post("https://localhost:7143/api/Book",book);
    }

    getLanguage() {
      return this.http.get<LanguageModel[]>("https://localhost:7143/api/Language");
    }

    getAuthor() {
      return this.http.get<AuthorModel[]>("https://localhost:7143/api/Author");
    }
    
    postAuthor(author:AuthorModel) {
      return this.http.post<AuthorModel[]>("https://localhost:7143/api/Author",author);
    }

    
}
