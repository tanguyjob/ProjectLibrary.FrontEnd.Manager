import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BookComponent } from './book/book.component';
import { RouterModule } from '@angular/router';
import { CreateBookComponent } from './create-book/create-book.component';
import { AuthorComponent } from './author/author.component';
import { CreateAuthorComponent } from './create-author/create-author.component';
import { CreateBindingBookAuthorComponent } from './create-binding-book-author/create-binding-book-author.component';
// utiliser angular-bootstrap

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    BookComponent,
    CreateBookComponent,
    AuthorComponent,
    CreateAuthorComponent,
    CreateBindingBookAuthorComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: BookComponent },
      { path: 'book', component: BookComponent},
      { path: 'create-book', component: CreateBookComponent},
      { path: 'author', component: AuthorComponent},
      { path: 'create-author', component: CreateAuthorComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
