import { assertEquals } from "@std/assert";
import A from "../src/main.ts";

Deno.test(function basic() {
  const n = A("x", 1);
  assertEquals(n.valueOf(), 1);
});

Deno.test(function add() {
  assertEquals(A("x", 1).add(A("y", 2)).valueOf(), 3);
});

Deno.test(function subtract() {
  assertEquals(A("x", 1).subtract(A("y", 2)).valueOf(), -1);
});

Deno.test(function multiply() {
  assertEquals(A("x", 2).multiply(A("y", 3)).valueOf(), 6);
});

Deno.test(function divide() {
  assertEquals(A("x", 6).divide(A("y", 3)).valueOf(), 2);
});
