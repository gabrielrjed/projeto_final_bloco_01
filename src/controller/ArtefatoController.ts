
import { Artefato } from "../model/Artefato";
import { ArtefatoRepository } from "../repository/ArtefatoRepository";

export class ArtefatoController implements ArtefatoRepository {
    
    private listarArtefatos: Array<Artefato> = new Array<Artefato>();
    private mochila: Array<Artefato> = new Array<Artefato>();
    private itensComprados: number = 0;
    numero = 0;

    listarTodos(): void {
        for (let artefato of this.listarArtefatos) {
            artefato.visualizar();
        }
    }

    procurarPorId(id: number): void {
        let busca = this.buscarNoArray(id);
        if (busca !== null) {
            busca.visualizar();
        } else {
            console.log("\nArtefato não encontrado no estoque!");
        }
    }

    adicionar(artefato: Artefato): void {
        this.listarArtefatos.push(artefato);
    }

    atualizar(artefato: Artefato): void {
        let busca = this.buscarNoArray(artefato.id);
        if (busca !== null) {
            let indice = this.listarArtefatos.indexOf(busca);
            this.listarArtefatos[indice] = artefato;
            console.log( "\nArtefato atualizado com sucesso!");
        } else {
            console.log("\nArtefato não encontrado para atualizar!");
        }
    }

    vender(id: number): void {
        let busca = this.buscarNoArray(id);
        if (busca !== null) {
            let indice = this.listarArtefatos.indexOf(busca);
            this.listarArtefatos.splice(indice, 1);
            console.log("\n Venda concluída! O artefato foi removido do estoque.");
        } else {
            console.log("\n Artefato não encontrado para vender!");
        }
    }
    pagar(id: number, valor: number): void {
        try {
            let busca = this.buscarNoArray(id);
            if (busca === null) {
                throw new Error("Artefato não encontrado no estoque!");
            }
            if (valor < busca.preco) {
                console.log(`\n Moedas insuficientes! O item custa ${busca.preco} e você ofereceu apenas ${valor}.`);
                return; 
            }
            if (valor > busca.preco) {
                let troco = valor - busca.preco;
                console.log(`\n Pagamento aceito! Devolvendo ${troco.toFixed(2)} moedas de troco.`);
            }
            let indice = this.listarArtefatos.indexOf(busca);
            this.listarArtefatos.splice(indice, 1); 
            this.mochila.push(busca);              
            this.itensComprados++;

            console.log("\n Sucesso! O item foi guardado na sua bolsa.");

        } catch (error: any) {
            console.log("\n Houve um erro ao processar o pagamento: " + error.message);
        }
    }

    deletar(id: number): void {
        let itemMochila = this.mochila.find(item => item.id === id);

        if (itemMochila) {
            let indice = this.mochila.indexOf(itemMochila);
            this.mochila.splice(indice, 1);

            this.listarArtefatos.push(itemMochila);

            this.itensComprados--;

            console.log("\nItem removido da bolsa e devolvido ao estoque do Empório!");
        } else {
            console.log("\nEste item não foi encontrado na sua bolsa!");
        }
    }
  

    public listarMochila(): void {
        if (this.mochila.length === 0) {
            console.log("\nSua bolsa está vazia.");
        } else {
            this.mochila.forEach(item => item.visualizar());
        }
    }

    public retirarDaMochila(id: number): void {
        let itemMochila = this.mochila.find(item => item.id === id);
        if (itemMochila) {
            let indice = this.mochila.indexOf(itemMochila);
            this.mochila.splice(indice, 1);
            this.listarArtefatos.push(itemMochila); 
            this.itensComprados--;
            console.log(`\nO item "${itemMochila.nome}" foi devolvido à loja.`);
        } else {
            console.log("\nEste item não está na sua bolsa!" );
        }
    }

    public getQuantidadeComprada(): number {
        return this.itensComprados;
    }

    public buscarNoArray(id: number): Artefato | null {
        for (let artefato of this.listarArtefatos) {
            if (artefato.id === id) {
                return artefato;
            }
        }
        return null;
    }
}
