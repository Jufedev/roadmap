import { Component, OnInit } from '@angular/core'
import { elementAt, Observable } from 'rxjs'
import { Item, Welcome } from '../../core/interfaces/book'
import { BooksService } from '../../core/services/books.service'
import { AsyncPipe } from '@angular/common'
import { BookComponent } from '../../components/book/book.component'
import { SearchComponent } from '../../components/search/search.component'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [AsyncPipe, SearchComponent, BookComponent, FormsModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
})
export class BookListComponent {
  public bookResults$!: Observable<Welcome>
  constructor(private service: BooksService) {}
  public bookItems: Item[] = []

  public filteredData = this.bookResults$
  public filteredDataItems: Item[] = []

  public maximoPaginas = 0
  public minimoPaginas = 0

  receiveTermBook($event: string) {
    this.bookResults$ = this.service.getBooks($event)
    this.bookResults$.subscribe((element) => {
      this.getMaxMinPages(element.items!)
      this.bookItems = element.items!
    })
    this.filteredDataItems = []
  }

  sortByPublishedDate(dataItems: Item[], ascending: boolean) {
    const getDate = (item: Item) =>
      item.volumeInfo.publishedDate
        ? new Date(item.volumeInfo.publishedDate)
        : null

    dataItems.sort((a, b) => {
      const dateA = getDate(a)
      const dateB = getDate(b)

      if (dateA && dateB) {
        return ascending
          ? dateA.getTime() - dateB.getTime()
          : dateB.getTime() - dateA.getTime()
      } else {
        return dateA ? (ascending ? -1 : 1) : dateB ? (ascending ? 1 : -1) : 0
      }
    })
  }

  getMaxMinPages(resultObject: Item[]) {
    let paginas: number[] = []

    resultObject.forEach((element) => {
      if (element.volumeInfo.pageCount) {
        paginas.push(element.volumeInfo.pageCount)
      }
    })

    this.maximoPaginas = Math.max(...paginas)
    this.minimoPaginas = Math.min(...paginas)
  }

  onInputChange(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value

    this.filteredDataItems = []

    const items = this.bookItems.filter((item) => {
      const pageCount = item.volumeInfo.pageCount
      return pageCount !== undefined && pageCount > parseInt(inputValue)
    })

    this.filteredDataItems = items
  }
}
