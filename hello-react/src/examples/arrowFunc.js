// ES5


/*
var helloES5 = function () {
    console.log('Hello from es5');
}
*/
function helloES5() {
    console.log('hello from es5');
}

let helloES6 = () => {
    console.log('hello from ES6')
}


helloES5();
helloES6();

let multiplyES5 = function (x,y) {
    return x * y;
}

console.log(multiplyES5(3,5));

let multiplyES6 = (x,y) => { 
    return x*y;
}

console.log(multiplyES6(2,4));

let getProductES5 = function(id, name) {
    return {
        id: id,
        name: name
    }
}

console.log(getProductES5(1, 'IPhane X'));

let getProductES6 = (id,name) => ({
    id:id,
    name: name
});

console.log(getProductES6(2, 'Samsung Galaxy'));

const phones = [
    {name: 'Iphone 8', price: 4000},
    {name: 'Iphone XS', price: 5000},
    {name: 'Iphone 13', price: 6000},
    {name: 'Iphone 7S', price: 5500}
];

let priceES5 = phones.map(function(phone) {
    return phone.price;
})

console.log(priceES5);

let priceES6 = phones.map(phone => phone.price);

console.log(priceES6);

let filterES5 = phones.filter(function(phone) {
    return phone.price >= 5000;
})

console.log(filterES5);

let filterES6 = phones.filter(phone => phone.price >= 5000);

console.log(filterES6);