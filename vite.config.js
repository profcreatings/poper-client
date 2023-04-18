import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import basicSsl from '@vitejs/plugin-basic-ssl';

export default ({ mode }) => {
    const env = loadEnv(mode, process.cwd());

    return defineConfig({
        plugins: [
            basicSsl(),
            react({
                babel: {
                    plugins: ['@emotion', 'lodash'],
                },
            }),
            svgr({
                svgrOptions: {
                    ref: true,
                },
            }),
        ],
        server: {
            port: 3000,
            open: true,
            host: true,
        },
        build: {
            sourcemap: env.VITE_SOURCE_MAPS === 'true',
            emptyOutDir: true,
        },
        test: {
            environment: 'jsdom',
        },
    });
};
