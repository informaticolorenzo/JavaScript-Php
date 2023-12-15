# README para API Usuarios

Este repositorio contiene archivos relacionados con una API para recuperar datos de usuarios y mostrarlos en una aplicación web. La API utiliza DataTables para una presentación eficiente de datos.

## Archivos

### 1. funciones.js

Este archivo JavaScript (`funciones.js`) contiene la función `getApi()` responsable de inicializar y configurar el DataTable para recuperar datos de usuarios desde el servidor.

```javascript
function getApi() {
    $('#tblUsuarios').DataTable({
        responsive: true,
        "destroy": true,
        "ajax": {
            "data": "",
            "url": "php/getApi.php",
            "type": "POST",
            "dataSrc": "",
        },
        "columns": [
            {"data": "id"},
            {"data": "name"},
            {"data": "username"},
            {"data": "email"},
        ],
    });
}
2. index.html
Este archivo HTML (index.html) es el punto de entrada principal para la aplicación web. Incluye las dependencias necesarias como Bootstrap, jQuery y DataTables. La interfaz de usuario es una tabla receptiva para mostrar datos de usuario recuperados de la API.

3. estilo.css
El archivo CSS (estilo.css) proporciona estilos para la aplicación web, centrando la tabla en la pantalla y definiendo estilos adicionales para una mejor experiencia del usuario.

4. getApi.php
El archivo PHP (getApi.php) sirve como script del lado del servidor para recuperar datos de usuario de una API externa (https://jsonplaceholder.typicode.com/users). Incluye encabezados CORS para un acceso amplio.

<?php /
	header('Access-Control-Allow-Origin: *');
	$url="https://jsonplaceholder.typicode.com/users";
	$json = file_get_contents($url); //Aqui tengo todo el contenido
	$obj = json_decode($json);
	echo json_encode($obj);
	
?>  




Personalización de Estilos
Siéntete libre de personalizar los estilos en estilo.css para que coincidan con tu apariencia visual deseada.

Nota
Asegúrate de que tu servidor admita PHP y que CORS esté configurado adecuadamente para el acceso a la API externa.


Siéntete libre de contribuir para mejorar la funcionalidad o corregir problemas. Crea una solicitud de extracción o abre un problema para discusiones.
