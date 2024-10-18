import {
  assertEquals,
  assertMatch,
  assertObjectMatch,
  assertStrictEquals,
} from "@std/assert";
import A from "../src/main.ts";

Deno.test(function basic() {
  const n = A(1);
  assertEquals(n.valueOf(), 1);
});

Deno.test(function add() {
  assertEquals(A(1).add(A(2)).valueOf(), 3);
});

Deno.test(function subtract() {
  assertEquals(A(1).subtract(A(2)).valueOf(), -1);
});

Deno.test(function multiply() {
  assertEquals(A(2).multiply(A(3)).valueOf(), 6);
});

Deno.test(function divide() {
  assertEquals(A(6).divide(A(3)).valueOf(), 2);
});

Deno.test(function isSerializable() {
  const n = A(1);
  const serialized = JSON.stringify(n);
  const deserialized = JSON.parse(serialized);
  assertObjectMatch(deserialized, {
    value: 1,
  });
});
