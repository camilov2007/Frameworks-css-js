import { defineconfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineconfig({
    Plugin:
     [tailwindcss()],
});