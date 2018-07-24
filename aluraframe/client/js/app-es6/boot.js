import {NegociacaoController} from "./controllers/NegociacaoController";

let negociacaoController = new NegociacaoController();

document.querySelector(".from").onsubmit = negociacaoController.adiciona.bind(negociacaoController);
document.querySelector("#apaga").onclick = negociacaoController.apaga.bind(negociacaoController);