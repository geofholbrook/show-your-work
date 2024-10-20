import { assertEquals } from "@std/assert/equals";
import { spatialConcat } from "../src/lib/spatialConcat.ts";

Deno.test(function spatialConcatTest() {
  const outerBlock = "outer1\nouter2\nouter3";
  const innerBlock = "inner1\ninner2\ninner3";
  assertEquals(spatialConcat(outerBlock, " ", innerBlock), `outer1
outer2
outer3 inner1
       inner2
       inner3`)
});

Deno.test(function spatialConcatTest() {
    const outerBlock = "outer1\nouter2\nouter3";
    const innerBlock = "inner1\ninner2\ninner3";
    const result = spatialConcat(outerBlock, " ", innerBlock, '\n', 'outer4');
    console.log(result)
    assertEquals(result, `outer1
outer2
outer3 inner1
       inner2
       inner3
outer4`)
  });
