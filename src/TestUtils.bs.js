// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Pervasives = require("bs-platform/lib/js/pervasives.js");
var Caml_js_exceptions = require("bs-platform/lib/js/caml_js_exceptions.js");

function runTests(description, fn) {
  console.log("\u001B[90m" + ("=============== Running Tests " + ("\u001B[97m" + (description + ("\u001B[90m" + " =============")))));
  Curry._1(fn, undefined);
  console.log("===============   End Tests   ==================");
  
}

function lightRed(x) {
  return "\u001b[91m" + x + "\u001B[90m";
}

function lightGreen(x) {
  return "\u001b[92m" + x + "\u001B[90m";
}

function test(description, fn) {
  try {
    Curry._1(fn, undefined);
  }
  catch (raw_exn){
    var exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
    if (exn.RE_EXN_ID === "Assert_failure") {
      var match = exn._1;
      console.log(description + (" " + ("\u001b[91m" + "✘" + "\u001B[90m")));
      console.log(lightRed("" + match[0] + ",line:" + match[1] + ",ch:" + match[2]) + "\u001B[0m");
      throw {
            RE_EXN_ID: Pervasives.Exit,
            Error: new Error()
          };
    }
    throw exn;
  }
  console.log(description + (" " + ("\u001b[92m" + "✔" + "\u001B[90m")));
  
}

exports.runTests = runTests;
exports.lightRed = lightRed;
exports.lightGreen = lightGreen;
exports.test = test;
/* No side effect */
