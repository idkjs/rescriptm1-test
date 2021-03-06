// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Caml_obj = require("bs-platform/lib/js/caml_obj.js");
var TestUtils$Part2Workshop = require("./TestUtils.bs.js");

function string_of_color(color) {
  switch (color) {
    case /* Red */0 :
        return "red";
    case /* Green */1 :
        return "green";
    case /* Blue */2 :
        return "blue";
    
  }
}

console.log("my favorite color is: " + string_of_color(/* Blue */2));

function string_of_cardRank(rank) {
  if (typeof rank !== "number") {
    return String(rank._0);
  }
  switch (rank) {
    case /* Ace */0 :
        return "Ace";
    case /* King */1 :
        return "King";
    case /* Queen */2 :
        return "Queen";
    case /* Jack */3 :
        return "Jack";
    
  }
}

function score(cardRank) {
  throw {
        RE_EXN_ID: "Assert_failure",
        _1: [
          "ch10_variants.re",
          54,
          24
        ],
        Error: new Error()
      };
}

function successor(cardRank) {
  throw {
        RE_EXN_ID: "Assert_failure",
        _1: [
          "ch10_variants.re",
          62,
          28
        ],
        Error: new Error()
      };
}

TestUtils$Part2Workshop.runTests("Ch10_variants-Part2Workshop", (function (param) {
        TestUtils$Part2Workshop.test("should get the rank of an Ace", (function (param) {
                if (11 === score(/* Ace */0)) {
                  return ;
                }
                throw {
                      RE_EXN_ID: "Assert_failure",
                      _1: [
                        "ch10_variants.re",
                        68,
                        6
                      ],
                      Error: new Error()
                    };
              }));
        TestUtils$Part2Workshop.test("should get the rank of a Jack", (function (param) {
                if (10 === score(/* Jack */3)) {
                  return ;
                }
                throw {
                      RE_EXN_ID: "Assert_failure",
                      _1: [
                        "ch10_variants.re",
                        71,
                        6
                      ],
                      Error: new Error()
                    };
              }));
        TestUtils$Part2Workshop.test("should get the rank of Number", (function (param) {
                if (5 === score(/* Number */{
                        _0: 5
                      })) {
                  return ;
                }
                throw {
                      RE_EXN_ID: "Assert_failure",
                      _1: [
                        "ch10_variants.re",
                        74,
                        6
                      ],
                      Error: new Error()
                    };
              }));
        TestUtils$Part2Workshop.test("should get the successor of 3", (function (param) {
                if (Caml_obj.caml_equal(/* Number */{
                        _0: 4
                      }, successor(/* Number */{
                            _0: 3
                          }))) {
                  return ;
                }
                throw {
                      RE_EXN_ID: "Assert_failure",
                      _1: [
                        "ch10_variants.re",
                        77,
                        6
                      ],
                      Error: new Error()
                    };
              }));
        TestUtils$Part2Workshop.test("should get the successor of 10", (function (param) {
                if (/* Jack */3 === successor(/* Number */{
                        _0: 10
                      })) {
                  return ;
                }
                throw {
                      RE_EXN_ID: "Assert_failure",
                      _1: [
                        "ch10_variants.re",
                        80,
                        6
                      ],
                      Error: new Error()
                    };
              }));
        TestUtils$Part2Workshop.test("should get the successor of a King", (function (param) {
                if (/* Ace */0 === successor(/* King */1)) {
                  return ;
                }
                throw {
                      RE_EXN_ID: "Assert_failure",
                      _1: [
                        "ch10_variants.re",
                        83,
                        6
                      ],
                      Error: new Error()
                    };
              }));
        return TestUtils$Part2Workshop.test("should get the successor of an Ace", (function (param) {
                      if (Caml_obj.caml_equal(/* Number */{
                              _0: 2
                            }, successor(/* Ace */0))) {
                        return ;
                      }
                      throw {
                            RE_EXN_ID: "Assert_failure",
                            _1: [
                              "ch10_variants.re",
                              86,
                              6
                            ],
                            Error: new Error()
                          };
                    }));
      }));

var favoriteColor = /* Blue */2;

var queen = /* Queen */2;

var eight = /* Number */{
  _0: 8
};

exports.string_of_color = string_of_color;
exports.favoriteColor = favoriteColor;
exports.queen = queen;
exports.eight = eight;
exports.string_of_cardRank = string_of_cardRank;
exports.score = score;
exports.successor = successor;
/*  Not a pure module */
