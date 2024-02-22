import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgRxDashboardComponent } from './ui/ng-rx-dashboard/ng-rx-dashboard.component';
import {RouterModule, Routes} from "@angular/router";
import {StoreModule} from "@ngrx/store";
import {counterReducer} from "./state/reducer/count.reducer";
import {MatButtonModule} from "@angular/material/button";
import {booksReducer} from "./state/reducer/books.reducer";
import {HttpClientModule} from "@angular/common/http";
import {collectionReducer} from "./state/reducer/collection.reducer";
import { BookListComponent } from './ui/book-list/book-list.component';
import { BookCollectionComponent } from './ui/book-collection/book-collection.component';
import {BookApi} from "./data/api/book.api";
import {MatCardModule} from "@angular/material/card";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../../environments/environment.prod";
import {EffectsModule} from "@ngrx/effects";
import {BooksEffect} from "./state/effect/books.effect";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";


const routes : Routes = [
  {
    path: '',
    component: NgRxDashboardComponent
  }
]

@NgModule({
  declarations: [
    NgRxDashboardComponent,
    BookListComponent,
    BookCollectionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forRoot({count: counterReducer, books: booksReducer, collection: collectionReducer}),
    EffectsModule.forRoot([BooksEffect]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    MatButtonModule,
    HttpClientModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  providers: [BookApi]
})
export class NgRxReduxModule { }
