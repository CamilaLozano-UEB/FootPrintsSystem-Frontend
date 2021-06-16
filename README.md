# FourPawsCitizens-FootprintsSystem

<html>
<dl>
	<dt><h2><em> 1. Integrantes </em></h2></dt>
	<br>
	<dd><b>1.1.</b> Nicolás Peña Mogollón</dd>
	<dd><b>1.2.</b> María Camila Lozano Gutierrez</dd>
	<dd><b>1.3.</b> Juana Valentina Torres Parrado</dd>
	<br>
	<dt><h2><em>2. Stack tecnológico</em></h2></dt>
	<dd>JBoss As -Wildfly 23.0.1.Final</dd>
	<dd> PostgreSQL 10</dd>
	<dd>PostgreSQL JDBC Driver 42.2.10</dd>
	<dd>Postman 8.5.1</dd>
	<dd> Github Pages </dd>
	<dd>JDK 1.8</dd>
	<br>
	<dt><h2><em> 3. Link del proyecto </em></h2></dt>
	<br>
	<dd><b>3.1.</b> Link de los Repositorios</dd>
	<dd>https://github.com/CamilaLozano-UEB/FourPawsCitizens-FootprintsSystem</dd>
  <dd>https://github.com/CamilaLozano-UEB/FootPrintsSystem-Frontend</dd>
	<br>
<dd><b>3.2.</b> Link de Github Pages</dd>
<dd>https://camilalozano-ueb.github.io/FootPrintsSystem-Frontend/</dd>
<dd>Nota: Debido a errores de compatibilidad entre la ruta del proyecto (http) y la proporcionada por Github (https) se grabó el video en local.</dd>
<br>
	<dd><b>3.2.</b> Link de Youtube</dd>
	<dd> https://youtu.be/niEQ0mpSxRo</dd>
	<br>
	<dt><h2><em> 4. Descripción del trabajo, retos, problemas, y oportunidades</em></h2></dt>
	<dd><b>4.1. </b>Descripción del trabajo:</dd>
	<dd><b>4.1.1.</b> Realizar una aplicación compuesta de un frontend tipo aplicación web, un backend manejado en Api Rest y una base de datos en PostgreSQL. En la parte del frontend se debe manejar una interfaz común y tres interfaces particulares para un funcionario del gobierno, una veterinaria y un propietario de mascota. Por parte de las bases de datos y la Api Rest se debe manejar services, resources, entities, pojos, autenticación y seguridad. </dd>
	<dd><b>4.2. </b>Retos: </dd>
	<dd><b>4.2.1. </b>Conexión entre dos repositorios y el envio de información de uno a otro </dd>
	<dd><b>4.2.1. </b>Manejar la información desde api Rest y almacenarla en una base de Datos </dd>
	<dd><b>4.2.1. </b>El diseño de una interfaz gráfica agradable e intuitiva para el usuario</dd>
	<dd><b>4.2.1. </b>La descarga y asociación de una imagen con una mascota para luego implementarla en las tablas </dd>
	<dd><b>4.3. </b>Problemas: </dd>
	<dd><b>4.3.1. </b>"redirect has been blocked by cors policy": Era un error del servidor a la hora de redireccionar. En filters tuvimos que desarrollar un método que contuviera: "Access-Control-Allow-Origin"</dd>
	<dd><b>4.3.1. </b>El manejo de la páginación a la hora de insertar los datos e implementar los filtros por ende las tablas no se cargaban bien. </dd>
	<dd><b>4.3.1. </b> Uso de palabras reservadas en la base de datos en postgreSQL e IntelliJ </dd>
	<dd><b>4.4. </b>Oportunidades:  </dd>
	<dd><b>4.4.1. </b>Realizar un autoaprendizaje en varios de los temas que se trabajaron en el proyecto, de forma autónoma y autodidacta.</dd>
	<dd><b>4.4.2. </b>Tener el criterio de autoexigencia a la hora de realizar los diferentes apartados, teniendo presente siempre la elaboración de métodos y clases con calidad de código. </dd>
	<dd><b>4.4.3. </b>Mejorar nuestra planificación para tener un cronograma realista que nos permitió organizar nuestras actividades y dividirnos el trabajo eficientemente sin sobrecargarnos </dd>
	<dd><b>4.4.4. </b>Conocer y aprender sobre el uso de distintas plataformas y recursos tecnologicos que fueron de apoyo a la hora de construir el proyecto </dd>
	<br>
	<dd> </dd>
	<br>
	<dt><h2><em> 5. Entorno de Desarrollo y Lenguaje de Codificación</em></h2></dt>
	<br>
	<dd> IDE IntelliJ IDEA Ultimate 2021.1</dd>
	<dd> UTF-8 </dd> 
	<br>
	<dt><h2><em> 7. Intrucciones de Uso </em></h2></dt>
