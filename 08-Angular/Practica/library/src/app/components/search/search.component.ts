import { Component, EventEmitter, Output } from '@angular/core'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  public searchBook = ''

  @Output() termBook = new EventEmitter<string>()

  onClick() {
    this.termBook.emit(this.searchBook)
  }
}
