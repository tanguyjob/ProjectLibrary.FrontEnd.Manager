import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { BookModel } from '../models/BookModel';
import { Router } from '@angular/router';

//import { LanguageModel } from '../models/LanguageModel';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
