    /*se importa npm para leer archivos del sistema*/
import * as fs from 'fs';
class Book {
    private bookName: string;
    private bookType:string;
    private bookAuthor:string;
    private bookYear:number;

    public constructor(pBookName:string,pBookAuthor:string,pBookType:string,pBookYear:number){
        this.bookName=pBookName;
        this.bookType=pBookType;
        this.bookAuthor=pBookAuthor;
        this.bookYear=pBookYear;
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
    /*funcion para insertar un nuevo libro */
    public insertNewBook(pBook:Book):void{
            this.bookList.push(pBook);
        console.log(`Se ah añadido el libro ${pBook.getBookName()}, del autor ${pBook.getBookAuthor()}.`);
    }
    /*funcion para consultar por un libro*/
    public consultBook(pBook:Book):void{
        for(let i:number=0;i<this.bookList.length;i++) {
            if(pBook.getBookName()===this.bookList[i].getBookName()) {
            } 
        } 
    console.log(`El libro se llama ${pBook.getBookName()}, escrito por ${pBook.getBookAuthor()}, del género ${pBook.getBookType()}, publicado el año ${pBook.getBookYear()}.`);   
    }
    /*funcion para modificar el nombre de un libro*/
    public modifyName(pBook:Book,pNewName:string):void{
        for(let i:number=0;i<this.bookList.length;i++) {
            if(pBook==this.bookList[i] && this.bookList[i].getBookName()!= pNewName) {
                this.bookList[i].setBookName(pNewName);
            }
        }
    }
    /*funcion para modificar el tipo de un libro*/
    public modifyType(pBook:Book,pNewType:string):void{
        for(let i:number=0;i<this.bookList.length;i++) {
            if(pBook==this.bookList[i] && this.bookList[i].getBookType()!= pNewType) {
                this.bookList[i].setBookType(pNewType);
            }
        }
    }
    /*funcion para modificar el autor de un libro*/
    public modifyAuthor(pBook:Book,pNewAuthor:string):void{
        for(let i:number=0;i<this.bookList.length;i++) {
            if(pBook==this.bookList[i] && this.bookList[i].getBookAuthor()!= pNewAuthor) {
                this.bookList[i].setBookAuthor(pNewAuthor);
            }
        }
    }
    /*funcion para modificar el año de publicacion de un libro*/
    public modifyYear(pBook:Book,pNewYear:number):void{
        for(let i:number=0;i<this.bookList.length;i++) {
            if(pBook==this.bookList[i] && this.bookList[i].getBookYear()!= pNewYear) {
                this.bookList[i].setBookYear(pNewYear);
            }
        }
    }
    /*funcion para eliminar un libro*/
    public deleteBook(pBook:Book):void{
        for(let i:number=0;i<this.bookList.length;i++) {
            if(pBook==this.bookList[i]){
                this.bookList.splice(i,1);
            }
        } console.log(`Se ha eliminado el libro ${pBook.getBookName()}, del autor ${pBook.getBookAuthor()}.`);
    }
    /*funcion para leer un libro*/
    public readBook(pBook:Book):void{
        let bookRead:string;
        for(let i:number=0;i<this.bookList.length;i++) {
            if(pBook==this.bookList[i]) {
            bookRead=fs.readFileSync('2022-09-19/bookContent/'+pBook.getBookName()+'.txt','utf-8')
            console.log(bookRead);
            }
        }
    }
}
    /* se crea objetos libros */
    let book1=new Book('Viaje al fin de la noche','Louis-Ferdinand Céline','Novela',1932);
    let book2=new Book('Don Quijote de la Mancha','Miguel de Cervantes','Novela',1605);
    /* se crea lista de libros */
    let bookList1:Book[]=[book1,book2];
    /* se crea un libro nuevo */
    let book3=new Book('Los cuentos de Canterbury','Geoffrey Chaucer','Novela',1882);
    /* se crea un objeto Gestor */
    let newManager=new BookManager('Gestor uno',bookList1);
    /* se inserta un libro nuevo al Gestor */
    newManager.insertNewBook(book3);
    /* se consulta por un libro */
    newManager.consultBook(book2);
    /* se verifica la longitud de la lista para verificar si fue insertado el nuevo objeto libro*/
    console.log(bookList1.length);
    /* se lee libro guardado en .txt */
    newManager.readBook(book2)

    