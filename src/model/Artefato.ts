export abstract class Artefato{

    private _id: number;
    private _nome: string;
    private _tipo: string;
    private _preco: number;
    private _fabricante: string;

    constructor(id: number, nome: string, tipo: string, preco: number, fabricante: string){
        this._id = id
        this._nome = nome
        this._tipo = tipo
        this._preco = preco
        this._fabricante = fabricante
        
    }
    public get id(): number{
        return this._id
    }
    public set id(id: number){
        this._id = id
    }
    public get nome(): string{
        return this._nome
    }
    public set nome(nome: string){
        this._nome = nome
    }
    public get tipo(): string{
        return this._tipo
    }
    public set tipo(tipo: string){
        this._tipo = tipo
    }
    public get preco(): number{
        return this._preco
    }
    public set preco(preco: number){
        this._preco = preco
    }
    public get fabricante(): string{
        return this._fabricante
    }
    public set fabricante(fabricante: string){
        this._fabricante = fabricante
    }
    public pagar(valor: number): void{
        this._preco = this._preco - valor
    }
    public vender(valor: number): void{
        this._preco = this._preco + valor
    } 
    public visualizar(): void {
    let tipo: string = "";

    switch (this._tipo) {
        case "1":
            tipo = "Artefato de Combate";
            break;
        case "2":
            tipo = "Artefato Arcano";
            break;
    }

    console.log("\n*****************************************************");
    console.log("                  FICHA DO ARTEFATO                    ");
    console.log("*******************************************************");
    console.log(`ID do Selo: ${this._id}`);
    console.log(`Nome da Relíquia: ${this._nome}`);
    console.log(`Tipo de Magia: ${tipo}`);
    console.log(`Fabricante/Forja: ${this._fabricante}`);
    console.log(`Preço de Mercado: ${this._preco.toFixed(2)} moedas de ouro`);
    console.log("*****************************************************\n");

    }
}