class Book {
    private bookName: string;
    private bookType:string;
    private bookAutor:string;
    private bookYear:any;

    public constructor(pBookName:string,pBookType:string,pBookAutor?:string,pBookYear?:any){
        this.bookName=pBookName;
        this.bookType=pBookType;
        if(pBookAutor==undefined){
            this.bookAutor='No se conoce el autor del libro';
        }   else {
            this.bookAutor=pBookAutor;
        }
        if(pBookYear==undefined){
            this.bookYear ='No se conoce el año de publicacion del libro' ;
        }   else {
            this.bookYear=pBookYear;
        }
    }
    public getBookName():string{
        return this.bookName;
    }
    public getBookType():string{
        return this.bookType;
    }
    public getBookAutor():string{
        return this.bookAutor;
    }
    public getBookYear():any{
        return this.bookYear;
    }
    public setBook(pName:string,pType:string,pAutor:string,pYear:number):void{
        this.bookName=pName;
        this.bookType=pType
        this.bookType=pAutor;
        this.bookYear=pYear;
        }
    }

    class BookManager {
        private managerName: string;
        private bookList:Book[];

        public constructor(pManagerBook:string,pBookList:Book[]) {
            this.managerName=pManagerBook;
            this.bookList=pBookList;
        }
        public insertNewBook(pName:string,pType:string,pAutor:string,pYear:number):Book {
            let newBook=new Book(pName,pType,pAutor,pYear);
            this.bookList.push(newBook);
            console.log(`Se ah añadido el libro ${pName} de tipo ${pType} del autor ${pAutor}, publicado el año ${pYear}`);
            return newBook;
    }
        public modifyBook(pNewName?:Book,pNewType?:Book,pNewAutor?:Book,pNewYear?:Book):void{
        let name=pNewName?.getBookName();
        let type=pNewType?.getBookType();
        let autor=pNewAutor?.getBookAutor();
        let year=pNewYear?.getBookYear();
            for(let i=0;i<this.bookList.length;i++) {
                if(pNewName?.getBookName()!==this.bookList[i].getBookName()) {
                    
                }
            }
        }
    }
    let book1=new Book('Señor de los anillos','Ciencia Ficcion');
    let book2=new Book('Spiderman','');
    let bookList1:Book[]=[book1,book2];
    console.log(book1.getBookYear())
    console.log(book2);
