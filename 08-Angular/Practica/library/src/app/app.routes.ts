import { Routes } from '@angular/router'
import { BookListComponent } from './pages/book-list/book-list.component'
import { BookInfoComponent } from './pages/book-info/book-info.component'

export const routes: Routes = [
  {
    path: '',
    component: BookListComponent,
  },
  {
    path: 'book-info/:id',
    component: BookInfoComponent,
  },
]
