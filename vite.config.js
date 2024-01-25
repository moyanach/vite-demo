import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig(({command, mode}) => {

  // const env = loadEnv(mode, path.resolve(__dirname, './env'), 'CMDB')
  // console.log(env)

  return {
    plugins: [react()],
    resolve: {
      'alias': {
        '@': path.resolve(__dirname, './src')
      }
    },
    server: {
      proxy: {
        '^/cmdb/v1/.*': {
          target: 'http://localhost:9010',
          changeOrigin: true,
        }
      }
    },
    envPrefix:  'CMDB',
    envDir: path.resolve(__dirname, './env'),
    css: {
      preprocessorOptions: {
        less: {
          math: "always",
        },
      },
    },
  }
})
