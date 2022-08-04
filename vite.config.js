import vue from "@vitejs/plugin-vue";
import { viteCommonjs } from "@originjs/vite-plugin-commonjs";

// https://vitejs.dev/config/
export default {
  resolve: { alias: { "@": "/src" } },
  plugins: [vue(), viteCommonjs()],
  server: {
    port: 8090
  },
  base: "",
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  assetsInclude: ["OSPlusNeoVpApi.js"],
  test: {
    globals: true,
    setupFiles: './test/setupTests.js',
    environment: 'jsdom',
    coverage: {
      reporter: ['text', 'lcov'],
      reportsDirectory: 'coverage',
    }
  },
};
