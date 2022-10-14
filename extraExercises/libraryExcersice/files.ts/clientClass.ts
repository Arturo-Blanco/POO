export class Client {
    private name:string;
    private surname:string;
    private ID:number;
    private address:string;
    private favoriteAuthosrList:string[];
    private favoriteGenreList:string[];
    private discount:number;

    public constructor(pName:string,pSurname:string,pID:number,pAddress:string,pFavoriteAuthosrList:string[],pFavoriteGenreList:string[],pDiscount?:number){
        this.name=pName;
        this.surname=pSurname;
        this.ID=pID;
        this.address=pAddress;
        this.favoriteAuthosrList=pFavoriteAuthosrList;
        this.favoriteGenreList=pFavoriteGenreList;
        if(pDiscount!==undefined){
            this.discount=pDiscount;
        } else{
            console.log(`El cliente ${this.surname} ${this.name} no tiene descuento`);
        }
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
}