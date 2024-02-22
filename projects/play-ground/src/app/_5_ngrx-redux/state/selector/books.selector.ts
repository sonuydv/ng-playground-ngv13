import {createFeatureSelector, createSelector} from "@ngrx/store";
import {BookState} from "../reducer/books.reducer";


/**Retrieve books table*/
export const selectBooks = createFeatureSelector<
  BookState
>('books')


export const isBookLoading = createSelector(
  selectBooks,
  (bookState) => {
    console.log(bookState.isLoading)
    return bookState.isLoading
  }
)

/**Retrieve book collection table*/
export const selectCollectionState = createFeatureSelector<
  ReadonlyArray<string>
>('collection')


/**Retrieve all books of which are added in collection*/
export const selectBookCollection = createSelector(
  selectBooks,
  selectCollectionState,
  (books, collection) => {
    return collection.map(id => books.payload.find(book => book.id === id)!)
  }
)



