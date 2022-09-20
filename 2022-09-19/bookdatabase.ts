class Book {
    private bookName: string;
    private bookType:string;
    private bookAutor:string;

    public constructor(pBookName:string,pBookType:string,pBookAutor:string) {
        this.bookName=pBookName;
        this.bookType=pBookType;
        this.bookAutor=pBookAutor
    }
    public getBook():string {
        return this.bookName+' '+this.bookType+' '+this.bookAutor;
    }
    public setBook(pName:string,pType:string,pAutor:string): void{
        this.bookName=pName;
        this.bookType=pType
        this.bookType=pAutor;
    }
    }

    class BookManager {
        private bookList:Book[];

        public constructor(pBookList:Book[]) {
            this.bookList=pBookList;
        }
        
        public insertNewBook(pName:string,pType:string,pAutor:string):Book {
            let newBook=new Book(pName,pType,pAutor);
            this.bookList.push(newBook);
            console.log(`Se ah añadido el libro ${pName} de tipo ${pType} del autor ${pAutor}`);
            return newBook;
    }
        public modifyBook():void{
        
        }
    }