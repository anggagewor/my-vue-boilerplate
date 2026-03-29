import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import compression from 'vite-plugin-compression'
import { visualizer } from 'rollup-plugin-visualizer'
import path from 'path'

export default defineConfig(({ mode }) => ({
  plugins: [
    vue(),
    tailwindcss(),

    mode === 'production' &&
    compression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 10240,
    }),

    mode === 'production' &&
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
  ].filter(Boolean),

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  build: {
    sourcemap: false,
    minify: 'esbuild',
    cssCodeSplit: true,

    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        },
      },
    },
  },
}))