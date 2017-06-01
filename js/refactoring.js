//----------------------------------------------------------------------------------------------------------------
function post_confirm(params) {

	//constante mal nombrada resulta confusa, ya que no se especifíca
	//a que id se está haciendo referencia.
	const id = params.service_id;
	
	//mala práctica, let solo se usa cuando la variable
	//se usa pocas veces en una funcion pequeña
	let servicio = Service.find(id);

	//comentario innecesario, considerado mala práctica.
	// console.log(servicio);
	
	//se ocnsidera mala práctica usar bloques if tan grandes para
	//evaluar la misma variable de forma desordenada
	if (servicio != NULL) {
		
		if (servicio.status_id == '6') {
			return {error: '2'};
		}

		if (servicio.driver_id == NULL && servicio.status_id == '1') {

			servicio = Service.update(id, {
				driver_id: params.driver_id,
				status_id: '2'
				//++mala practica dejar cometarios innecesarios
				//Up carro
				//, pwd: md5(params.pwd)
			});

			//mala practica tomar variables de parámetros en este caso ya que
			//se definió al principio de la función que se tomarían estos datos
			//en variables por separado creando desorden en la definición.
			Driver.update(params.driver_id, {
				available: '0'
			});
			//mala práctica debe definirse con var la primera vez
			driverTmp = Driver.find(params.driver_id);

			Service.update(id, {
				car_id: driverTmp.car_id
				//++mala practica dejar cometarios innecesarios
				//Up carro
				//, pwd: md5(params.pwd)
			});

			//Notificar a usuario!!------------------------------------------
			var pushMessage = "Tu servicio ha sido confirmado!";
			//++mala practica dejar cometarios innecesarios
			/* servicio = Service.find(id);
			push = Push.make();
			if (servicio.user.type == '1') {//iPhone
			pushAns = push.ios(servicio.user.uuid, pushMessage);
			} else {
			pushAns = push.android2(servicio.user.uuid, pushMessage);
			} */
			servicio = Service.find(id);

			//mala práctica debe definirse con var la primera vez
			push = Push.make();


			//este bloque resulta confuso ya que se hacen las validaciones previamente a la ejecucion
			if (servicio.user.uuid == '') {
				return {error: '0'};
			}

			//en este bloque se considera mala práctica dejar las mismas variables
			//para ejecutar cada uno de los métodos ya que son parecidas.
			if (servicio.user.type == '1') {//iPhone
				push.ios(servicio.user.uuid, pushMessage, 1, 'honk.wav', 'Open', {service_id: service.id});
			} else {
				push.android2(servicio.user.uuid, pushMessage, 1, 'default', 'Open', {service_id: service.id});
			}
			//---------------------------------------------------------------
			return {error: '0'};

		} else {
			return {error: '1'};
		}
	} else {
		return {error: '3'};
	}
};
//----------------------------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------------------
//Refactorización

/*Se cambia la función por una clase ya que esta contiene varios bloques
que se pueden optimizar como funciones por separado de una misma clase.
*/

/*esta clase lleva los estos atributos:
*/
var post_confirm = function (params) {
	//la constante se define con un nombre más específico
	const this.service_id = params.service_id;
	//se sigue con el patron de definir las variables params
	//en variables por separado.
	this.driver_id = params.driver_id;
	//se define servicio como un objeto atributo de
	//la clase ya que funciona como tal.
	this.servicio = {};
	//variable de mensaje de notificación lo cual
	//da la posibilidad de pasar difirentes mensajes
	//actuando como atributo de la clase para la función
	//de notificación.
	this.pushMessage = "";
}

post_confirm.prototype = {
	/*se resume el ciclo de validacion del servicio en un solo loop
	ya que se validan los estados del servicio cuando sea necesario
	en un solo bloque de forma ordenada.
	*/
	validaServicio: function(){

		if (this.servicio !== NULL) {
			return {error: "3"};
		} else if (this.servicio.status_id === "6"){
			return {error: "2"};
		} else if ( (this.servicio.user.uuid === "") || (this.servicio.driver_id == NULL && this.servicio.status_id == "1") ){
			return {error: "0"};
		}else {
			return {error: "1"};
		}
	},
	/*esta funcion usa todas las funciones definidas en la clase 
	ejecutando de forma modular y más sofisticada cada una de las
	secciones plasmadas en la función anterior,además de mantener
	el código DRY.
	*/
	confirm: function(){		

		var self = this;

		/*crea el objeto servicio tomado como parámetro el id
		solicitado.*/
		this.servicio = Service.find(self.service_id);

		/*ejecuta un solo bloque de validación el cual deja claro
		cual es la condición que se debe cumplir para seguir adelante.
		*/
		if (this.validaServicio().error === "0") {
			/*se asigna el valor de forma organizada y siguiendo los
			parámetros con notación jSon y cin comentarios adicionales.
			*/
			this.servicio = Service.update(self.service_id, {
				"driver_id": self.driver_id,
				"status_id": "2"				
			});
			/*se ejecutala función sin arámetros adicionales.
			*/
			Driver.update(self.driver_id, {
				available: "0"
			});
			
			/*Se defini según buenas prácticas la variable con var
			al inicio.
			*/
			var driverTmp = Driver.find(self.driver_id);

			/*se ejecutala función sin arámetros adicionales.
			*/
			Service.update(self.service_id, {
				car_id: driverTmp.car_id				
			});

			//se notifica al usuario con la funcion de la clase
			this.notificar("Tu servicio ha sido confirmado!");

		}
	},
	/*
	Esta función crea la notificación de una forma más organizada
	ayudando a mantener un código mas limpio y sofisticado.
	*/
	notificar: function(msg){

		var self = this;

		/*crea el objeto servicio tomado como parámetro el id
		solicitado.*/
		this.servicio = Service.find(self.service_id);

		/*Se declaran todas las variables a usar antes de entrar
		en el ciclo condicional, asi el motor trabaja menos y se gana
		un poco de rendimiento además de cumplir con mejores prácticas 
		de código javaScript
		*/
		var uuid = this.servicio.user.uuid,
			service_param_object = {
				"service_id": service.id
			},
			push = Push.make();		

		/*Se ejecuta el ciclo condicional con las variables ya definidas
		solo cambian las que son necesarias para cada método.
		*/
		if (this.servicio.user.type == "1") {//iPhone
			push.ios(uuid, msg, 1, "honk.wav", "Open", service_param_object);
		} else {
			push.android2(uuid, msg, 1, "default", "Open", service_param_object);
		}
	}
}

//se instancia la clase nueva con los parámetros necesarios
var post_confirm_instancia = new post_confirm(params);
//se ejecuta la función principal
post_confirm_instancia.confirm();
//----------------------------------------------------------------------------------------------------------------