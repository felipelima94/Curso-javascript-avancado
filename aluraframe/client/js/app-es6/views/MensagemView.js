import {View} from './view';
export class MensagemView extends View {
    
    constructor(elemento) {
        
       super(elemento);
    }
    
   template(model) {
       return model.texto ? `<p class="alert alert-info">${model.texto} <span  onclick="closer()" style='cursor:pointer; float: right'>X</span>` : '<p></p>';
    }
}