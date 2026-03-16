import {Artefato} from "../model/Artefato"

export interface ArtefatoRepository{
    procurarPorId(id: number): void;      
    listarTodos(): void;                 
    adicionar(artefato: Artefato): void; 
    atualizar(artefato: Artefato): void; 
    deletar(id: number): void;           
    pagar(id: number, valor: number): void;      
    vender(id: number, valor: number): void;    
}

