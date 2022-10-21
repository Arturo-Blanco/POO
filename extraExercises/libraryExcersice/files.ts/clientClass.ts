import { Publication } from "./publicationClass";
export class Client {
    private name:string;
    private surname:string;
    private ID:number;
    private address:string;
    private favoriteAuthorList:string[];
    private favoriteGenreList:string[];
    private discount:number;
    private shoppingCart:Publication[];

    public constructor(pName:string,pSurname:string,pID:number,pAddress:string,pDiscount:number){
        this.name=pName;
        this.surname=pSurname;
        this.ID=pID;
        this.address=pAddress;
        this.favoriteAuthorList=[];
        this.favoriteGenreList=[];
        this.discount=pDiscount;
        this.shoppingCart=[];
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
        if(this.favoriteAuthorList.length!==0){
            return this.favoriteAuthorList;
        }
        else {
            throw new Error(`El cliente ${this.surname} ${this.name} aun no tiene autores favoritos`);
        }
    }
    public getFavoriteGenreList():string[]{
        if(this.favoriteGenreList.length!==0){
            return this.favoriteGenreList;
        }
        else {
            throw new Error(`El cliente ${this.surname} ${this.name} aun no tiene generos favoritos`);
        }
    }
    public addFavoriteGenre(newGenre:string):void{
        this.favoriteGenreList.push(newGenre);
    }
    public addFavoriteAuthor(newAuthor:string):void{
        this.favoriteAuthorList.push(newAuthor);
    }
    public getDiscount():number{
        return this.discount;
    }
    public setDiscount(newDiscount:number):void{
    this.discount=newDiscount;
    }
    public getShoppingCart():Publication[]{
        return this.shoppingCart;
    }
    public buy(article:Publication):void{
        this.shoppingCart.push(article)
    }
}