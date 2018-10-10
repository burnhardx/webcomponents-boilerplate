
const dom = require("./../../utils/dom");
const factory = require("./../../utils/factory");

class SimpleComponent extends HTMLElement {
    connectedCallback(){
        const message= 'Do what you want!';
        const h1=factory.h1(message).create();
        this.appendChild(h1);

        const input = factory.input()
            .type('text')
            .placeholder('Type and replace the headline.')
            .create();
        this.appendChild(input);

        dom('input').addEventListener('keyup',evt=>{
            dom('h1').innerHTML = evt.target.value==='' ?
                message :
                evt.target.value;
        })
    }
}

module.exports = SimpleComponent;