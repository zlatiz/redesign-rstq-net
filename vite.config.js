import { defineConfig } from 'vite'
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        "main": "index.html",
        "about_us": "about-us/index.html",
        "fleet": "fleet/index.html",
        "services": "services/index.html",
        "contact": "contact/index.html"
}
    }
  }
})
