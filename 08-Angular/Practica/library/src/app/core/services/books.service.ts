import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from '../../../environments/environment.development'
import { Item, Welcome } from '../interfaces/book'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private http: HttpClient) {}

  getBooks(book: string): Observable<Welcome> {
    return this.http.get<Welcome>(
      `${environment.apiURL}?q=${book.replaceAll(' ', '+')}`
    )
  }

  getBook(bookID: string): Observable<Item> {
    return this.http.get<Item>(`${environment.apiURL}/${bookID}`)
  }
}
