// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Caml_obj = require("rescript/lib/js/caml_obj.js");
var Pervasives = require("rescript/lib/js/pervasives.js");
var TestUtils$Part2Workshop = require("./TestUtils.bs.js");

function length(lst) {
  if (lst) {
    return 1 + length(lst.tl) | 0;
  } else {
    return 0;
  }
}

function sum(intList) {
  throw {
        RE_EXN_ID: "Assert_failure",
        _1: [
          "ch06_lists.res",
          27,
          25
        ],
        Error: new Error()
      };
}

function product(intList) {
  throw {
        RE_EXN_ID: "Assert_failure",
        _1: [
          "ch06_lists.res",
          34,
          29
        ],
        Error: new Error()
      };
}

function maxElement(intList) {
  throw {
        RE_EXN_ID: "Assert_failure",
        _1: [
          "ch06_lists.res",
          45,
          32
        ],
        Error: new Error()
      };
}

function minElement(intList) {
  throw {
        RE_EXN_ID: "Assert_failure",
        _1: [
          "ch06_lists.res",
          52,
          32
        ],
        Error: new Error()
      };
}

function join(intList) {
  throw {
        RE_EXN_ID: "Assert_failure",
        _1: [
          "ch06_lists.res",
          62,
          26
        ],
        Error: new Error()
      };
}

var listAppend = Pervasives.$at;

if (!Caml_obj.caml_equal({
        hd: 4,
        tl: {
          hd: 5,
          tl: {
            hd: 6,
            tl: {
              hd: 7,
              tl: /* [] */0
            }
          }
        }
      }, Pervasives.$at({
            hd: 4,
            tl: {
              hd: 5,
              tl: /* [] */0
            }
          }, {
            hd: 6,
            tl: {
              hd: 7,
              tl: /* [] */0
            }
          }))) {
  throw {
        RE_EXN_ID: "Assert_failure",
        _1: [
          "ch06_lists.res",
          71,
          0
        ],
        Error: new Error()
      };
}

if (!Caml_obj.caml_equal({
        hd: 21,
        tl: {
          hd: 22,
          tl: /* [] */0
        }
      }, Pervasives.$at(/* [] */0, {
            hd: 21,
            tl: {
              hd: 22,
              tl: /* [] */0
            }
          }))) {
  throw {
        RE_EXN_ID: "Assert_failure",
        _1: [
          "ch06_lists.res",
          72,
          0
        ],
        Error: new Error()
      };
}

if (!Caml_obj.caml_equal({
        hd: 21,
        tl: {
          hd: 22,
          tl: /* [] */0
        }
      }, Pervasives.$at({
            hd: 21,
            tl: {
              hd: 22,
              tl: /* [] */0
            }
          }, /* [] */0))) {
  throw {
        RE_EXN_ID: "Assert_failure",
        _1: [
          "ch06_lists.res",
          73,
          0
        ],
        Error: new Error()
      };
}

function reverse(list) {
  throw {
        RE_EXN_ID: "Assert_failure",
        _1: [
          "ch06_lists.res",
          81,
          35
        ],
        Error: new Error()
      };
}

TestUtils$Part2Workshop.runTests("Ch06_lists-Part2Workshop", (function (param) {
        var testInput = {
          hd: 3,
          tl: {
            hd: 6,
            tl: {
              hd: 4,
              tl: {
                hd: 7,
                tl: {
                  hd: 1,
                  tl: {
                    hd: 9,
                    tl: {
                      hd: 5,
                      tl: /* [] */0
                    }
                  }
                }
              }
            }
          }
        };
        TestUtils$Part2Workshop.test("should calculate the sum of the list", (function (param) {
                if (sum(testInput) === 35) {
                  return ;
                }
                throw {
                      RE_EXN_ID: "Assert_failure",
                      _1: [
                        "ch06_lists.res",
                        86,
                        63
                      ],
                      Error: new Error()
                    };
              }));
        TestUtils$Part2Workshop.test("should calculate the product of the list", (function (param) {
                if (product(testInput) === 22680) {
                  return ;
                }
                throw {
                      RE_EXN_ID: "Assert_failure",
                      _1: [
                        "ch06_lists.res",
                        88,
                        4
                      ],
                      Error: new Error()
                    };
              }));
        TestUtils$Part2Workshop.test("should get max element in a list", (function (param) {
                if (maxElement(testInput) === 9) {
                  return ;
                }
                throw {
                      RE_EXN_ID: "Assert_failure",
                      _1: [
                        "ch06_lists.res",
                        90,
                        59
                      ],
                      Error: new Error()
                    };
              }));
        TestUtils$Part2Workshop.test("should get min element in a list", (function (param) {
                if (minElement(testInput) === 1) {
                  return ;
                }
                throw {
                      RE_EXN_ID: "Assert_failure",
                      _1: [
                        "ch06_lists.res",
                        91,
                        59
                      ],
                      Error: new Error()
                    };
              }));
        TestUtils$Part2Workshop.test("should join the list to a string", (function (param) {
                if (join(testInput) === "3647195") {
                  return ;
                }
                throw {
                      RE_EXN_ID: "Assert_failure",
                      _1: [
                        "ch06_lists.res",
                        92,
                        59
                      ],
                      Error: new Error()
                    };
              }));
        return TestUtils$Part2Workshop.test("should return reversed list", (function (param) {
                      if (Caml_obj.caml_equal(reverse(testInput), {
                              hd: 5,
                              tl: {
                                hd: 9,
                                tl: {
                                  hd: 1,
                                  tl: {
                                    hd: 7,
                                    tl: {
                                      hd: 4,
                                      tl: {
                                        hd: 6,
                                        tl: {
                                          hd: 3,
                                          tl: /* [] */0
                                        }
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
                              "ch06_lists.res",
                              94,
                              4
                            ],
                            Error: new Error()
                          };
                    }));
      }));

exports.length = length;
exports.sum = sum;
exports.product = product;
exports.maxElement = maxElement;
exports.minElement = minElement;
exports.join = join;
exports.listAppend = listAppend;
exports.reverse = reverse;
/*  Not a pure module */
