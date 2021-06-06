let runTests = (description, fn) => {
  Js.log(
    j`\\u001B[90m` ++
    ("=============== Running Tests " ++
    (j`\\u001B[97m` ++ (description ++ (j`\\u001B[90m` ++ " =============")))),
  )
  fn()
  Js.log("===============   End Tests   ==================")
}
let lightRed = x => j`\\u001b[91m$x\\u001B[90m`

let lightGreen = x => j`\\u001b[92m$x\\u001B[90m`

let test = (description, fn) => {
  try fn() catch {
  | Assert_failure((s, n1, n2)) =>
    Js.log(description ++ (" " ++ lightRed(`✘`)))
    Js.log(lightRed(j`$s,line:$n1,ch:$n2`) ++ j`\\u001B[0m`)
    raise(Exit)
  }
  Js.log(description ++ (" " ++ lightGreen(`✔`)))
}
