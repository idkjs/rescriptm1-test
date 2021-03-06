// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var List = require("bs-platform/lib/js/list.js");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");
var Example$Part2Workshop = require("./Example.bs.js");

Example$Part2Workshop.sayHi(undefined);

if (true !== Example$Part2Workshop.isVowel(/* 'a' */97)) {
  throw {
        RE_EXN_ID: "Assert_failure",
        _1: [
          "ch07_modules.re",
          18,
          0
        ],
        Error: new Error()
      };
}

if (false !== Example$Part2Workshop.isVowel(/* 'b' */98)) {
  throw {
        RE_EXN_ID: "Assert_failure",
        _1: [
          "ch07_modules.re",
          19,
          0
        ],
        Error: new Error()
      };
}

function even(n) {
  return n % 2 === 0;
}

var Inner = {
  even: even
};

var nums = {
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
};

if (4 !== List.length(nums)) {
  throw {
        RE_EXN_ID: "Assert_failure",
        _1: [
          "ch07_modules.re",
          55,
          0
        ],
        Error: new Error()
      };
}

if (!Caml_obj.caml_equal({
        hd: 7,
        tl: {
          hd: 6,
          tl: {
            hd: 5,
            tl: {
              hd: 4,
              tl: /* [] */0
            }
          }
        }
      }, List.rev(nums))) {
  throw {
        RE_EXN_ID: "Assert_failure",
        _1: [
          "ch07_modules.re",
          56,
          0
        ],
        Error: new Error()
      };
}

exports.Inner = Inner;
exports.nums = nums;
/*  Not a pure module */
