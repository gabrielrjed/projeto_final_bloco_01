import readlinesync from "readline-sync";
import { colors } from "./Colors";

export function main(){
    let opcao: number;

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
        console.log("*           2 - Adicionar a Bolsa                       *");
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
            console.log(colors.fg.green,"\n\nEstes são os artefatos à venda: \n\n", colors.reset);
            keyPress()
            break;
            case 2:
            console.log(colors.fg.green,"\n\nVocê possui um artefato na bolsa\n\n", colors.reset);
            console.log(colors.fg.green, "\n\nVolte ao Menu para finalizar a compra\n\n", colors.reset)
            keyPress()
            break;
            case 3:
            console.log(colors.fg.green,"\n\nArtefato retirado da bolsa\n\n", colors.reset);
            console.log(colors.fg.green,"\n\nVocê possui zero artefatos na bolsa\n\n", colors.reset);
            keyPress()
            break;
            case 4:
            console.log(colors.fg.green,"\n\nArtefato aprimorado\n\n", colors.reset);
            keyPress()
            break;
            case 5:
            console.log(colors.fg.green,"\n\nParabéns você é dono de um novo artefato!\n\n", colors.reset);
            keyPress()
            break;
            case 6:
            console.log(colors.fg.green,"\n\nAqui está o seu artefato\n\n", colors.reset);
            keyPress()
            break;
            case 7: 
            console.log(colors.fg.green,"\n\nArtefato vendido\n\n", colors.reset);
            keyPress()
            break;
            case 8:
            console.log(colors.fg.green,"\n\nMensagem enviada\n\n", colors.reset);
            keyPress()
            break;
            default:
            console.log(colors.fg.red, "\nA opção é inválida\n", colors.reset)
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