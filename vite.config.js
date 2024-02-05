import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  define: {
    "import.meta.env.PUBLIC_URL": JSON.stringify("http://localhost:5173/"),
    "import.meta.env.PUBLIC_URL_SERVICES": JSON.stringify(
      "http://localhost:3031/"
    ),
  },
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: [
        "/Error.png",
        "/arrow-back.svg",
        "/vite.svg",
        "/vite192.png",
        "/vite512.png",
        "/fonts/woff/iranyekanwebextrablackfanum.woff",
        "/fonts/eot/iranyekanwebboldfanum.eot",
        "/fonts/ttf/iranyekanwebboldfanum.ttf",
        "/fonts/eot/iranyekanwebthinfanum.eot",
        "/fonts/woff/iranyekanwebboldfanum.woff",
        "/fonts/woff/iranyekanwebthinfanum.woff",
        "/fonts/ttf/iranyekanwebthinfanum.ttf",
        "/fonts/eot/iranyekanwebregularfanum.eot",
        "/fonts/woff/iranyekanwebregularfanum.woff",
        "/fonts/ttf/iranyekanwebregularfanum.ttf",
        "/fonts/eot/iranyekanwebextrablackfanum.eot",
        "/fonts/ttf/iranyekanwebextrablackfanum.ttf",
      ],
      manifest: {
        name: "PWA HasinQ",
        start_url: "/",
        short_name: "HasinQ",
        description: "PWA HasinQ test",
        theme_color: "#031c36",
        icons: [
          {
            src: "vite192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "vite512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "vite512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
  // Other configuration options
});
// https://vitejs.dev/config/
