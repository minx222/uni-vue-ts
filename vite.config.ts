import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import AutoImport from 'unplugin-auto-import/vite'
import { resolve } from 'path'
export default defineConfig({
  build: {
    target: 'es6'
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src')
      }
    ]
  },
  server: {
    port: 9200,
    // 选项写法
    proxy: {
      '/pag': {
        target: 'https://cdn.tmui.design',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api')
      }
    }
  },
  plugins: [
    uni(),
    AutoImport({
      imports: ['vue'],
      dts: './typesImport.d.ts',
      dirs: ['./src/hooks/**', './src/stores/modules/**']
    })
  ]
})
