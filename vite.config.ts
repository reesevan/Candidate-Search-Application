import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  envDir: './env', // optional, keep it if needed
  plugins: [react()],
  server: {
    // no need to add historyApiFallback
    open: true, // optional: opens browser on dev start
  },
});
