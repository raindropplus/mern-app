var myCars = [{ 
    "name": "Axio 2018 WXB", 
    "priceLakh": 22.5 
}, 

{
"name": "Premio 2015", 
"priceLakh":26 
}, 

{
"name": "Rickshaw", 
    "priceLakh": 0.5
}, 

{
"name": "Civic 2019", 
    "priceLakh": 34.5
}, 

];

const totalprice = myCars.filter(data=>data.name  !=='Rickshaw').reduce(myFunction,0);


function myFunction(total, value) {
    return total + value.priceLakh;
  }
  console.log(totalprice);

//const myArray= myCars.filter(data=> data.name !=='Rickshaw').reduce(function (a, b) { 
    //return a + b.priceLakh }, 0);


// function myFunction(value, index, array) {
//     return value.name !== 'Rickshaw';
//   }

//console.log(myArray)


// var totalPrice = myCars.filter(a => a.name !== 'Rickshaw').reduce(function (a, b) { return a + b.priceLakh }, 0);
// console.log(typeof myCars);