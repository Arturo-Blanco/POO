export class Publication {
    protected tittle:string;
    protected pagesNumber:number;
    protected author:string;
    protected price:number;

    protected constructor(pTittle:string,pPagesNumber:number,pAuthor:string,pPrice:number){
        this.tittle=pTittle;
        this.pagesNumber=pPagesNumber;
        this.author=pAuthor;
        this.price=pPrice;
    }
    public getTittle():string{
        return this.tittle;
    }
    public getPagesNumber():number{
        return this.pagesNumber;
    }
    public getAuthor():string{
        return this.author;
    }
    public getPrice():number{
        return this.price;
    }
}