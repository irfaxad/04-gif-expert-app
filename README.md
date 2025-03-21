# GifExpertApp

## Uso

Esta aplicación permite buscar hasta 10 imágenes GIF por texto de búsqueda. Únicamente necesita escribir cualquier texto en el cuadro de búsqueda y presionar Enter. Automáticamente se mostrarán las imágenes encontradas.

Todas las búsquedas se acumularán en la página, y podrá eliminar alguna sección de búsqueda o restablecer toda la página.

![1742586994738](image/README/1742586994738.gif "Uso de GifExpertApp")

## Instalación

- Clone este repositorio en su ordenador. Tome nota de la carpeta en la que guardó este repositorio (por ejemplo: _/usr/source/gifexpertapp_).
- Abra la Terminal desde la carpeta donde clonó el repositorio, y ejecute:

```bash
yarn install
```

- Una vez que se terminen de instalar las dependencias, ejecute lo siguiente para visualizar GifExpertApp:

```bash
yarn dev
```

- Para modificarlo, puede visualizar la carpeta clonada en su editor de código preferido (se recomienda Visual Studio Code).
- El proyecto incorpora ESLint para validar que el código cumple con los estándares en la industria. Para ejecutar ESLint, utilice el siguiente comando:

```bash
yarn lint
```

* Para exportar el proyecto a Producción, ejecute lo siguiente:

```bash
yarn build
```

### API KEY de GIPHY

Este sitio utiliza una API KEY de GIPHY. Para obtenerla, debe registrarse de manera gratuita en el sitio [GIPHY Developers](https://developers.giphy.com/). Una vez creada la cuenta, dé clic en **Create an API Key** y siga las instrucciones.

Cuando haya generado la API KEY de GIPHY, deberá renombrar el archivo `.env.example` a `.env` y pegar la API KEY en lugar de `your_api_key_here`.

Este paso es indispensable para que funcionen las consultas dentro del sitio web GifExpertApp.

## Agradecimientos

Este proyecto forma parte de las prácticas del curso [React: De cero a experto ( Hooks y MERN )](https://www.udemy.com/course/react-cero-experto/) de [Fernando Herrera](https://www.udemy.com/course/react-cero-experto/#instructor-1), disponible en Udemy y en [{d/t} - DevTalles](https://cursos.devtalles.com/).
