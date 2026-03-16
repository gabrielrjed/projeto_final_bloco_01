import readlinesync from "readline-sync";
import { colors } from "./Colors";
import { Artefato } from "./src/model/Artefato";
import { Artefato_Arcano } from "./src/model/Artefato_Arcano";
import { Artefato_Combate } from "./src/model/Artefato_Combate";
import{ ArtefatoController } from "./src/controller/ArtefatoController"


export function main(){

    let artefato: ArtefatoController = new ArtefatoController();
    let opcao: number;
    const artefatos = new ArtefatoController()

    artefatos.adicionar(new Artefato_Combate(1, "Espada de Safira", "Combate", 150, "Forja dos Gnomos", 2));
    artefatos.adicionar(new Artefato_Arcano(2, "Cajado de Fênix", "Arcano", 450, "Ordem dos Elfos", 1));
    artefatos.adicionar(new Artefato_Combate(3, "Escudo de Ébano", "Combate", 200, "Guilda dos Ferreiros", 2));

    while(true){
console.log(colors.bg.black, colors.fg.magenta,
                    "      *      #                              #         *  ");
        console.log(" *      *   ##            *   *            ##     *      "); 
        console.log("     *     ####        *         *        ####      *    ");
        console.log("  *   #  #######    *               #   #######   *     *");
        console.log("     ### #########  *#             ### #########   #     ");
        console.log("  #######################       #######################  ");
        console.log(" #########################     ######################### ");
        console.log("#########################################################");
        console.log("*            Empório dos Artefatos Mágicos              *");
        console.log("*                                                       *");
        console.log("*           1 - * Lista de Artefatos*                   *");
        console.log("*           2 - Conteúdo da Bolsa                       *");
        console.log("*           3 - Retirar da Bolsa                        *");
        console.log("*           4 - Aprimorar Encantamento                  *");
        console.log("*           5 - Pagar                                   *");
        console.log("*           6 - Localizador de Artefatos                *");
        console.log("*           7 - Vender Artefatos                        *");
        console.log("*           8 - Entre em contato                        *");
        console.log("*           9 - Sair da loja                            *");
        console.log("*                                                       *");
        console.log("                                                         ", colors.reset);

        console.log("Escolha a opção desejada: ");
        opcao = readlinesync.questionInt();

        if(opcao == 9){
            console.log(colors.fg.redstrong,"Que a Magia te acompanhe!", colors.reset)
            sobre();
            process.exit(0);
            break;
        }
        switch(opcao){
            case 1:
                console.log(colors.fg.green, "\n--- Artefatos à Venda ---", colors.reset);
                artefatos.listarTodos();
                keyPress();
                break;

            case 2:
                console.log(colors.fg.green, "\n--- Conteúdo da sua Bolsa ---", colors.reset);
                artefatos.listarMochila();
                keyPress();
                break;

            case 3:
                let idRetirar = readlinesync.questionInt("\nDigite o ID do item para devolver ao estoque: ");
                artefatos.retirarDaMochila(idRetirar);
                keyPress();
                break;

            case 4:
                console.log("\n--- Atualizar Artefato ---");
                let idAt = readlinesync.questionInt("Digite o ID do item que deseja atualizar: ");
                console.log(colors.fg.yellow, "Funcionalidade de formulário de atualização em desenvolvimento.", colors.reset);
                keyPress();
                break;

            case 5:
                console.log(colors.fg.green, "\n--- Comprar Artefato ---", colors.reset);
                let idPagamento = readlinesync.questionInt("Digite o ID do Artefato: ");
                let valorPago = readlinesync.questionFloat("Quantas moedas de ouro voce vai oferecer? ");
                
                artefatos.pagar(idPagamento, valorPago);
                keyPress();
                break;

            case 6:
                let idBusca = readlinesync.questionInt("\nDigite o ID para buscar no estoque: ");
                artefatos.procurarPorId(idBusca);
                keyPress();
                break;

            case 7:
                console.log(colors.fg.red, "\n--- Remover do Sistema ---", colors.reset);
                let idDeletar = readlinesync.questionInt("Digite o ID do item para remover permanentemente: ");
                artefatos.deletar(idDeletar); 
                keyPress();
                break;

            case 8:
                let mensagem = readlinesync.question("\nDigite sua mensagem para o mestre: ");
                console.log(colors.fg.green, "\nMensagem enviada com sucesso!", colors.reset);
                keyPress();
                break;

            default:
                console.log(colors.fg.red, "\nOpção inválida!", colors.reset);
                keyPress();
                break;
        }
    }
}
export function sobre(): void {
    console.log(colors.fg.bluestrong, "\n*****************************************************");
    console.log("Projeto Desenvolvido por:Gabriel Pereira ");
    console.log("Generation Brasil - gabriel.rjed@outlook.com");
    console.log("https://github.com/gabrielrjed");
    console.log("*****************************************************", colors.reset);
}
function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}
main();