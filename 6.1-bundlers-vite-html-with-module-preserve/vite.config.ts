import type { UserConfig } from 'vite'

export default {
  build: {
    rollupOptions: {
      preserveEntrySignatures: 'strict',
      output: {
        preserveModules: true, 
        
      }
    }
  }
} satisfies UserConfig