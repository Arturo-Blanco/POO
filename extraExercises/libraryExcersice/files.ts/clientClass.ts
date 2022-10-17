import { Parent } from "./parentClass";
export class Client {
    private name:string;
    private surname:string;
    private ID:number;
    private address:string;
    private favoriteAuthosrList:string[];
    private favoriteGenreList:string[];
    private discount:number;
    private shoppingCart:Parent[];

    public constructor(pName:string,pSurname:string,pID:number,pAddress:string,pFavoriteAuthosrList:string[],pFavoriteGenreList:string[],pDiscount:number,pShoppingCart:Parent[]){
        this.name=pName;
        this.surname=pSurname;
        this.ID=pID;
        this.address=pAddress;
        this.favoriteAuthosrList=pFavoriteAuthosrList;
        this.favoriteGenreList=pFavoriteGenreList;
        this.discount=pDiscount;
        this.shoppingCart=pShoppingCart;
    }
    public getName():string{
        return this.name;
    }
    public getSurname():string{
        return this.surname;
    }
    public getID():number{
        return this.ID;
    }
    public getAddress():string{
        return this.address;
    }
    public getFavoriteAuthosrList():string[]{
        return this.favoriteAuthosrList
    }
    public getFavoriteGenreList():string[]{
        return this.favoriteGenreList;
    }
    public getDiscount():number{
        return this.discount;
    }
    public setDiscount(newDiscount:number):void{
    this.discount=newDiscount;
    }
    public getShoppingCart():Parent[]{
        return this.shoppingCart;
    }
    public buy(article:Parent):void{
        this.shoppingCart.push(article)
    }
}