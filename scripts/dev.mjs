import { spawn } from 'node:child_process';
import path from 'node:path';
import process from 'node:process';

const viteExecutable = path.resolve(
    'node_modules',
    '.bin',
    process.platform === 'win32' ? 'vite.cmd' : 'vite',
);

const api = spawn(process.execPath, ['server.mjs'], {
    stdio: 'inherit',
    env: { ...process.env, NODE_ENV: 'development', PORT: '3001' },
});

const web = spawn(viteExecutable, [], {
    stdio: 'inherit',
    env: process.env,
});

let shuttingDown = false;

const stop = (exitCode = 0) => {
    if (shuttingDown) return;
    shuttingDown = true;
    api.kill('SIGTERM');
    web.kill('SIGTERM');
    process.exitCode = exitCode;
};

api.on('exit', (code, signal) => {
    if (!shuttingDown) {
        console.error(`Mail server stopped unexpectedly (${signal ?? code ?? 'unknown'}).`);
        stop(code ?? 1);
    }
});

web.on('exit', (code, signal) => {
    if (!shuttingDown) {
        if ((code ?? 0) !== 0) console.error(`Vite stopped unexpectedly (${signal ?? code ?? 'unknown'}).`);
        stop(code ?? 0);
    }
});

process.on('SIGINT', () => stop());
process.on('SIGTERM', () => stop());
