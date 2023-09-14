import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// Log the environment variable for debugging

console.log("VITE_TARGET:", process.env.TARGET);


export default defineConfig({
  plugins: [react()],
  server:{
    port: 3000,
    proxy: {
      '/api':{
        target: process.env.TARGET, // Use Node.js environment variable here
        changeOrigin: true,
      }
    }
  }
});
