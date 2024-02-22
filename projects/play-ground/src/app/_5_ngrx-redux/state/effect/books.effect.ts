import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {BookApi} from "../../data/api/book.api";
import {BooksActions, BooksApiActions} from "../action/books.action";
import {catchError, map, mergeMap} from "rxjs";


@Injectable()
export class BooksEffect{

  constructor(
    private actions$ : Actions,
    private bookApi: BookApi
  ) {
  }


  @Effect()
  loadBooks$ = this.actions$
    .pipe(
      ofType(BooksApiActions.fetchBookList.type),
      mergeMap(()=> this.bookApi.getBooks()
        .pipe(
          map(books => BooksApiActions.retrieveBookList({isLoading: false,payload: books}))
        ),
        // catchError(error => {
        //   // BooksApiActions.retrieveBookList({isLoading: false,payload: []})
        //   return error
        // })
      )
    )


}
