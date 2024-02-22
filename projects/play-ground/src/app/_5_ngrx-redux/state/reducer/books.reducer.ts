import {Book} from "../../data/model/book.model";
import {createReducer, on} from "@ngrx/store";
import {BooksApiActions} from "../action/books.action";

export interface BookState{
  isLoading: boolean
  payload: ReadonlyArray<Book>
}

export const initialState: BookState = {
  isLoading : false,
  payload : []
}


export const booksReducer = createReducer(
  initialState,
  on(BooksApiActions.fetchBookList , (state,action) => {
    return {...state , isLoading:true}
  }),
  on(BooksApiActions.retrieveBookList, (state, bookState) => bookState )
)

