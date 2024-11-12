import { Component, OnInit } from '@angular/core'
import { AsyncPipe, NgOptimizedImage } from '@angular/common'
import { ActivatedRoute } from '@angular/router'
import { BooksService } from '../../core/services/books.service'
import { Item } from '../../core/interfaces/book'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-book-info',
  standalone: true,
  imports: [AsyncPipe, NgOptimizedImage],
  templateUrl: './book-info.component.html',
  styleUrl: './book-info.component.css',
})
export class BookInfoComponent implements OnInit {
  public bookResult$!: Observable<Item>

  constructor(private route: ActivatedRoute, private service: BooksService) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const itemId = params.get('id')
      this.bookResult$ = this.service.getBook(itemId!)
    })
  }
}
