// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: ['.sslip.io', 'kong-digital.com', '.kong-digital.com'],
    },
    preview: {
      allowedHosts: ['.sslip.io', 'kong-digital.com', '.kong-digital.com'],
    },
  },
});
