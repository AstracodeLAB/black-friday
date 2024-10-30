import { defineConfig } from 'astro/config';
import react from '@astrojs/react'; // Importa React

// https://astro.build/config
export default defineConfig({
	integrations: [react()], // Agrega la integración aquí
});
