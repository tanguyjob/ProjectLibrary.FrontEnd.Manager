import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { BookAuthorModel } from '../models/BookAuthorModel';
import { BookModel } from '../models/BookModel';
import { AuthorModel } from '../models/AuthorModel';
import { DalService } from '../services/dal.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create-binding-book-author',
  templateUrl: './create-binding-book-author.component.html',
  styleUrls: ['./create-binding-book-author.component.css']
})
export class CreateBindingBookAuthorComponent implements OnInit {
  subscr!:Subscription;
  myForm!: FormGroup;
  books: BookModel[]=[];
  authors: AuthorModel[]=[];

  constructor(
    private fb: FormBuilder,
    private dal: DalService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
    book:[null],
    author:[null]
    });

  this.subscr = this.dal.getBook().subscribe(
    (value)=>this.books=value
  ); 

  this.subscr = this.dal.getAuthors().subscribe(
    (value)=>this.authors=value
  ); 

    }


  ngOnDelete() {
    this.subscr.unsubscribe();
  }

  onSubmit(form: FormGroup) {

  let myba = new BookAuthorModel();
  myba.bookId = form.value.book;
  myba.authorId = form.value.author;

  this.subscr=this.dal.postBookAuthor(myba).subscribe(
          () => {
            this.router.navigate(['/home']);
          }
        );

  console.log('book', form.value.book);
  console.log('auteur', form.value.author);
  


    }
}

