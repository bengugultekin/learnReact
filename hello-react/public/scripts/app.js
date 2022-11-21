"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// class - ES5
var PersonES5 = function PersonES5() {}; // class - ES6


var PersonES6 = /*#__PURE__*/function () {
  function PersonES6() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Guest';
    var year = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1900;

    _classCallCheck(this, PersonES6);

    this.name = name;
    this.year = year;
    console.log('constructor çalıştı.');
  }

  _createClass(PersonES6, [{
    key: "calculateAge",
    value: function calculateAge() {
      return new Date().getFullYear() - this.year;
    }
  }, {
    key: "greeting",
    value: function greeting(text) {
      return "".concat(text, ", My name is ").concat(this.name);
    }
  }]);

  return PersonES6;
}(); // Nesne - object


var pES5 = new PersonES5();
console.log(pES5);
var pES61 = new PersonES6("Bengu", 1998);
var pES62 = new PersonES6("Onur", 1989);
var pES63 = new PersonES6();
console.log(pES61);
console.log(pES62);
console.log(pES61.calculateAge());
console.log(pES62.calculateAge());
console.log(pES63.calculateAge());
console.log(pES61.greeting('Hello'));
console.log(pES62.greeting('Good morning'));
console.log(pES63.greeting('Welcome'));
