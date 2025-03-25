export class CD {
    id!: number;
    title!: string;
    author!: string;
    price!: number;
    thumbnail!: string;
    dateDeSortie!: Date;
    quantite!: number;
    onsale?: boolean;

    constructor(id: number, title: string, author: string, price: number, thumbnail: string, dateDeSortie: Date, quantite: number, onsale?: boolean){
        this.id = id;
        this.title = title;
        this.author = author;
        this.price = price;
        this.thumbnail = thumbnail;
        this.dateDeSortie = dateDeSortie;
        this.quantite = quantite;
        if(onsale !== undefined)
            this.onsale = onsale;
    }
}