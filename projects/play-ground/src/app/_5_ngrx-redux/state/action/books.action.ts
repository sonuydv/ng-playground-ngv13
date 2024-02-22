import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {Book} from "../../data/model/book.model";
import {BookState} from "../reducer/books.reducer";


export const BooksActions = createActionGroup({
  source: 'Books',
  events: {
    'Add Book' : props<{bookId: string}>(),
    'Remove Book' : props<{bookId: string}>()
  }
})


export const BooksApiActions = createActionGroup({
  source: 'Books API',
  events: {
    'Fetch Book List' : emptyProps(),
    'Retrieve Book List' : props<BookState>(),

  }
})
