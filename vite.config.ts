import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    base: '/НАЗВАНИЕ_ТВОЕГО_РЕПОЗИТОРИЯ/'  // ВАЖНО: слэши в начале и конце!
});
