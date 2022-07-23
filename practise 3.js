
var baseSKU = 'kf1097'
var variationOptions = [
    {
        name: 'size',
        option: [40, 41, 42, 43]
    },
    {
        name: 'color'
        , option: ['bloak', 'brown', 'chocolate']
    }
]



function prepareCodes() {
    var code = [];
    var size = variationOptions.find(a => a.name === 'size').option;
    var color = variationOptions.find(a => a.name === 'color').option;
    color.forEach(c => {
        size.forEach(s => {
            code.push(baseSKU + "-" + c + "-" + s)
        });
    });
    return code;
}

var productCodes = prepareCodes();
console.log(productCodes)
