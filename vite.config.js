import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  // ⚠️ 关键：这里必须填你的 GitHub 仓库名，前后都要加斜杠
  // 例如你的仓库叫 "my-tracker-demo"，这里就填 '/my-tracker-demo/'
  // 如果你是部署到 username.github.io 根域名，则填 '/'
  base: '/Tracker-G-M-EN/', 
  
  build: {
    rollupOptions: {
      // 告诉 Vite 你的项目里有哪些 HTML 页面需要打包
      input: {
        main: resolve(__dirname, 'index.html'),      // 小红书入口
        mall: resolve(__dirname, 'mall.html'),      // 商城入口
        joyoung: resolve(__dirname, 'joyong.html'), // 九阳页
        taobao: resolve(__dirname, 'taobao.html'),   // 淘宝页
      },
    },
  },
});