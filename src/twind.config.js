import { defineConfig } from "@twind/core";
import presetAutoprefix from "@twind/preset-autoprefix";
import presetTailwind from "@twind/preset-tailwind";

export default defineConfig({
  presets: [presetAutoprefix(), presetTailwind()],
  important: "#summary-extension-root",
  theme: {
    extend: {
      screens: {
        xs: "586px",
        sm: "769px",
        md: "821px",
        lg: "1025px",
        xl: "1281px",
        "2xl": "1441px",
        "3xl": "1681px",
      },
      zIndex: {
        infinite: "999999",
      },
      colors: {
        azure: "#06aff8",
        "azure-gap-line": "#0dabf0",
        "azure-hover": "#0095e1",
      },
      borderRadius: {
        box: "40px",
        "in-box": "30px",
      },
      dropShadow: {
        default: "0 3px 10px rgba(0, 0, 0, .05)",
      },
      transitionDuration: {
        default: "850ms",
      },
      transitionTimingFunction: {
        default: "cubic-bezier(0.475, 0.425, 0, 0.995)",
      },
    },
  },
});
