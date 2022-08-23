import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { BookModel } from '../models/BookModel';
import { Subscription, Subject } from 'rxjs';
import { DalService } from '../services/dal.service';
//https://ng-bootstrap.github.io/#/components/table/examples
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
   subscr!: Subscription;
   books:BookModel[]=[];
  constructor(
     private dal:DalService,
     private router: Router
  ) { }
  
  create() {
    this.router.navigate(['create-book']);
    }
  bind() {
      this.router.navigate(['create-binding']);
      }
  ngOnInit(): void {
    this.subscr = this.dal.getBook().subscribe(
      (value)=>
      {
      this.books=value;
      }
      );
    }

    ngOnDestroy():void {
      this.subscr.unsubscribe();
    }
  }


