import { Parent } from './parentClass';

export class Magazine extends Parent{
    private number:number;
    private year:number;
    public constructor(pTittle:string,pPagesNumber:number,pAuthor:string,pPrice:number,pNumber:number,pYear:number){
        super(pTittle,pPagesNumber,pAuthor,pPrice);
        this.number=pNumber;
        this.year=pYear;
    }
    public getNumber():number{
        return this.number;
    }
    public getYear():number{
        return this.year;
    }
}