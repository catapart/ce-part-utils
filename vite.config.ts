import { defineConfig } from "vite";
import { default as terser } from '@rollup/plugin-terser';
import dts from 'vite-plugin-dts';

export default defineConfig({
    build: {
        lib: {
            entry: ['src/ce-part-utils.ts']
        },
        minify: false,
        rollupOptions: {
            external: [
                '**/*tests.ts',
                '**/*tests.js',
            ],
            output: [
                {
                    dir: 'dist',
                    entryFileNames: 'ce-part-utils.js',
                    format: 'es'
                },
                {
                    dir: 'dist',
                    entryFileNames: 'ce-part-utils.min.js',
                    format: 'es',
                    plugins: [terser()]
                },
                {
                    dir: 'dist',
                    entryFileNames: 'ce-part-utils.umd.js',
                    name: 'ce-part-utils.umd.js',
                    format: 'umd'
                },
                {
                    dir: 'dist',
                    entryFileNames: 'ce-part-utils.umd.min.js',
                    name: 'ce-part-utils.umd.min.js',
                    format: 'umd',
                    plugins: [terser()]
                }
            ]
        }
    },
    plugins: [dts({exclude: "**/*.test.ts"})]
});