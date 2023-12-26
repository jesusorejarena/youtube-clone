# Youtube Clone

Prueba tecnica de funcionalidades similares a youtube

## Instalación

### Requisitos Previos

Asegúrate de tener Docker y Docker Compose instalados en tu máquina.

### Instrucciones de Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/jesusorejarena/youtube-clone.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd youtube-clone
   ```

3. Crea la base de datos en PostgreSQL:

   ```bash
   node/database/db.sql
   ```

4. Instala las dependencias de nodejs:

   ```bash
   cd node && npm i & cd ../
   ```

5. Ejecuta el siguiente comando para construir y levantar los contenedores Docker:

   ```bash
   docker-compose up --build
   ```

Esto iniciará el proyecto y configurará la base de datos.
