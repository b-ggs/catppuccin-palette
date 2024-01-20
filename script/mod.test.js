"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dntShim = __importStar(require("./_dnt.test_shims.js"));
const assert_equals_js_1 = require("./deps/deno.land/std@0.210.0/assert/assert_equals.js");
const mod_js_1 = require("./mod.js");
const palette_js_1 = __importDefault(require("./palette.js"));
dntShim.Deno.test("flavorEntries", () => {
    mod_js_1.flavorEntries
        .map(([flavorName, flavor]) => flavor.colorEntries
        .map(([colorName, color]) => (0, assert_equals_js_1.assertEquals)(palette_js_1.default[flavorName].colors[colorName].hex, color.hex)));
});
dntShim.Deno.test("flavors", () => {
    mod_js_1.flavorEntries.map(([flavorName]) => {
        (0, assert_equals_js_1.assertEquals)(mod_js_1.flavors[flavorName].name, palette_js_1.default[flavorName].name);
    });
});
