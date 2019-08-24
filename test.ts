import { runTests, test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

import { dot } from "./mod.ts";

test(function dotTest(): void {
  const a1 = 1,
    a2 = 2,
    a3 = 3,
    a4 = 4,
    a5 = 5,
    a6 = 6;
  const a = [[a1, a2], [a3, a4], [a5, a6]];
  const b1 = 12,
    b2 = 2,
    b3 = 3,
    b4 = 4;
  const b = [[b1, b2], [b3, b4]];
  assertEquals(dot(a, b), [
    [a1 * b1 + a2 * b3, a1 * b2 + a2 * b4],
    [a3 * b1 + a4 * b3, a3 * b2 + a4 * b4],
    [a5 * b1 + a6 * b3, a5 * b2 + a6 * b4]
  ]);
});
runTests();
