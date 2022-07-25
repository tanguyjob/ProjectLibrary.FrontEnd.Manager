
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { AuthorModel } from '../models/AuthorModel';
import { Subscription, Subject } from 'rxjs';
import { DalService } from '../services/dal.service';
@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  subscr!: Subscription;
  authors:AuthorModel[]=[];
  constructor(
    private dal:DalService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.subscr = this.dal.getAuthor().subscribe(
      (value)=>
      {
      this.authors=value;
      }
      );
  }

  ngOnDestroy():void {
    this.subscr.unsubscribe();
  }

  create() {
    this.router.navigate(['create-author']);
    }
}
