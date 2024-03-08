const targetObject = {
    property1: 'værdi1',
    property2: 'værdi2'
}

const proxyObject = new Proxy(targetObject ,{
    deleteProperty: function(target, property){
        console.log(`Egenskaben '${property}' kan ikke slettes`);
        return false;
    }
})

delete proxyObject.property1;
delete proxyObject.property2;