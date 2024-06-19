/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    
    if(typeof obj === 'object'){
        const compactObject = {}
        for(const keys in obj){
            if(!obj[keys] && obj[keys] !== false){
                delete obj[keys]
            }
        }
        compactObject = {...obj}
        return compactObject
    } else {
        const compactObject = []
        obj.forEach((elements) => {
            if(elements){
                compactObject.push(elements);
            }
        })
        return compactObject;
    }
};