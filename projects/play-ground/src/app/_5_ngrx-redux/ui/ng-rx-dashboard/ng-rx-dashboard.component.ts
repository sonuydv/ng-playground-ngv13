import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {decrement, increment, reset } from '../../state/action/counter.action';
import {isBookLoading, selectBookCollection, selectBooks} from "../../state/selector/books.selector";
import {BooksActions, BooksApiActions} from "../../state/action/books.action";
import {BookApi} from "../../data/api/book.api";

@Component({
  selector: 'app-ng-rx-dashboard',
  templateUrl: './ng-rx-dashboard.component.html',
  styleUrls: ['./ng-rx-dashboard.component.scss']
})
export class NgRxDashboardComponent implements OnInit {

  count$: Observable<number>

  books$ = this.store.select(selectBooks)
  isLoading$ = this.store.select(isBookLoading)
  collection$ = this.store.select(selectBookCollection)
  constructor(
    private store: Store<{count: number}>,
  ) {
    this.count$ = store.select('count')
  }

  ngOnInit(): void {
    this.store.dispatch(BooksApiActions.fetchBookList())
  }

  addBook(bookId: string){
    this.store.dispatch(BooksActions.addBook({bookId}))
  }

  removeBook(bookId: string){
    this.store.dispatch(BooksActions.removeBook({bookId}))
  }
  increment(){
    this.store.dispatch(increment())
  }

  decrement(){
    this.store.dispatch(decrement())
  }

  reset(){
    this.store.dispatch(reset())
  }

}
