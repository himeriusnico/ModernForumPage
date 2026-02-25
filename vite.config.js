import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/scss/app.scss", "resources/js/app.js"],
            refresh: true,
        }),
        vue(),
        tailwindcss(),
    ],

    resolve: {
        alias: {
            "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
            "ziggy-js": path.resolve(__dirname, "vendor/tightenco/ziggy"),
        },
    },

    server: {
        watch: {
            ignored: ["**/storage/framework/views/**"],
        },
    },
});
