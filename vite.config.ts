import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default ({ command }) => {
    return defineConfig({
        base: '',
        plugins: [react()]
    });
};
