import { Component, Input } from '@angular/core'
import { Item } from '../../core/interfaces/book'
import { NgOptimizedImage } from '@angular/common'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css',
})
export class BookComponent {
  @Input() bookInfo!: Item
}
