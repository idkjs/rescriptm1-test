// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var TestUtils$Part2Workshop = require("./TestUtils.bs.js");

function getSeven(param) {
  throw {
        RE_EXN_ID: "Assert_failure",
        _1: [
          "ch02_tests.res",
          13,
          21
        ],
        Error: new Error()
      };
}

TestUtils$Part2Workshop.runTests("Ch02_tests-Part2Workshop", (function (param) {
        return TestUtils$Part2Workshop.test("should return 7", (function (param) {
                      if (7 === getSeven(undefined)) {
                        return ;
                      }
                      throw {
                            RE_EXN_ID: "Assert_failure",
                            _1: [
                              "ch02_tests.res",
                              16,
                              42
                            ],
                            Error: new Error()
                          };
                    }));
      }));

exports.getSeven = getSeven;
/*  Not a pure module */
