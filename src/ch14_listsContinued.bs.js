// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Caml_obj = require("bs-platform/lib/js/caml_obj.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var TestUtils$Part2Workshop = require("./TestUtils.bs.js");

function head(list) {
  if (list) {
    return Caml_option.some(list.hd);
  }
  
}

if (!Caml_obj.caml_equal(1, 1)) {
  throw {
        RE_EXN_ID: "Assert_failure",
        _1: [
          "ch14_listsContinued.re",
          15,
          0
        ],
        Error: new Error()
      };
}

function nth(n, list) {
  throw {
        RE_EXN_ID: "Assert_failure",
        _1: [
          "ch14_listsContinued.re",
          26,
          27
        ],
        Error: new Error()
      };
}

function find(predicate, list) {
  throw {
        RE_EXN_ID: "Assert_failure",
        _1: [
          "ch14_listsContinued.re",
          36,
          36
        ],
        Error: new Error()
      };
}

function map(fn, list) {
  throw {
        RE_EXN_ID: "Assert_failure",
        _1: [
          "ch14_listsContinued.re",
          45,
          28
        ],
        Error: new Error()
      };
}

function filter(predicate, list) {
  throw {
        RE_EXN_ID: "Assert_failure",
        _1: [
          "ch14_listsContinued.re",
          54,
          38
        ],
        Error: new Error()
      };
}

function reduce(fn, init, list) {
  throw {
        RE_EXN_ID: "Assert_failure",
        _1: [
          "ch14_listsContinued.re",
          62,
          37
        ],
        Error: new Error()
      };
}

TestUtils$Part2Workshop.runTests("Ch14_listsContinued-Part2Workshop", (function (param) {
        var nums = {
          hd: 1,
          tl: {
            hd: 2,
            tl: {
              hd: 3,
              tl: {
                hd: 4,
                tl: {
                  hd: 5,
                  tl: {
                    hd: 6,
                    tl: /* [] */0
                  }
                }
              }
            }
          }
        };
        var isEven = function (n) {
          return n % 2 === 0;
        };
        TestUtils$Part2Workshop.test("should get the nth element", (function (param) {
                if (Caml_obj.caml_equal(nth(4, nums), 5)) {
                  return ;
                }
                throw {
                      RE_EXN_ID: "Assert_failure",
                      _1: [
                        "ch14_listsContinued.re",
                        71,
                        6
                      ],
                      Error: new Error()
                    };
              }));
        TestUtils$Part2Workshop.test("should find an element by predicate", (function (param) {
                if (Caml_obj.caml_equal(find(isEven, nums), 2)) {
                  return ;
                }
                throw {
                      RE_EXN_ID: "Assert_failure",
                      _1: [
                        "ch14_listsContinued.re",
                        74,
                        6
                      ],
                      Error: new Error()
                    };
              }));
        TestUtils$Part2Workshop.test("should return None if element is not present", (function (param) {
                if (find(isEven, {
                        hd: 1,
                        tl: {
                          hd: 3,
                          tl: {
                            hd: 5,
                            tl: /* [] */0
                          }
                        }
                      }) === undefined) {
                  return ;
                }
                throw {
                      RE_EXN_ID: "Assert_failure",
                      _1: [
                        "ch14_listsContinued.re",
                        77,
                        6
                      ],
                      Error: new Error()
                    };
              }));
        TestUtils$Part2Workshop.test("should map over a list", (function (param) {
                if (Caml_obj.caml_equal(map((function (x) {
                              return (x << 1);
                            }), nums), {
                        hd: 2,
                        tl: {
                          hd: 4,
                          tl: {
                            hd: 6,
                            tl: {
                              hd: 8,
                              tl: {
                                hd: 10,
                                tl: {
                                  hd: 12,
                                  tl: /* [] */0
                                }
                              }
                            }
                          }
                        }
                      })) {
                  return ;
                }
                throw {
                      RE_EXN_ID: "Assert_failure",
                      _1: [
                        "ch14_listsContinued.re",
                        80,
                        6
                      ],
                      Error: new Error()
                    };
              }));
        TestUtils$Part2Workshop.test("should filter a list by predicate", (function (param) {
                if (Caml_obj.caml_equal(filter(isEven, nums), {
                        hd: 2,
                        tl: {
                          hd: 4,
                          tl: {
                            hd: 6,
                            tl: /* [] */0
                          }
                        }
                      })) {
                  return ;
                }
                throw {
                      RE_EXN_ID: "Assert_failure",
                      _1: [
                        "ch14_listsContinued.re",
                        84,
                        6
                      ],
                      Error: new Error()
                    };
              }));
        return TestUtils$Part2Workshop.test("should reduce a list", (function (param) {
                      if (reduce((function (prim, prim$1) {
                                return prim + prim$1 | 0;
                              }), 0, nums) === 21) {
                        return ;
                      }
                      throw {
                            RE_EXN_ID: "Assert_failure",
                            _1: [
                              "ch14_listsContinued.re",
                              87,
                              6
                            ],
                            Error: new Error()
                          };
                    }));
      }));

exports.head = head;
exports.nth = nth;
exports.find = find;
exports.map = map;
exports.filter = filter;
exports.reduce = reduce;
/*  Not a pure module */
