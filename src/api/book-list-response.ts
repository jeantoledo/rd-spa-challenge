// resposta da api do google books simplificada

import { Book } from '../shared/book';

export class BookListResponse {
    searchTerm: string;
    totalItems: number;
    items: Book[]
}
