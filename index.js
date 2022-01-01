import * as wasm from "@neomatrixcode/neomatrixcode_hello_wasm";

wasm.greet();

console.log(wasm.add_two_ints(10, 20));
console.log(wasm.fib(10));
console.log(wasm.net());
