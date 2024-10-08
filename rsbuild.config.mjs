import { defineConfig } from "@rsbuild/core"
import { pluginReact } from "@rsbuild/plugin-react"
import { pluginSass } from "@rsbuild/plugin-sass"

export default defineConfig({
  plugins: [pluginReact(), pluginSass()],
  html: {
    title: "Startduck AI",
    favicon: "./src/assets/images/favicon.ico",
    appIcon: "",
    meta: {
      description: "Startduck AI",
    },
  },
})
