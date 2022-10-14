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
  plugins: [
    react({
      include: '**/*.jsx',
    }),
    autoImport({
      imports: ['react', 'react-router-dom', 'ahooks'],
      dts: false,
      eslintrc: {
        enabled: true, // Default `false`
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
    }),
    inspect(),
  ],
  test: {
    include: ['test/**/*.test.{js,jsx}'],
    environment: 'happy-dom',
  },
})
