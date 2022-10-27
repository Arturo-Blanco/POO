import { Cliente } from "./../../../2022-10-12/claseCliente";
import { Book } from "./bookClass";
import { Magazine } from "./magazineClass";
import { Client } from "./clientClass";
import { Publication } from "./publicationClass";

export class Library {
  private clientList: Client[];
  private bookList: Book[];
  private magazineList: Magazine[];

  public constructor(
    pClientList: Client[],
    pBookList: Book[],
    pMagazineList: Magazine[]
  ) {
    this.clientList = pClientList;
    this.bookList = pBookList;
    this.magazineList = pMagazineList;
  }
  public getMagazine(pMagazine: Magazine): boolean {
    let aux = false;
    for (let i: number = 0; i < this.magazineList.length; i++) {
      if (pMagazine === this.magazineList[i]) {
        aux = true;
      }
    }
    if (aux === true) {
      console.log(`El cliente es ${pMagazine.getTittle()}`);
      return true;
    } else {
      throw Error(`No existe informacion del libro`);
    }
  }
  public getBook(pBook: Book): boolean {
    let aux = false;
    for (let i: number = 0; i < this.bookList.length; i++) {
      if (pBook === this.bookList[i]) {
        aux = true;
      }
    }
    if (aux === true) {
      console.log(`El cliente es ${pBook.getTittle()}`);
      return true;
    } else {
      throw Error(`No existe informacion del libro`);
    }
  }
  public getClient(pClient: Client): string {
    let aux = false;
    for (let i: number = 0; i < this.clientList.length; i++) {
      if (pClient === this.clientList[i]) {
        aux = true;
      }
    }
    if (aux === true) {
      return `El cliente es ${pClient.getSurname()} ${pClient.getName()}`;
    } else {
      throw Error(`No existe informacion del cliente`);
    }
  }
  public setMagazine(newMagazine: Magazine): void {
    this.magazineList.push(newMagazine);
  }
  public setBook(newBook: Book): void {
    this.bookList.push(newBook);
  }
  public setClient(newClient: Client): void {
    this.clientList.push(newClient);
  }
  public calculatePrice(client: Client, article: Publication): number {
    let priceWithDiscount: number = 0;
    priceWithDiscount = article.getPrice() * (1 - client.getDiscount());
    return priceWithDiscount;
  }
  public setDiscount(client: Client, discount: number): void {
    client.setDiscount(discount);
  }
  public soldArticle(client: Client, article: Publication): void {
    client.buy(article);
  }
  public viewPurchase(client: Client, article: Publication): string {
    let aux: number = 0;
    for (let i: number = 0; i < client.getShoppingCart().length; i++) {
      if (article.getTittle() == client.getShoppingCart()[i].getTittle()) {
        aux = 1;
      }
    }
    if (aux == 1) {
      return `El cliente ${client.getSurname()} ${client.getName()} ya compro el articulo ${article.getTittle()}`;
    } else {
      throw Error(
        `El cliente ${client.getName()} aun no compro el articulo ${article.getTittle()}`
      );
    }
  }
}
