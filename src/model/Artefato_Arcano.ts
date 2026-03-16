import {Artefato} from "./Artefato"

export class Artefato_Arcano extends Artefato{
    private _mana: number;

    constructor(id: number, nome: string, tipo: string, preco: number, fabricante: string, mana: number){
        super(id, nome, tipo, preco, fabricante)
        this._mana = mana
    }
    public get mana(): number{
        return this._mana
    }
    public set mana(mana: number){
        this._mana = mana
    }
    public aprimorar(): void{
        this._mana = 1
        console.log("Artefato Arcano aprimorado")
    }public visualizar(): void {
    super.visualizar();
    console.log("Sua Arma é Arcana");
    console.log("*****************************************************\n");
}

}