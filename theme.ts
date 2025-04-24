"use client";

import {
  createTheme,
  defaultVariantColorsResolver,
} from "@mantine/core";

export const theme = createTheme({
  variantColorResolver: (input) => {
    console.log(
      `input.color = ${input.color}, input.variant = ${input.variant},  input.gradient? = ${input.gradient}, input.autoContrast? = ${input.autoContrast}`,
    );

    // 完全に上書き
    if (input.variant === "my-variant") {
      console.log("return my-variant");
      return {
        background: "var(--mantine-color-yellow-filled)",
        hover: "var(--mantine-color-yellow-filled-hover)",
        color: "var(--mantine-color-yellow-text)",
        border: "1px dashed var(--mantine-color-yellow-outline)",
        hoverColor: "var(--mantine-color-white)",
      };
    }

    // カスタマイズしないならデフォルトを返す
    return defaultVariantColorsResolver(input);
  },
});
