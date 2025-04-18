// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // import { VitePWA } from "vite-plugin-pwa";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     react()
//     // VitePWA()
//   ],
// });




import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "robots.txt", "apple-touch-icon.png"],
      manifest: {
        name: "Tea of Assam",
        short_name: "TOA",
        description: "A Sip of Authenticity, Directly from the Tea Gardens to Your Cup.",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/src/assets/favicon.svg",
            sizes: "512x512",
            type: "image/svg+xml",
          },
        ],
      },
    }),
  ],
  base: "/vite-host/"
});