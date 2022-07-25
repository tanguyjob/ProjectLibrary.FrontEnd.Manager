import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';

import { AuthorModel } from '../models/AuthorModel';
import { Router } from '@angular/router';

import { LanguageModel } from '../models/LanguageModel';
import { Subscription } from 'rxjs';
import { DalService } from '../services/dal.service';
@Component({
  selector: 'app-create-author',
  templateUrl: './create-author.component.html',
  styleUrls: ['./create-author.component.css']
})
export class CreateAuthorComponent implements OnInit {
  subscr!:Subscription;
  myForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private dal: DalService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name:'',
      firstname:'',
      birthdate:''
    });
  }

  ngOnDestroy() {
    this.subscr.unsubscribe();
  }

  onSubmit(form: FormGroup) {
    let myAuthor = new AuthorModel();
    myAuthor.name=form.value.name;
    myAuthor.firstname = form.value.firstname;
    myAuthor.birthdate = form.value.birthdate;
    this.subscr=this.dal.postAuthor(myAuthor).subscribe(
          () => {
            this.router.navigate(['/author']);
          }
        );}
  }

