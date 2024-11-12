/* export interface BookLinks {
  smallThumbnail: string
  thumbnail: string
}

export interface Book {
  title: string
  authors: string[]
  publishedDate: string
  description: string
  pageCount: number
  imageLinks: BookLinks
}

export interface BookInfo {
  id: string
  volumeInfo: Book
}

export interface BooksResult {
  items: BookInfo[]
} */

export interface Welcome {
  kind?: string
  totalItems?: number
  items?: Item[]
}

export interface Item {
  kind?: 'books#volume'
  id?: string
  etag?: string
  selfLink?: string
  volumeInfo: VolumeInfo
  saleInfo?: SaleInfo
  accessInfo?: AccessInfo
  searchInfo?: SearchInfo
}

export interface AccessInfo {
  country?: 'CO'
  viewability?: Viewability
  embeddable?: boolean
  publicDomain?: boolean
  textToSpeechPermission?: TextToSpeechPermission
  epub?: Epub
  pdf?: Epub
  webReaderLink?: string
  accessViewStatus?: AccessViewStatus
  quoteSharingAllowed?: boolean
}

export type AccessViewStatus = 'SAMPLE' | 'NONE'

export interface Epub {
  isAvailable?: boolean
  acsTokenLink?: string
}

export type TextToSpeechPermission = 'ALLOWED' | 'ALLOWED_FOR_ACCESSIBILITY'

export type Viewability = 'PARTIAL' | 'NO_PAGES'

export interface SaleInfo {
  country?: 'CO'
  saleability?: Saleability
  isEbook?: boolean
  listPrice?: SaleInfoListPrice
  retailPrice?: SaleInfoListPrice
  buyLink?: string
  offers?: Offer[]
}

export interface SaleInfoListPrice {
  amount?: number
  currencyCode?: 'COP'
}

export interface Offer {
  finskyOfferType?: number
  listPrice?: OfferListPrice
  retailPrice?: OfferListPrice
}

export interface OfferListPrice {
  amountInMicros?: number
  currencyCode?: 'COP'
}

export type Saleability = 'FOR_SALE' | 'NOT_FOR_SALE'

export interface SearchInfo {
  textSnippet?: string
}

export interface VolumeInfo {
  title: string
  subtitle?: string
  authors: string[]
  publisher?: string
  publishedDate?: string
  description?: string
  industryIdentifiers?: IndustryIdentifier[]
  readingModes?: ReadingModes
  pageCount?: number
  printType?: 'BOOK'
  categories?: string[]
  maturityRating?: 'NOT_MATURE'
  allowAnonLogging?: boolean
  contentVersion?: string
  panelizationSummary?: PanelizationSummary
  imageLinks: ImageLinks
  language?: Language
  previewLink?: string
  infoLink?: string
  canonicalVolumeLink?: string
  averageRating?: number
  ratingsCount?: number
}

export interface ImageLinks {
  smallThumbnail: string
  thumbnail: string
}

export interface IndustryIdentifier {
  type?: Type
  identifier?: string
}

export type Type = 'ISBN_13' | 'ISBN_10'

export type Language = 'es' | 'en'

export interface PanelizationSummary {
  containsEpubBubbles?: boolean
  containsImageBubbles?: boolean
}

export interface ReadingModes {
  text?: boolean
  image?: boolean
}
