import { Book } from './book';

export class BookListResponse {
    searchTerm: string;
    totalItems: number;
    items: Book[]
}