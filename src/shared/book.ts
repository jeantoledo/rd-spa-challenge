/* Essa é nossa classe Book, coloquei ela na pasta shared porque ela vai ser utilizada tanto nos serviços 
   (/services) da aplicação e nos serviços da API (/api) */

export class Book {
    id: string
    thumbnail: string;
    title: string;
    subtitle: string;
    author: string;
    year: number;
    description: string;
}
