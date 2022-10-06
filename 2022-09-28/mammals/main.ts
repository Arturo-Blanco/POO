import { Carnivore } from "./files.ts/carnivoreClass";
import { Hervibore } from "./files.ts/herbivoreClass";
import { Omnivore } from './files.ts/omnivoreClass';

let animal1:Carnivore=new Carnivore('Leon',25,'Carnivoro','Terrestre',190,true);
let animal2:Carnivore=new Carnivore('Foca',20,'Carnivoro','Acuatico',85,false);
let animal3:Hervibore=new Hervibore('Caballo',10,'Herviboro','Terrestre',150,true);
let animal4:Hervibore=new Hervibore('Elefante Africano',60,'Herviboro','Terrestre',5000,false);
let animal5:Omnivore=new Omnivore('Oso',15,'Omnivoro','Terreste',400,true);
let animal6:Omnivore=new Omnivore('Perro',5,'Omnivoro','Terrestre',7,true);


console.log(animal1.getAge());
console.log(animal2.eat());
console.log(animal3.getFur());
console.log(animal4.move(50));
