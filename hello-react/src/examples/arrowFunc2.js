const user = {
    name: 'bengugultekin',
    email: 'info@bengugultekin.com',
    city: 'Sakarya',
    roles: ['admin', 'customer'],
    getRoles: function() {
        this.roles.forEach((role) => {
            console.log(role);
            console.log(this.name);
        })
    }
}

// function ES5 tanımlaması kendine yeni bir scope oluşturduğundan this objesi üst scope bilgileri
// için kullanılmaz, bunu önlemek için yeni scope tan önce this objesi farklı bir değişkene atanır


// fakar ES6 arrow function yeni bir scope oluşturmaz 
// bu sebeple this objesi kullanılabilir

console.log(user.name);
user.getRoles();

const addES5 = function() {
    let total = 0;
    for(let i=0; i<arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

console.log(addES5(5,10,20,30));
console.log(addES5(5,10,20,30,40));

// arow functionlarda yeni scope oluşmadığından argüman objesi kullanılmaz
