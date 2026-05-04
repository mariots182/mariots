# Portfolio de Proyectos - Diseño Inspirado en GitHub

Una página web profesional para listar y mostrar tus proyectos con un diseño moderno inspirado en GitHub.

## 🎨 Características

- **Diseño tipo GitHub**: Tema oscuro con colores similares a GitHub
- **Cards Responsivos**: Diseño adaptable a todos los dispositivos
- **Sistema de Filtros**: Filtra proyectos por categoría (Web, Mobile, Backend, Tools)
- **Información Completa**: Título, descripción, tecnologías, stars y forks
- **Enlaces Directos**: Botones para acceder a GitHub y Demo
- **Animaciones Suaves**: Transiciones y efectos visuales
- **Fácil de Personalizar**: Edita los datos en `script.js`

## 📁 Estructura de Archivos

```
.
├── index.html      # Estructura HTML
├── styles.css      # Estilos CSS
├── script.js       # Lógica JavaScript
└── README.md       # Este archivo
```

## 🚀 Cómo Usar

### 1. **Abrir en el navegador**

Simplemente abre `index.html` en tu navegador web.

### 2. **Personalizar Proyectos**

Edita el array `projects` en `script.js`:

```javascript
const projects = [
  {
    id: 1,
    title: "Nombre de tu proyecto",
    description: "Descripción breve del proyecto",
    category: "web", // web, mobile, backend, tools
    icon: "🌐", // Emoji para el proyecto
    technologies: ["React", "Node.js"],
    stars: 24,
    forks: 5,
    github: "https://github.com/tu-usuario/tu-repo",
    demo: "https://tu-demo.com",
  },
  // ... más proyectos
];
```

### 3. **Variables Personalizables**

En `styles.css`, modifica las variables CSS según tu preferencia:

```css
:root {
  --bg-primary: #0d1117; /* Color de fondo principal */
  --text-primary: #c9d1d9; /* Color de texto principal */
  --accent-blue: #58a6ff; /* Color de acento */
  /* ... más variables */
}
```

## 🎯 Categorías Disponibles

- **web**: Proyectos web (React, Vue, Angular, etc.)
- **mobile**: Aplicaciones móviles (React Native, Flutter, etc.)
- **backend**: APIs y servicios backend
- **tools**: Herramientas y utilidades CLI

## 🛠️ Funciones JavaScript Útiles

### `filterProjects(category)`

Filtra proyectos por categoría.

```javascript
filterProjects("web"); // Muestra solo proyectos web
```

### `addProject(newProject)`

Agrega un nuevo proyecto dinámicamente.

```javascript
addProject({
  id: 9,
  title: "Mi nuevo proyecto",
  description: "Descripción",
  category: "web",
  // ... resto de propiedades
});
```

### `searchProjects(query)`

Busca proyectos por título, descripción o tecnología.

```javascript
searchProjects("React");
```

## 🎨 Personalización Avanzada

### Cambiar Colores

Modifica las variables CSS en `styles.css`:

```css
:root {
  --accent-blue: #00ff00; /* Verde */
  --accent-purple: #ff00ff; /* Magenta */
  --accent-green: #00ff00; /* Verde */
}
```

### Agregar Nuevas Categorías

1. Edita los botones de filtro en `index.html`:

```html
<button class="filter-btn" data-filter="data">Data Science</button>
```

2. Usa `"data"` como valor de `category` en los proyectos.

### Cambiar Tema

Reemplaza las variables CSS con tus colores preferidos:

```css
:root {
  --bg-primary: #ffffff; /* Blanco */
  --text-primary: #000000; /* Negro */
  /* ... ajusta según necesites */
}
```

## 📱 Responsive Design

La página se adapta automáticamente a:

- **Desktop**: Grid de 3-4 columnas
- **Tablet**: Grid de 2 columnas
- **Mobile**: Grid de 1 columna

## ⚡ Rendimiento

- Sin dependencias externas (vanilla JavaScript)
- Carga rápida y optimizada
- CSS eficiente con Grid y Flexbox

## 📝 Ejemplo de Proyecto Completo

```javascript
{
    id: 1,
    title: "E-commerce Platform",
    description: "Plataforma completa de e-commerce con carrito, pagos y administración.",
    category: "web",
    icon: "🛍️",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    stars: 156,
    forks: 38,
    github: "https://github.com/usuario/ecommerce",
    demo: "https://ecommerce-demo.com"
}
```

## 🎓 Cómo Implementar

1. **Clona o copia los archivos** en tu servidor
2. **Personaliza `script.js`** con tus proyectos
3. **Ajusta `styles.css`** con tus colores
4. **Despliega** en tu hosting preferido (GitHub Pages, Vercel, Netlify, etc.)

## 🚀 Despliegue

### GitHub Pages

```bash
# 1. Crea un repositorio
# 2. Sube los archivos
# 3. Ve a Settings > Pages
# 4. Selecciona la rama main
```

### Netlify

- Sube los archivos directamente o conecta tu repositorio
- La página estará disponible en minutos

### Vercel

- Similar a Netlify, muy fácil de usar

## 📄 Licencia

Libre para usar y modificar

## 💡 Consejos

- Mantén las descripciones cortas y claras
- Usa emojis relevantes para cada proyecto
- Actualiza regularmente tus proyectos
- Verifica que los enlaces a GitHub y Demo sean válidos
- Prueba en diferentes dispositivos y navegadores

---

¡Disfruta tu portfolio profesional! 🎉
