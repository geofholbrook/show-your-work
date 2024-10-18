import A, { format } from "../src/ArithmeticNode.ts";

const calc1 = format(A(1, "x").add(A(2, "y"), "sum"));
console.log(calc1);
// (1 (x) + 2 (y)) = 3 (sum)

const calc2 = A(1, "x").add(A(2, "y").multiply(A(3, "z")), "myResult");
console.log(format(calc2));
// (1 (x) + (2 (y) * 3 (z))) = 7 (myResult)
