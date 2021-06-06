// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Caml_obj = require("bs-platform/lib/js/caml_obj.js");
var Pervasives = require("bs-platform/lib/js/pervasives.js");
var TestUtils$Part2Workshop = require("./TestUtils.bs.js");

function highCard(card1, card2) {
  return Pervasives.failwith("implement me");
}

function hasFlush(hand) {
  return Pervasives.failwith("implement me");
}

TestUtils$Part2Workshop.runTests("Ch11_poker-Part2Workshop", (function (param) {
        TestUtils$Part2Workshop.test("should find the high card 9 of Spades", (function (param) {
                if (Caml_obj.caml_equal([
                        /* Number */{
                          _0: 9
                        },
                        /* Spade */3
                      ], Pervasives.failwith("implement me"))) {
                  return ;
                }
                throw {
                      RE_EXN_ID: "Assert_failure",
                      _1: [
                        "ch11_poker.re",
                        41,
                        6
                      ],
                      Error: new Error()
                    };
              }));
        TestUtils$Part2Workshop.test("should find the high card Jack of Clubs", (function (param) {
                if (Caml_obj.caml_equal([
                        /* Jack */3,
                        /* Club */0
                      ], Pervasives.failwith("implement me"))) {
                  return ;
                }
                throw {
                      RE_EXN_ID: "Assert_failure",
                      _1: [
                        "ch11_poker.re",
                        48,
                        6
                      ],
                      Error: new Error()
                    };
              }));
        TestUtils$Part2Workshop.test("should find the high card Ace of Diamods", (function (param) {
                if (Caml_obj.caml_equal([
                        /* Ace */0,
                        /* Heart */2
                      ], Pervasives.failwith("implement me"))) {
                  return ;
                }
                throw {
                      RE_EXN_ID: "Assert_failure",
                      _1: [
                        "ch11_poker.re",
                        52,
                        6
                      ],
                      Error: new Error()
                    };
              }));
        TestUtils$Part2Workshop.test("should find a flush", (function (param) {
                if (true === Pervasives.failwith("implement me")) {
                  return ;
                }
                throw {
                      RE_EXN_ID: "Assert_failure",
                      _1: [
                        "ch11_poker.re",
                        56,
                        6
                      ],
                      Error: new Error()
                    };
              }));
        return TestUtils$Part2Workshop.test("should not find a flush", (function (param) {
                      if (false === Pervasives.failwith("implement me")) {
                        return ;
                      }
                      throw {
                            RE_EXN_ID: "Assert_failure",
                            _1: [
                              "ch11_poker.re",
                              69,
                              6
                            ],
                            Error: new Error()
                          };
                    }));
      }));

exports.highCard = highCard;
exports.hasFlush = hasFlush;
/*  Not a pure module */