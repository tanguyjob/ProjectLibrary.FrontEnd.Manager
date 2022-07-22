import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';

import { BookModel } from '../models/BookModel';
import { Router } from '@angular/router';

import { LanguageModel } from '../models/LanguageModel';
import { Subscription } from 'rxjs';
import { DalService } from '../services/dal.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  subscr!:Subscription;
  myForm!: FormGroup;
  languages: LanguageModel[]=[];
  constructor(
    private fb: FormBuilder,
    private dal: DalService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.subscr = this.dal.getLanguage().subscribe(
      (value)=>this.languages=value
    );  
  }

}
