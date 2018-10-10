const attributeHandler ={
    get(target,propKey,receiver){
        if(propKey=='create'){
            return ()=> {
                const node = document.createElement(target.tag);
                if (typeof target.html != 'undefined') {
                    node.innerHTML = target.html;
                }
                Object.keys(target.attributes).forEach(attr => {
                    node.setAttribute(attr, target.attributes[attr].join(' '))
                })
                return node;
            }
        }
        return function(...args){
            if(!target.attributes[propKey]){
                target.attributes[propKey]=[];
            }
            args.forEach(arg=>{
                target.attributes[propKey].push(arg);
            })
            return receiver;
        }
    }
}

class Factory {
    constructor(tag,innerHTML){
        this.tag = tag;
        this.attributes={};
        this.html=innerHTML;
    }
}

const initHandler = {
    get(target, propKey, receiver) {
        return function (...args) {
            const isCustom = propKey=='wc';
            const node = new Proxy(new Factory(isCustom ? args[0] : propKey, isCustom ? undefined : args[0]), attributeHandler);
            return node;
        };
    }
};

const factory = new Proxy({}, initHandler);

export default  factory;