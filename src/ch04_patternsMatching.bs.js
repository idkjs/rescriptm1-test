// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var TestUtils$Part2Workshop = require("./TestUtils.bs.js");

function isSuperman(x) {
  if (x === "Clark Kent") {
    return true;
  } else {
    return false;
  }
}

function isVowel(str) {
  throw {
        RE_EXN_ID: "Assert_failure",
        _1: [
          "ch04_patternsMatching.re",
          18,
          21
        ],
        Error: new Error()
      };
}

function nonZero(n) {
  throw {
        RE_EXN_ID: "Assert_failure",
        _1: [
          "ch04_patternsMatching.re",
          25,
          19
        ],
        Error: new Error()
      };
}

TestUtils$Part2Workshop.runTests("Ch04_patternsMatching-Part2Workshop", (function (param) {
        TestUtils$Part2Workshop.test("should say it is a vowel", (function (param) {
                if (isVowel("e") === true) {
                  return ;
                }
                throw {
                      RE_EXN_ID: "Assert_failure",
                      _1: [
                        "ch04_patternsMatching.re",
                        31,
                        6
                      ],
                      Error: new Error()
                    };
              }));
        TestUtils$Part2Workshop.test("should say it is not a vowel", (function (param) {
                if (isVowel("k") === false) {
                  return ;
                }
                throw {
                      RE_EXN_ID: "Assert_failure",
                      _1: [
                        "ch04_patternsMatching.re",
                        34,
                        6
                      ],
                      Error: new Error()
                    };
              }));
        TestUtils$Part2Workshop.test("should say it's not zero", (function (param) {
                if (nonZero(7) === true) {
                  return ;
                }
                throw {
                      RE_EXN_ID: "Assert_failure",
                      _1: [
                        "ch04_patternsMatching.re",
                        37,
                        6
                      ],
                      Error: new Error()
                    };
              }));
        return TestUtils$Part2Workshop.test("should say it is zero", (function (param) {
                      if (nonZero(0) === false) {
                        return ;
                      }
                      throw {
                            RE_EXN_ID: "Assert_failure",
                            _1: [
                              "ch04_patternsMatching.re",
                              40,
                              6
                            ],
                            Error: new Error()
                          };
                    }));
      }));

exports.isSuperman = isSuperman;
exports.isVowel = isVowel;
exports.nonZero = nonZero;
/*  Not a pure module */