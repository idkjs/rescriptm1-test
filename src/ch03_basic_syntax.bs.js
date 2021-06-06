// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Pervasives = require("bs-platform/lib/js/pervasives.js");
var TestUtils$Part2Workshop = require("./TestUtils.bs.js");

var firstName = "Sponge";

var lastName = "Bob";

var myHero = "Sponge Bob";

if ("Sponge Bob" !== myHero) {
  throw {
        RE_EXN_ID: "Assert_failure",
        _1: [
          "ch03_basic_syntax.re",
          47,
          0
        ],
        Error: new Error()
      };
}

function intMult(x, y) {
  return Math.imul(x, y);
}

function floatMult(x, y) {
  return x * y;
}

function verboseMult(n, m) {
  console.log("I'm multiplying two numbers: " + (String(n) + (" " + String(m))));
  return Math.imul(n, m);
}

console.log("I picked a random number: " + Pervasives.string_of_float(Math.random()));

function intAverage(x, y) {
  throw {
        RE_EXN_ID: "Assert_failure",
        _1: [
          "ch03_basic_syntax.re",
          133,
          27
        ],
        Error: new Error()
      };
}

function floatAverage(x, y) {
  throw {
        RE_EXN_ID: "Assert_failure",
        _1: [
          "ch03_basic_syntax.re",
          139,
          29
        ],
        Error: new Error()
      };
}

function square(x) {
  throw {
        RE_EXN_ID: "Assert_failure",
        _1: [
          "ch03_basic_syntax.re",
          145,
          18
        ],
        Error: new Error()
      };
}

function fullName(firstName, middleName, lastName) {
  throw {
        RE_EXN_ID: "Assert_failure",
        _1: [
          "ch03_basic_syntax.re",
          151,
          52
        ],
        Error: new Error()
      };
}

TestUtils$Part2Workshop.runTests("Ch03_basic_syntax-Part2Workshop", (function (param) {
        TestUtils$Part2Workshop.test("should calculate int average", (function (param) {
                if (intAverage(3, 5) === 4) {
                  return ;
                }
                throw {
                      RE_EXN_ID: "Assert_failure",
                      _1: [
                        "ch03_basic_syntax.re",
                        158,
                        6
                      ],
                      Error: new Error()
                    };
              }));
        TestUtils$Part2Workshop.test("should calculate float average", (function (param) {
                if (floatAverage(5, 10) === 7.5) {
                  return ;
                }
                throw {
                      RE_EXN_ID: "Assert_failure",
                      _1: [
                        "ch03_basic_syntax.re",
                        161,
                        6
                      ],
                      Error: new Error()
                    };
              }));
        TestUtils$Part2Workshop.test("should calculate square", (function (param) {
                if (square(6) === 36) {
                  return ;
                }
                throw {
                      RE_EXN_ID: "Assert_failure",
                      _1: [
                        "ch03_basic_syntax.re",
                        164,
                        6
                      ],
                      Error: new Error()
                    };
              }));
        return TestUtils$Part2Workshop.test("should generate a full name", (function (param) {
                      if ("Shlomi Toussia Cohen" === fullName("Shlomi", "Toussia", "Cohen")) {
                        return ;
                      }
                      throw {
                            RE_EXN_ID: "Assert_failure",
                            _1: [
                              "ch03_basic_syntax.re",
                              167,
                              6
                            ],
                            Error: new Error()
                          };
                    }));
      }));

var intFour = 4;

var floatFour = 4;

var intFourWithSignature = 4;

var floatFourWithSignature = 4;

var aBooleanFalse = false;

exports.intFour = intFour;
exports.floatFour = floatFour;
exports.intFourWithSignature = intFourWithSignature;
exports.floatFourWithSignature = floatFourWithSignature;
exports.firstName = firstName;
exports.lastName = lastName;
exports.myHero = myHero;
exports.aBooleanFalse = aBooleanFalse;
exports.intMult = intMult;
exports.floatMult = floatMult;
exports.verboseMult = verboseMult;
exports.intAverage = intAverage;
exports.floatAverage = floatAverage;
exports.square = square;
exports.fullName = fullName;
/*  Not a pure module */