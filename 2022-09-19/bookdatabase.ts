class Book {
    private bookName: string;
    private bookType:string;
    private bookAuthor:string;
    private bookYear:any;

    public constructor(pBookName:string,pBookAuthor:string,pBookType:string,pBookYear?:number){
        this.bookName=pBookName;
        this.bookType=pBookType;
        this.bookAuthor=pBookAuthor;

        if(pBookYear==undefined){
            this.bookYear='"no se conoce el año del libro"'
        }   else {
            this.bookYear=pBookYear;
        }
    }
    public getBookName():string{
        return this.bookName;
    }
    public getBookAuthor():string{
        return this.bookAuthor;
    }
    public getBookType():string{
        return this.bookType;
    }
    public getBookYear():number{
        return this.bookYear;
    }
    public setBookName(pName:string):void{
        this.bookName=pName;
    }
    public setBookAuthor(pAuthor:string):void{
        this.bookAuthor=pAuthor;
    }
    public setBookType(pType:string):void{
        this.bookType=pType;
    }
    public setBookYear(pYear:number):void{
        this.bookYear=pYear;
    }
}

class BookManager {
    private managerName:string;
    private bookList:Book[];

    public constructor(pManagerBook:string,pBookList:Book[]) {
        this.managerName=pManagerBook;
        this.bookList=pBookList;
        }
    public getManagerName():string{
        return this.managerName;
    }
    public setManagerName(newManagerName:string):void{
        this.managerName=newManagerName;
    }
    public insertNewBook(pName:string,pAutor:string,pType:string,pYear:number):void {
        let newBook=new Book(pName,pAutor,pType,pYear);
            this.bookList.push(newBook);
                console.log(`Se ah añadido el libro ${pName}, del autor ${pAutor}, de tipo ${pType}, publicado el año ${pYear}`);
    }
    public consultBook(pBook:Book):any{
        for(let i:number=0;i<this.bookList.length;i++) {
            if(pBook.getBookName()===this.bookList[i].getBookName()) {
                break;
            } 
        } 
    console.log(`El libro se llama ${pBook.getBookName()}, escrito por ${pBook.getBookAuthor()}, del género ${pBook.getBookType()}, publicado el año ${pBook.getBookYear()}.`);   
    }
    public modifyName(pBook:Book,pNewName:string):void{
        for(let i:number=0;i<this.bookList.length;i++) {
            if(pBook==this.bookList[i] && this.bookList[i].getBookName()!= pNewName) {
                this.bookList[i].setBookName(pNewName);
                    break;
            }
        }
    }
    public modifyType(pBook:Book,pNewType:string):void{
        for(let i:number=0;i<this.bookList.length;i++) {
            if(pBook==this.bookList[i] && this.bookList[i].getBookType()!= pNewType) {
                this.bookList[i].setBookType(pNewType);
                    break;
            }
        }
    }
    public modifyAuthor(pBook:Book,pNewAuthor:string):void{
        for(let i:number=0;i<this.bookList.length;i++) {
            if(pBook==this.bookList[i] && this.bookList[i].getBookAuthor()!= pNewAuthor) {
                this.bookList[i].setBookAuthor(pNewAuthor);
                    break;
            }
        }
    }
    public modifyYear(pBook:Book,pNewYear:number):void{
        for(let i:number=0;i<this.bookList.length;i++) {
            if(pBook==this.bookList[i] && this.bookList[i].getBookYear()!= pNewYear) {
                this.bookList[i].setBookYear(pNewYear);
                    break;
            }
        }
    }
    public deleteBook(pbook:Book):void{
        for(let i:number=0;i<this.bookList.length;i++) {
            if(pbook==this.bookList[i]){
                this.bookList.splice(i,1);
                break;
            }
        } console.log(`Se ha eliminado el libro ${pbook.getBookName()}, del autor ${pbook.getBookAuthor()}.`);
    }
}

    let book1=new Book('Viaje al fin de la noche','Louis-Ferdinand Céline','Novela',1932);
    let book2=new Book('Don Quijote de la Mancha','Miguel de Cervantes','Novela',1605);
    let bookList1:Book[]=[book1,book2];
    
    let newManager=new BookManager('Gestor uno',bookList1);
    let book3=newManager.insertNewBook('Los cuentos de Canterbury','Geoffrey Chaucer','Novela',1882);
    newManager.consultBook(book2);
    console.log(bookList1.length);
    newManager.deleteBook(book1);
    
