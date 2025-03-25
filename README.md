# Finance Track Frontend 🏦

Este frontend proporciona una interfaz de usuario para interactuar con la API de Finance Track. Permite visualizar y sincronizar datos históricos de acciones financieras.

## 🏗️ Arquitectura utilizada

La aplicación sigue una arquitectura basada en **Cliente - Servidor**, donde:

-   **Backend** (Servidor - API RESTful): Sigue patrón MVC internamente  
-   **Frontend** (Cliente - SPA en React): Consume API del backend y gestiona UI

En este caso el Frontend sigue una arquitectura basada en **Componentes Funcionales** con **React** y el manejo de estado global a través de **Context API**.

## ⚙ Tecnologías utilizadas

-   **React**: Framework para construir la interfaz de usuario.
-   **React Router**: Para el manejo de navegación entre páginas.
-   **React Context**: Para la gestión de estado global, como el estado de las acciones y la sincronización de datos.
-   **Axios**: Para realizar solicitudes HTTP a la API del backend.
-   **Bootstrap**: Para diseño de la interfaz con componentes responsivos y modernos.
-   **Recharts**: Para diseño de gráficos de datos.
-   **React Bootstrap**: Para algunos componentes visuales, como breadcrumb y spinner.
-   **SweetAlert2**: Para mostrar alertas estilizadas e interactivas en la interfaz.

## 📂 Estructura de carpetas

-   **`src/`**: Carpeta principal del código fuente.
    -   **`components/`**: Contiene componentes reutilizables de la interfaz (botón de sincronización, gráfico acciones).
    -   **`context/`**: Contiene el contexto de data de la aplicación para manejar el estado global.
    -   **`views/`**: Contiene las vistas de las páginas principales.
    -   **`utils/`**: Contiene funciones de utilidad.
    -   **`utils/`**: Contiene datos relevantes por acción y adiciona un ícono para visualización.

-   **`public/`**: Carpeta pública.
    -   **`assets/`**: Carpeta de recursos estáticos como íconos.

## 📌 Rutas principales

-   **Página principal (Home):** `/`  
    Muestra la lista de acciones y permite seleccionar una de las 9 disponibles para explorar el detalle.

-   **Página de detalles de acción:** `/details/:symbol`  
    Muestra los datos históricos de una acción específica, incluyendo el precio de cierre a lo largo de un periodo de tiempo de un año.

## ✏ Funcionalidades

1. **Visualización de acciones**: Se puede ver una lista de las acciones disponibles.

2. **Sincronización de datos**: Se pueden actualizar los datos de una acción específica mediante un botón de sincronización.

3. **Manejo de errores**: Si ocurre un error al cargar o sincronizar los datos, se muestra una alerta informando al usuario.

4. **Spinners y retroalimentación visual**: Se utilizan spinners para indicar que los datos están siendo cargados o sincronizados, proporcionando una experiencia de usuario fluida.

## 🌐 Estado global

Se utiliza **React Context** para manejar el estado global de la aplicación, como las acciones cargadas y el estado de carga (`loading`). Los siguientes valores están disponibles en el contexto:

-   **stocks**: Lista de todas las acciones disponibles.
-   **selectedSymbol**: Datos de una acción específica seleccionada.
-   **loading**: Estado booleano que indica si los datos están siendo cargados.
