// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Caml_obj = require("rescript/lib/js/caml_obj.js");
var TestUtils$Part2Workshop = require("./TestUtils.bs.js");

function whatNumberAmIThinking(myNumber) {
  if (myNumber !== undefined) {
    return "My number is: " + String(myNumber);
  } else {
    return "I'm not thinking of any number!";
  }
}

if (whatNumberAmIThinking(undefined) !== "I'm not thinking of any number!") {
  throw {
        RE_EXN_ID: "Assert_failure",
        _1: [
          "ch13_optionals.re",
          25,
          0
        ],
        Error: new Error()
      };
}

if (whatNumberAmIThinking(7) !== "My number is: 7") {
  throw {
        RE_EXN_ID: "Assert_failure",
        _1: [
          "ch13_optionals.re",
          27,
          0
        ],
        Error: new Error()
      };
}

function renderUserName(user) {
  if (user !== undefined) {
    return user;
  } else {
    return "Anonymous";
  }
}

function safeDivide(dividend, divisor) {
  throw {
        RE_EXN_ID: "Assert_failure",
        _1: [
          "ch13_optionals.re",
          43,
          42
        ],
        Error: new Error()
      };
}

function safe_int_of_char(c) {
  throw {
        RE_EXN_ID: "Assert_failure",
        _1: [
          "ch13_optionals.re",
          46,
          28
        ],
        Error: new Error()
      };
}

TestUtils$Part2Workshop.runTests("Ch13_optionals-Part2Workshop", (function (param) {
        TestUtils$Part2Workshop.test("should safely calculate divide", (function (param) {
                if (Caml_obj.caml_equal(1, safeDivide(3, 2))) {
                  return ;
                }
                throw {
                      RE_EXN_ID: "Assert_failure",
                      _1: [
                        "ch13_optionals.re",
                        52,
                        6
                      ],
                      Error: new Error()
                    };
              }));
        TestUtils$Part2Workshop.test("should return None when dividing by 0", (function (param) {
                if (undefined === safeDivide(3, 0)) {
                  return ;
                }
                throw {
                      RE_EXN_ID: "Assert_failure",
                      _1: [
                        "ch13_optionals.re",
                        55,
                        6
                      ],
                      Error: new Error()
                    };
              }));
        TestUtils$Part2Workshop.test("should safely get the char of a number", (function (param) {
                if (Caml_obj.caml_equal(5, safe_int_of_char(/* '5' */53))) {
                  return ;
                }
                throw {
                      RE_EXN_ID: "Assert_failure",
                      _1: [
                        "ch13_optionals.re",
                        58,
                        6
                      ],
                      Error: new Error()
                    };
              }));
        TestUtils$Part2Workshop.test("should safely get the int of a letter", (function (param) {
                if (undefined === safe_int_of_char(/* 'a' */97)) {
                  return ;
                }
                throw {
                      RE_EXN_ID: "Assert_failure",
                      _1: [
                        "ch13_optionals.re",
                        61,
                        6
                      ],
                      Error: new Error()
                    };
              }));
        return TestUtils$Part2Workshop.test("should safely get the int of a symbol", (function (param) {
                      if (undefined === safe_int_of_char(/* '?' */63)) {
                        return ;
                      }
                      throw {
                            RE_EXN_ID: "Assert_failure",
                            _1: [
                              "ch13_optionals.re",
                              64,
                              6
                            ],
                            Error: new Error()
                          };
                    }));
      }));

exports.whatNumberAmIThinking = whatNumberAmIThinking;
exports.renderUserName = renderUserName;
exports.safeDivide = safeDivide;
exports.safe_int_of_char = safe_int_of_char;
/*  Not a pure module */
