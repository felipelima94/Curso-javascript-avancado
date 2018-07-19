// let funcionario = {email: 'abc@abc.com'};
// let funcionarioProxy = new Proxy(funcionario,  {

//     get(target, prop, receiver) {
//         console.log('Armadilha aqui!');
//         console.log("target" + target);
//         console.log("prop" + prop);
//         console.log("receiver" + receiver);
//         return '**' + Reflect.get(target, prop, receiver) + '**' ;        
//     }

// });
// console.log(funcionarioProxy.email);

class Funcionario {

    constructor(email) {
        this._email = email;
    }

    get email() {
        return this._email;
    }

    set email(email) {
        this._email = email;
    }
}

let funcionario = new Proxy(new Funcionario('abc@abc.com'), {

    get(target, prop, receiver) {
        console.log('Armadilha aqui!');
        console.log(prop);
        return Reflect.get(target, prop, receiver);
    }

});

console.log(funcionario.email);