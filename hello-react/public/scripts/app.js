"use strict";

// var nameVar = 'Bengurlok';
// nameVar = 'Gultekin';
// console.log(nameVar);
//let nameLet = 'gübs';
//let nameLet = 'naber';
// const -> bir kere atanır, uygulama boyunca değişmeyen bir sabittir.
// SCOPE KAVRAMI -- değişkenlere ulaşma mantığı
var age = 25;

function getAge() {
  var name = 'Ada';
  console.log('function scope: ', age, name);
}

console.log(age);
getAge();
