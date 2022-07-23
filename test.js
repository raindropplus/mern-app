var myCars = [{ priceLakh: 1, name: 'a' }, { priceLakh: 20, name: 'b' }, { priceLakh: 3, y: 'c' }, { priceLakh: 4, name: 'Rickshaw' }];
var totalPrice = myCars.filter(a => a.name !== 'Rickshaw').reduce(function (a, b) { return a + b.priceLakh }, 0);
console.log(totalPrice);



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



function genarateCourseList(subject) {
    var courseObject = {
        name: 'course-name',
        code: 'course-id'
    }

    var couseList = [];

    switch (subject) {
        case 'nodejs':
            let nodejs1 = courseObject;
            nodejs1.name = 'NodeJS Beginnner';
            nodejs1.code = 'N101';
            couseList.push(nodejs1)
            break;
        case 'html':
            let html = courseObject;
            html.name = 'HTML';
            html.code = 'N101';
            couseList.push(html)
            break;


    }
    return couseList;
}

var myCourse = genarateCourseList('nodejs');
console.log(myCourse)