# CRUD de Fotos en React con Hooks y Tailwind

Este proyecto es una aplicación CRUD en React que permite agregar, leer, actualizar y eliminar fotos utilizando una API falsa de JSONPlaceholder. Se ha desarrollado con **React Hooks** y **Tailwind CSS** para garantizar una experiencia intuitiva y responsiva.

## 🚀 Características
- ✅ **Crear**: Agregar nuevas fotos con título e imagen.
- ✅ **Leer**: Mostrar fotos obtenidas desde la API externa.
- ✅ **Actualizar**: Editar el título de una foto en la misma vista.
- ✅ **Eliminar**: Borrar una foto con confirmación.
- ✅ **Experiencia optimizada**: UI intuitiva y responsiva con Tailwind CSS.
- ✅ **Sin recarga**: Los cambios se reflejan sin necesidad de recargar la página.
- ✅ **Carga inicial**: Estado `isLoading` para indicar que se están obteniendo las fotos.

## 📂 Estructura del Proyecto
```
/src
├── components/
│   ├── PhotoForm.js      # Formulario para agregar/editar fotos
│   ├── PhotoList.js      # Lista de fotos
│   ├── PhotoItem.js      # Componente individual de foto
├── services/
│   ├── photoService.js   # Manejo de datos con API
├── App.js
├── index.js
```


