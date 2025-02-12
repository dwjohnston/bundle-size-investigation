import type { UserConfig } from 'vite'

export default {
  build: {
    target: "esnext",
    minify: false,
    modulePreload: {
      polyfill: false
    },
    rollupOptions: {
      preserveEntrySignatures: 'strict',

      output: {

      }
    }
  }
} satisfies UserConfig