import { Book } from '../models/book';

export class BookListResponse {
    searchTerm: string;
    totalItems: number;
    items: Book[]
}