import { assertEquals } from "std/assert/assert_equals.ts";

import { flavorEntries, flavors } from "@catppuccin/palette";
import palette from "@/palette.json" assert { type: "json" };

Deno.test("flavorEntries", () => {
  flavorEntries
    .map(([flavorName, flavor]) =>
      flavor.colorEntries
        .map(([colorName, color]) =>
          assertEquals(palette[flavorName].colors[colorName].hex, color.hex)
        )
    );
});

Deno.test("flavors", () => {
  flavorEntries.map(([flavorName]) => {
    assertEquals(
      flavors[flavorName].name,
      palette[flavorName].name,
    );
  });
});
