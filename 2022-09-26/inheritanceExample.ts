class vehiculo {
    protected color:string;
    protected ruedas:number;
    protected moverse(){
        console.log('Me estoy moviendo');
        
    }
}
class auto extends vehiculo {
    private tipocombustible:string;

    public getColor():string{
        return this.color
    }
    public setColor(color:string):void{
        this.color=color;
    }
}

class avion extends vehiculo {
    private cantTurbinas:number;

    public getColor():string {
        return this.color;
    }
    public setColor(color:string):void {
        this.color=color;
    }
}
let auto1=new auto();
auto1.setColor('azul');

console.log(auto1.getColor());

let avion1=new avion();
avion1.setColor('rojo');
console.log(avion1.getColor());
