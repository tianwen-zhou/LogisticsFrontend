/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

// 加载 .env 文件
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    define: {
        'process.env': process.env,
      },
    server: {
        host: true,
    },
    base: './',
    test: {
        globals: true,
        environment: 'jsdom'
    }
});
