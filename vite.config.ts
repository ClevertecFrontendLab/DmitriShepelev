import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [react()],
    server: {
        host: true,
        port: 3000,
    },
    resolve: {
        alias: {
            '@public': path.resolve(__dirname, 'public'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@constants': path.resolve(__dirname, 'src/constants'),
            '@hooks': path.resolve(__dirname, 'src/hooks'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@redux': path.resolve(__dirname, 'src/redux'),
            '@types': path.resolve(__dirname, 'src/types'),
            '@utils': path.resolve(__dirname, 'src/utils'),
        },
    },
    css: {
        preprocessorOptions: {
            less: {
                modifyVars: {
                    // 'primary-color': '#1DA57A',
                    // 'heading-color': 'green',
                    'layout-body-background': 'transparent',
                    'menu-item-vertical-margin': '18px',
                    'layout-header-background': '#f0f5ff',
                    'layout-header-height': 'auto',
                    'layout-header-padding': '16px 24px',
                    'typography-title-font-weight': '700',
                    'typography-title-margin-bottom': '0.3rem',
                    'heading-1-size': '38px',
                    'heading-3-size': '24px',
                    'layout-zero-trigger-width': '0',
                    'layout-zero-trigger-height': '0',
                    '@menu-item-padding': '0 8px',
                },
                javascriptEnabled: true,
            },
        },
    },
});
