import { defineConfig } from 'vite';
import path from 'node:path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default ({ command }) => {
    return defineConfig({
        base: '',
        plugins: [react()],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        },
        //assetsInclude: ['./src/**/*.woff2'],
    });
};
