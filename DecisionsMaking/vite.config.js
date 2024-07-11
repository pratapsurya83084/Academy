import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // base:'/',
  // resolve: {
  //   alias: {
  //     '@components': './src/components',
  //     '@assets': './src/assets',
  //     '@styles': './src/styles',
  //     '@utils': './src/utils',
  //   },
  // },
  // server: {
  //   port: 3000,
  //   open: true,
  // },
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `@import "@styles/variables.scss";`,
  //     },
  //   },
  // },
  // build: {
  //   outDir: 'dist',
  //   minify: true,
  // },
  // optimizeDeps: {
  //   exclude: ['react-dom'],
  // },
 

  plugins: [react()],
})
