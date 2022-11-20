"use strict";

var user = {
  name: 'bengugultekin',
  email: 'info@bengugultekin.com',
  city: 'Sakarya',
  roles: ['admin', 'customer'],
  getRoles: function getRoles() {
    var _this = this;

    this.roles.forEach(function (role) {
      console.log(role);
      console.log(_this.name);
    });
  }
}; // function ES5 tanımlaması kendine yeni bir scope oluşturduğundan this objesi üst scope bilgileri
// için kullanılmaz, bunu önlemek için yeni scope tan önce this objesi farklı bir değişkene atanır
// fakar ES6 arrow function yeni bir scope oluşturmaz 
// bu sebeple this objesi kullanılabilir

console.log(user.name);
user.getRoles();

var addES5 = function addES5() {
  var total = 0;

  for (var i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }

  return total;
};

console.log(addES5(5, 10, 20, 30));
console.log(addES5(5, 10, 20, 30, 40)); // arow functionlarda yeni scope oluşmadığından argüman objesi kullanılmaz
