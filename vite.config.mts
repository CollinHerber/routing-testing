import { defineConfig } from "vite";
import aurelia from "@aurelia/vite-plugin";
export default defineConfig({
    server: {
        port: 9500,
        strictPort: true,
    },
    build: {
        target: ['chrome91', 'edge89', 'es2022', 'firefox90', 'safari15']
    },
    plugins: [
        aurelia(),
    ],
});
