import {Artefato} from "./Artefato"

export class Artefato_Combate extends Artefato{
    private _proficiencia: number;

    constructor(id: number, nome: string, tipo: string, preco: number, fabricante: string, proficiencia: number){
        super(id, nome, tipo, preco, fabricante)
        this._proficiencia = proficiencia
    }
    public get proficiencia(): number{
        return this._proficiencia
    }
    public set proficiencia(proficiencia: number){
        this._proficiencia = proficiencia
    }
    public aprimorar(): void{
        this._proficiencia = 2
        console.log("Artefato de combate aprimorado")
    }
    public visualizar(): void {
    super.visualizar();
    console.log("Sua Arma é de Combate");
    console.log("*****************************************************\n");
}
}