<dd><b>Nota: Lea atentamente las instrucciones</b></dd>
<dd><b>Usuario del funcionario: admin</b></dd>
<dd><b>Contraseña del funcionario: 12345</b></dd>
	<dd><b>7.1.</b>Primero corra el servidor de aplicaciones Wildfly de su preferencia. Por otro lado, abra la página web en github pages que sera donde se va a desarrollar el programa.</dd>
	<dd><b>7.2.</b> Cuando abra la página web, tendra una ventana inicial donde podra iniciar sesión, en caso de no tener sesión podra registrarse en el botón que se indica.</dd>
	<dd><b>7.3.</b>Para registrarse podra seleccionar dos roles, propietario o veterinario. Cuando seleccione el rol, ingrese los datos solicitados y oprima el boton de "Registrarse", este lo redireccionara a la ventana de iniciar sesión.</dd>
	<dd><b>7.4.</b>Para iniciar sesión ingrese su usuario y contraseña, dependiendo de su rol, tendra acceso a la interfaz correspondiente </dd>
	<dd><b>7.5.</b>Si ingreso como propietario tendra acceso a una interfaz para registrar sus mascotas, actualizarlas, registrar un caso, visualizar sus mascotas, cambiar sus datos de usuario y visualizar sus casos y visitas juntos. </dd>
	<dd><b>7.6.</b>Para registrar una mascota, vaya a la primera pestaña donde debera ingresar todos los datos necesarios (El microchip e imagen son los unicos campos opcionales). Tras ingresarlos podra crear el registro de su mascota</dd>
	<dd><b>7.7.</b> Para actualizar una mascota vaya a la tabla de mascotas y ahi vaya a la mascota que desea modificar, de click en el botón de actualizar que lo reedireccionara al formulario de actualización, llene los datos correspondientes y envielo.</dd>
	<dd><b>7.8.</b> Para crear un caso, ingrese en la pestaña de crear caso y llene los datos correspondientes y envielo.</dd>
	<dd><b>7.9.</b> Para actualizar sus datos personales, ingrese a la pestaña de cambiar datos de propietario, llene el formulario y envielo.</dd>
	<dd><b>7.10.</b>Para visualizar sus mascotas vaya a la tabla de mascotas, ahi podra verlas filtradas, podra organizarlas si usa las flechas de cada encabezado de la columna o buscar una en especifico. </dd>
	<dd><b>7.11.</b>Para ver todos los casos y visitas de las mascotas, ingrese en la pestaña de Tabla de Casos y Visita, ahi podra filtrar por fechas y el nombre de una mascota en especifico todos los casos y visitas relacionados. </dd>
	<dd><b>7.12.</b>Si es veterianario, tendra acceso a la interfaz para crear visita, la tabla de las mascotas y cambiar sus datos de usuario </dd>
	<dd><b>7.13.</b>Para crear una visita ingrese a la pestaña crear visita, llene el formulario y envielo para que quede registrado</dd>
	<dd><b>7.14.</b>Para ver sus visitas asociadas vaya a la pestaña de tabla de visitas donde podra filtrar por nombre y por fecha las visitas de cada mascota atendida</dd>
	<dd><b>7.15.</b>Para cambiar sus datos de usuario vaya a la pestaña de Cambiar datos de veterinaria, ahi podra actualizarlos.</dd>
	<dd><b>7.16.</b>Como funcionario, no puede crear una sesión, tendra una predeterminada; en esta sesión podra visualizar el total de propietarios, total de mascotas y una tabla de mascotas donde podra filtrarlas</dd>
	<dd><b>7.17.</b> Para visualizar la tabla de mascotas ingrese a la pestaña de tabla de mascotas, ahi podra visualizarlas todas, discriminadas por: especie, raza, tamaño, sexo, microchip, esterilización, total de casos discriminados por tipo y el total de visitas discriminadas por veterinaria y por tipo</dd>
	<dd><b>7.18.</b> Para visualizar la tabla de propietarios ingrese a la pestaña de tabla de propietarios, ahi podra visualizarlos discriminados por: localidad y total de mascotas registradas </dd>
	<dd><b>7.19.</b>Por ultimo tambien podra acceder a una tabla de mascotas donde podra filtrar los datos de: identificación, microchip, nombre, especie, raza, tamaño y sexo. Solo seleccione e ingrese en los campos de filtro las especificaciones que desea, dele click en el botón de filtrar y tendra las mascotas acorde a las caracteristicas</dd>
	</dl>
</html>