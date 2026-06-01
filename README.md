# RG Perforaciones - Sitio Web Local

## Requisitos

- [Node.js](https://nodejs.org/) versión 18 o superior
- npm (viene con Node.js)

## Cómo correrlo

1. **Instalar dependencias** (solo la primera vez):
   ```bash
   npm install
   ```

2. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

3. Abrir el navegador en: **http://localhost:5173**

## Cómo generar la versión de producción

```bash
npm run build
```
Los archivos quedan en la carpeta `dist/`. Podés subirlos a cualquier hosting estático.

## Estructura del proyecto

```
src/
  components/
    landing/       ← Secciones de la página (Navbar, Hero, Servicios, etc.)
    ui/            ← Componentes de interfaz (botones, inputs, etc.)
  pages/
    Home.jsx       ← Página principal
  index.css        ← Estilos globales
  App.jsx          ← Componente raíz
  main.jsx         ← Punto de entrada
```

## Personalización

- **Imágenes**: Editá las URLs en `src/pages/Home.jsx`
- **Textos**: Editá cada componente en `src/components/landing/`
- **Colores**: Editá `tailwind.config.js` (oxide = rojo, steel = negro)
- **Contacto**: Editá `src/components/landing/ContactSection.jsx`
