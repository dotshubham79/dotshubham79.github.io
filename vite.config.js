import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  server: {
    // This portfolio lives in a cloud-synced Desktop folder. File-sync events
    // can look like source edits and repeatedly refresh the page, so local
    // previews use an intentional manual refresh instead.
    hmr: false,
    watch: {
      ignored: ['**/dist/**', '**/.openai/**'],
    },
  },
});
