# Trusted Home Services App

## Descripción

Trusted Home Services es una aplicación móvil diseñada para personas que buscan contratar servicios del hogar de manera confiable y segura, evitando estafas o proveedores no verificados. A través de la app, los usuarios pueden acceder a una lista de profesionales certificados para servicios como plomería, carpintería, electricidad, entre otros.

## Tecnologías Utilizadas

- **Frontend**: React Native
- **Backend**: Flask-RESTful (Flask API) desplegado en Render
- **Base de datos**: MongoDB Atlas (NoSQL)
- **Despliegue Backend**: Render
- **Lenguaje**: JavaScript (Frontend), Python (Backend)
- **Conexión HTTP**: Axios para manejar solicitudes al backend

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalados los siguientes componentes en tu máquina:

- [Node.js](https://nodejs.org/) (v14 o superior)
- [Git](https://git-scm.com/)
- Un editor de texto como [VS Code](https://code.visualstudio.com/)

## Instalación

Sigue los pasos a continuación para configurar y ejecutar la aplicación localmente:

### Clonar el repositorio

1. Abre tu terminal.
2. Clona el repositorio con el siguiente comando:

    ```bash
    git clone https://github.com/tu-usuario/nombre-del-repo.git
    ```
3. Navega al directorio del proyecto:

    ```bash
    cd nombre-del-repo
    ```

### Configuración del Frontend (React Native)

1. Dirígete al directorio del frontend:

    ```bash
    cd frontend
    ```

2. Instala las dependencias necesarias con npm o yarn:

    ```bash
    npm install
    ```

    o si usas Yarn:

    ```bash
    yarn install
    ```

3. Ejecuta la aplicación:

    ```bash
    npx react-native run-android
    ```

    o para iOS:

    ```bash
    npx react-native run-ios
    ```

### Configuración del Backend (Flask API)

1. Dirígete al directorio del backend:

    ```bash
    cd backend
    ```

2. Crea y activa un entorno virtual (opcional, pero recomendado):

    ```bash
    python3 -m venv venv
    source venv/bin/activate  # Para MacOS/Linux
    venv\Scripts\activate     # Para Windows
    ```

3. Instala las dependencias del backend:

    ```bash
    pip install -r requirements.txt
    ```

4. Ejecuta el servidor backend de Flask:

    ```bash
    flask run
    ```

### Conectar Frontend con Backend

La aplicación está configurada para conectarse a la base de datos MongoDB Atlas y al backend desplegado en Render. Asegúrate de que el archivo de configuración del frontend tenga la URL correcta para el backend.

## Estructura del Proyecto

El proyecto está dividido en dos carpetas principales:

- `frontend`: Contiene el código de la aplicación móvil en React Native.
- `backend`: Contiene el código de la API en Flask, que gestiona las solicitudes al servidor y las interacciones con la base de datos MongoDB Atlas.

## Uso

Una vez que el servidor backend esté corriendo y la app React Native esté ejecutándose, los usuarios podrán registrarse, iniciar sesión y solicitar servicios del hogar de manera segura desde la app.

## Contacto

Para más información sobre este proyecto, puedes contactarme a través de:

- **Email**: acovamartinez@gmail.com
