import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'



// https://vitejs.dev/config/
export default defineConfig({
  base: "/cpsprimemun_webpage/",
  plugins: [
    react(), 
          ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, './index.html'),
        about: resolve(__dirname, './about/index.html'),
        committee: resolve (__dirname, './committee/index.html'),
        conference: resolve (__dirname, './conference/index.html'),
        WHO: resolve (__dirname, './WHO/index.html'),
        ECOSOC: resolve (__dirname, './ECOSOC/index.html'),
        G20: resolve (__dirname, './G20/index.html'),
        IP: resolve (__dirname, './IP/index.html'),
        UNCSW: resolve (__dirname, './UNCSW/index.html'),
        UNFCCC: resolve (__dirname, './UNFCCC/index.html'),
        UNGA: resolve (__dirname, './UNGA/index.html'),
        UNHRC: resolve (__dirname, './UNHRC/index.html'),
        UNSC: resolve (__dirname, './UNSC/index.html'),

      },
    },
  },
});
