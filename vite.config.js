import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
console.log('SVGR Plugin Loaded');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
});
