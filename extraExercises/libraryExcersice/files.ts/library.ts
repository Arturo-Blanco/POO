import { Book } from './bookClass';
import { Magazine } from './magazineClass';
import { Client } from './clientClass';
import { Parent } from './parentClass';

export class Library {
    private clientList:Client[];
    private bookList:Book[];
    private magazineList:Magazine[];

    public constructor(pClientList:Client[],pBookList:Book[],pMagazineList:Magazine[]){
        this.clientList=pClientList;
        this.bookList=pBookList;
        this.magazineList=pMagazineList;
    }
    public getMagazine(pMagazine:Magazine):string{
        for(let i:number=0;i<this.magazineList.length;i++){
            if(pMagazine===this.magazineList[i]){
                break;
            }
        } return `La revista es ${pMagazine.getTittle()}`
    } 
    public getBook(pBook:Book):string{
        for(let i:number=0;i<this.bookList.length;i++){
            if(pBook===this.bookList[i]){
            break;
            }
        } return `El libro es ${pBook.getTittle()}`
    } 
    public getClient(pClient:Client):string{
        for(let i:number=0;i<this.clientList.length;i++){
            if(pClient===this.clientList[i]){
                break;
            }
        } return `El cliente es ${pClient.getSurname()} ${pClient.getName()}`
    } 
    public setMagazine(newMagazine:Magazine):void{
        this.magazineList.push(newMagazine);
    } 
    public setBook(newBook:Book):void{
        this.bookList.push(newBook);
    } 
    public setClient(newClient:Client):void{
        this.clientList.push(newClient);
    }
    public calculatePrice(client:Client,article:Parent):number{
        let priceWithDiscount:number=0;
        priceWithDiscount=article.getPrice()*(1-client.getDiscount());
        return priceWithDiscount;
    }
}
