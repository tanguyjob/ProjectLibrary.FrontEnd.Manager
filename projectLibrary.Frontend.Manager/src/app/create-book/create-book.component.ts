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
    this.myForm = this.fb.group({
      title:'',
      resume:'',
      publicationDate:'',
      languageId:[null]
    });

    this.subscr = this.dal.getLanguage().subscribe(
      (value)=>this.languages=value
    );  
  }

  ngOnDestroy() {
    this.subscr.unsubscribe();
  }

  onSubmit(form: FormGroup) {
    let mybook = new BookModel(form.value.title, form.value.resume,form.value.publicationDate, form.value.languageId);

    // console.log("ma langue",form.value.language);
    // this.subscr=this.baSrv.postBook2(mybook).subscribe(
    //     () => {
    //       this.router.navigate(['/home']);
    //     }
    //   );
    // console.log('Valid?', form.valid); // true or false
    // console.log('title', form.value.title);

  }
}


