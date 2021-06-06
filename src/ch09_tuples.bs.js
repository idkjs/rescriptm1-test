// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Caml_obj = require("bs-platform/lib/js/caml_obj.js");
var TestUtils$Part2Workshop = require("./TestUtils.bs.js");

var s = "hello";

if (s !== "hello") {
  throw {
        RE_EXN_ID: "Assert_failure",
        _1: [
          "ch09_tuples.re",
          13,
          0
        ],
        Error: new Error()
      };
}

function add3d(point1, point2) {
  return [
          point1[0] + point2[0] | 0,
          point1[1] + point2[1] | 0,
          point1[2] + point2[2] | 0
        ];
}

if (!Caml_obj.caml_equal([
        3,
        4,
        5
      ], add3d([
            1,
            1,
            1
          ], [
            2,
            3,
            4
          ]))) {
  throw {
        RE_EXN_ID: "Assert_failure",
        _1: [
          "ch09_tuples.re",
          22,
          0
        ],
        Error: new Error()
      };
}

function string_of_point(point) {
  throw {
        RE_EXN_ID: "Assert_failure",
        _1: [
          "ch09_tuples.re",
          31,
          42
        ],
        Error: new Error()
      };
}

function first(pair) {
  throw {
        RE_EXN_ID: "Assert_failure",
        _1: [
          "ch09_tuples.re",
          39,
          33
        ],
        Error: new Error()
      };
}

function second(pair) {
  throw {
        RE_EXN_ID: "Assert_failure",
        _1: [
          "ch09_tuples.re",
          46,
          34
        ],
        Error: new Error()
      };
}

function has7(tuple) {
  if (tuple[0] !== 7) {
    return tuple[1] === 7;
  } else {
    return true;
  }
}

TestUtils$Part2Workshop.runTests("Ch09_tuples-Part2Workshop", (function (param) {
        TestUtils$Part2Workshop.test("should convert the point to a string", (function (param) {
                if ("(3., 4.)" === string_of_point([
                        3,
                        4
                      ])) {
                  return ;
                }
                throw {
                      RE_EXN_ID: "Assert_failure",
                      _1: [
                        "ch09_tuples.re",
                        73,
                        6
                      ],
                      Error: new Error()
                    };
              }));
        TestUtils$Part2Workshop.test("should convert the point to a string", (function (param) {
                if ("(5., 12.)" === string_of_point([
                        5,
                        12
                      ])) {
                  return ;
                }
                throw {
                      RE_EXN_ID: "Assert_failure",
                      _1: [
                        "ch09_tuples.re",
                        76,
                        6
                      ],
                      Error: new Error()
                    };
              }));
        TestUtils$Part2Workshop.test("should get first from a tuple", (function (param) {
                if ("foo" === first([
                        "foo",
                        "bar"
                      ])) {
                  return ;
                }
                throw {
                      RE_EXN_ID: "Assert_failure",
                      _1: [
                        "ch09_tuples.re",
                        79,
                        6
                      ],
                      Error: new Error()
                    };
              }));
        return TestUtils$Part2Workshop.test("should get second from a tuple", (function (param) {
                      if ("bar" === second([
                              "foo",
                              "bar"
                            ])) {
                        return ;
                      }
                      throw {
                            RE_EXN_ID: "Assert_failure",
                            _1: [
                              "ch09_tuples.re",
                              82,
                              6
                            ],
                            Error: new Error()
                          };
                    }));
      }));

var example = [
  5,
  "hello",
  /* 'A' */65
];

var i = 5;

var c = /* 'A' */65;

exports.example = example;
exports.i = i;
exports.s = s;
exports.c = c;
exports.add3d = add3d;
exports.string_of_point = string_of_point;
exports.first = first;
exports.second = second;
exports.has7 = has7;
/*  Not a pure module */
