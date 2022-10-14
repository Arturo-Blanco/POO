import { Parent } from './parentClass';

export class Book extends Parent{
    private summary:string;
    private genre:string;
    public constructor(pTittle:string,pPagesNumber:number,pAuthor:string,pPrice:number,pSummary:string,pGenre:string){
        super(pTittle,pPagesNumber,pAuthor,pPrice);
        this.summary=pSummary;
        this.genre=pGenre;
    }
    public getSummary():string{
        return this.summary;
    } 
    public getGenre():string{
        return this.genre;
    }
}