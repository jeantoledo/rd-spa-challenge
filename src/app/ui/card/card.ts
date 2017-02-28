/* Esta é a entidade que representa o card, não podemos deixa-la em outro diretório pois o intuito é manter o componente reutilizável
   Por isso precisamos manter todos os arquivos dessa feature na mesma pasta, o angular recomenda isso também */
   
export class Card {
    id: string;
    thumbnail: string;
    title: string;
    subtitle: string;
    author: string;
}
