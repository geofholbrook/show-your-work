import { format } from "../src/format.ts";
import A from "../src/main.ts";

console.log(format(A(1, "x").add(A(2, "y"), "sum")));
const calc = A(1, "x").add(A(2, "y").multiply(A(3, "z")));
console.log(format(calc));

console.log(JSON.stringify(calc, null, 4));
