import {HttpClient} from "@angular/common/http";
import {delay, map, Observable} from "rxjs";
import {Book} from "../model/book.model";
import {Injectable} from "@angular/core";

@Injectable()
export class BookApi{
  constructor(
    private http: HttpClient
  ) {
  }


  getBooks(): Observable<Array<Book>> {
    return this.http
      .get<{ items: Book[] }>(
        'https://www.googleapis.com/books/v1/volumes?maxResults=5&orderBy=relevance&q=oliver%20sacks'
      )
      .pipe(
        delay(3000),
        map((books) => books.items || []));
  }

}
