import { defineConfig } from 'vite'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        domaines: resolve(__dirname, 'src/pages/domaines.html'),
        filieres: resolve(__dirname, 'src/pages/filieres.html'),
        ecoles: resolve(__dirname, 'src/pages/ecoles.html'),
        annonces: resolve(__dirname, 'src/pages/annonces.html'),
      }
    }
  }
})