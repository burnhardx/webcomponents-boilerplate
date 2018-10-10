const dom = (selector,node,resultAlwaysAnArray)=>{
    const searchIn = !node ? document : node;
    const selection = searchIn.querySelectorAll(selector);
    const alwaysArray =typeof resultAlwaysAnArray !='undefined' && resultAlwaysAnArray;
    return selection.length==1 ?
        typeof resultAlwaysAnArray !='undefined' && resultAlwaysAnArray ?
            selection==null ? [] : selection : selection[0]
        : selection.length==0 ?  alwaysArray ?  [] : null : Array.from(selection);
}

module.exports = dom;