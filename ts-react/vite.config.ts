/// <reference types="vitest" />
import path from 'path'
import react from '@vitejs/plugin-react'
import autoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'
import inspect from 'vite-plugin-inspect'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
  plugins: [
    react({
      include: '**/*.tsx',
    }),
    autoImport({
      imports: ['react', 'react-router-dom', 'ahooks'],
      dts: './src/auto-imports.d.ts',
    }),
    inspect(),
  ],
  test: {
    include: ['test/**/*.test.{ts,tsx}'],
    environment: 'happy-dom',
  },
})
