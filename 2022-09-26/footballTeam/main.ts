import { FootballTeam } from "./files.ts/footballTeam";
import { TechnicalDirector } from "./files.ts/dtClass";
import { Footballer } from "./files.ts/footballerClass";
import { Massagist } from "./files.ts/massagistClass";


let footballer1:Footballer=new Footballer('Hernan','Rodriguez',27,'Hombre',1.78,'Arquero',1,true);
let footballer2:Footballer=new Footballer('Miguel','Alcaraz',30,'Hombre',1.72,'Defensor',5,true);
let footballer3:Footballer=new Footballer('Leo','Blanco',28,'Hombre',1.75,'Defensor',4,false);
let footballer4:Footballer=new Footballer('Martin','Cantos',24,'Hombre',1.75,'Defensor',3,true);
let footballer5:Footballer=new Footballer('Ivan','Acosta',22,'Hombre',1.76,'Defensor',12,true);
let footballer6:Footballer=new Footballer('Franco','Gutierrez',25,'Hombre',1.70,'Mediocentro',7,false);
let footballer7:Footballer=new Footballer('Luis','Hernandez',26,'Hombre',1.68,'Lateral Izquierdo',6,false);
let footballer8:Footballer=new Footballer('Nicolas','Cortez',32,'Hombre',1.72,'Lateral derecho',8,true);
let footballer9:Footballer=new Footballer('Sebastian','Messi',28,'Hombre',1.70,'Delantero',10,false);
let footballer10:Footballer=new Footballer('Cristian','Fernandez',25,'Hombre',1.72,'Delantero',17,true);
let footballer11:Footballer=new Footballer('Fabio','Perez',32,'Hombre',1.68,'Delantero',15,true);
let footballPlayers:Footballer[]=[footballer1,footballer2,footballer3,footballer4,footballer5,footballer6,footballer7,footballer8,footballer9,footballer10,footballer11];

let technicalDirector1:TechnicalDirector=new TechnicalDirector('Juan','Rodriguez',45,'Hombre',1.75,true,footballPlayers);

let massagist1:Massagist=new Massagist('Pedro','Benitez',40,'Hombre',1.65,'Masajes descontracturantes');

let Team1:FootballTeam=new FootballTeam('Talleres',technicalDirector1,footballPlayers,massagist1);

console.log(Team1.buyPlayer(footballer1)