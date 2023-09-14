import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';
dotenv.config();



console.log("Proxy target:", process.env.TARGET);
// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env.TARGET': JSON.stringify(process.env.TARGET),
  },
  plugins: [react()],
  server:{
    port: 3000,
    proxy: {
      '/api':{
        target: process.env.TARGET,
        changeOrigin: true,
      }
    }
  }
})
