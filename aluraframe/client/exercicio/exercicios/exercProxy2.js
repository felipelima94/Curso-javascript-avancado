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

let funcionario = new Proxy(new Funcionario("aaa@ccc.cs"), {
    set(target, prop, value, receiver){
        console.log(`older value: ${target[prop]} - new value: ${value}`);
        return Reflect.set(target, prop, value, receiver);
    }
});
funcionario.email = "abc@cde.fg";
console.log(funcionario);