let carro = {
    velocidade: 100,
    acelera : () =>  {
        console.log(this);
        console.log(`Carro a ${this.velocidade} km por hora!`);
    }
};
//carro.acelera();

let objeto1 = {
    nome : "A"
}

function exibeNome(pref, suf) {
    console.log(pref + this.nome + suf);
}

Reflect.apply(exibeNome, objeto1, ['(',')']);