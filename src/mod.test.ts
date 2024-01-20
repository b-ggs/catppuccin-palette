import * as dntShim from "./_dnt.test_shims.js";
import { assertEquals } from "./deps/deno.land/std@0.210.0/assert/assert_equals.js";

import { flavorEntries, flavors } from "./mod.js";
import palette from "./palette.js";

dntShim.Deno.test("flavorEntries", () => {
  flavorEntries
    .map(([flavorName, flavor]) =>
      flavor.colorEntries
        .map(([colorName, color]) =>
          assertEquals(palette[flavorName].colors[colorName].hex, color.hex)
        )
    );
});

dntShim.Deno.test("flavors", () => {
  flavorEntries.map(([flavorName]) => {
    assertEquals(
      flavors[flavorName].name,
      palette[flavorName].name,
    );
  });
});
