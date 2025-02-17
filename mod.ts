import definitions from "./palette.json" with { type: "json" };

type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

const entriesFromObject = <T extends object>(obj: T): Entries<T> =>
  Object.entries(obj) as Entries<T>;

/**
 * All flavor names of Catppuccin
 */
export type FlavorName = "latte" | "frappe" | "macchiato" | "mocha";

/**
 * Accent colors of Catppuccin.
 */
export type AccentName =
  | "rosewater"
  | "flamingo"
  | "pink"
  | "mauve"
  | "red"
  | "maroon"
  | "peach"
  | "yellow"
  | "green"
  | "teal"
  | "sky"
  | "sapphire"
  | "blue"
  | "lavender";

/**
 * Monochromatic colors of Catppuccin,
 * from `text` to `crust`
 */
export type MonochromaticName =
  | "text"
  | "subtext1"
  | "subtext0"
  | "overlay2"
  | "overlay1"
  | "overlay0"
  | "surface2"
  | "surface1"
  | "surface0"
  | "base"
  | "mantle"
  | "crust";

/**
 * All color names of Catppuccin
 */
export type ColorName = AccentName | MonochromaticName;

/**
 * Generic to map type T to all Catppuccin color names
 */
export type Colors<T> = Record<ColorName, T>;

/**
 * A flavor of Catppuccin
 */
export type CatppuccinFlavor = Readonly<{
  /**
   * Name of the flavor
   */
  name: string;

  /**
   * Whether the flavor is a dark theme
   */
  dark: boolean;

  /**
   * An object containing all the colors of the flavor
   */
  colors: CatppuccinColors;

  /**
   * A typed Object.entries iterable of the colors of the flavor
   */
  colorEntries: Entries<CatppuccinColors>;
}>;

/**
 * All colors of Catppuccin
 */
export type CatppuccinColors = Readonly<Colors<ColorFormat>>;

/**
 * All flavors of Catppuccin
 */
export type CatppuccinFlavors = Flavors<CatppuccinFlavor>;

export type Flavors<T> = {
  /**
   * Light variant
   */
  latte: T;

  /**
   * Low-saturation, low-contrast dark variant
   */
  frappe: T;

  /**
   * Mid-saturation, mid-contrast dark variant
   */
  macchiato: T;

  /**
   * High-saturation, High-contrast dark variant
   */
  mocha: T;

  /**
   * High-saturation, High-contrast dark variant, but pink
   */
  pinkdrink: T;
};

export type ColorFormat = Readonly<{
  /**
   * String-formatted hex value
   * @example "#babbf1"
   */
  hex: string;

  /**
   * Formatted rgb value
   * @example { r: 186, g: 187, b: 241}
   */
  rgb: {
    /**
     * Red, 0-255
     */
    r: number;
    /**
     * Green, 0-255
     */
    g: number;
    /**
     * Blue, 0-255
     */
    b: number;
  };

  /**
   * Formatted hsl value
   * @example { h: 238.9, s: 12.1, l: 83.5 }
   */
  hsl: {
    /**
     * Hue, 0-360
     */
    h: number;
    /**
     * Saturation, 0-100
     */
    s: number;
    /**
     * Lightness, 0-100
     */
    l: number;
  };

  /**
   * Indicates whether the color is intended to be used as an accent color.
   */
  accent: boolean;
}>;

/**
 * All flavors of Catppuccin
 */
export const flavors = entriesFromObject(definitions)
  .reduce((acc, [flavorName, flavor]) => {
    acc[flavorName] = {
      ...flavor,
      colorEntries: entriesFromObject(flavor.colors),
    };
    return acc;
  }, {} as CatppuccinFlavors);

/**
 * A typed `Object.entries()` iterable of all Catppuccin flavors
 */
export const flavorEntries = entriesFromObject(flavors);
