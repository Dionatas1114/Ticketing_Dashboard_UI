import rules from '../../../validations/rules';

const messages = {
  //? ------------- AUTH MESSAGES -------------- */
  ERR_INVALID_CREDENTIALS: 'Error de autenticación. Vuelva a intentarlo.',
  ERR_SESSION_EXPIRED: 'Sesión caducada. Inicie sesión.',
  ERR_NO_PERMISSION: 'No tienes permiso para acceder a este recurso.',

  //? ------------- USER MESSAGES -------------- */
  //! ------------- USER VALIDATOR MESSAGES ---- */
  ERR_VALIDATE_USER: 'Error al validar los datos del usuario',

  NAME_IS_REQUIRED: 'Introduzca un nombre',
  MIN_CARACHTERS_NAME: `El nombre debe contener al menos ${rules.userNameMinLength} caracteres.`,
  MAX_CARACHTERS_NAME: `El nombre no debe exceder los ${rules.userNameMaxLength} caracteres.`,
  NAME_ALREADY_REGISTERED: 'Este nombre ya está siendo utilizado por otro usuario.',
  NAME_INVALID: 'El nombre debe contener solo letras y espacios.',

  INVALID_EMAIL: 'Introduzca un e-mail válido.',
  EMAIL_IS_REQUIRED: 'Introduzca un e-mail.',
  EMAIL_ALREADY_REGISTERED: 'Este email ya está siendo utilizado por otro usuario.',
  EMAIL_NOT_FOUND: 'No se encontró ningúno usuario con este e-mail.',

  PASSW_IS_REQUIRED: 'Introduzca una contraseña',
  MIN_CARACHTERS_PASSW: `La contraseña debe contener al menos ${rules.passwMinLength} caracteres.`,
  MAX_CARACHTERS_PASSW: `La contraseña no debe exceder los ${rules.passwMaxLength} caracteres.`,
  PASSW_INVALID:
    'La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial.',

  INVALID_NUMBER: 'Provea un um num. de teléfono válido.',
  MIN_CARACHTERS_NUMBER: `El teléfono debe contener al menos ${rules.phoneLength} caracteres`,
  NUMBER_IS_REQUIRED: 'Introduzca un número de teléfono.',

  //* ------------- USER CONTROLLER MESSAGES ---- */
  ERR_NO_USER_FOUND: 'No se encontró ningún usuario con este ID.',
  ERR_USER_CREATION_DISABLED: 'La creación de usuarios fue deshabilitada por el administrador.',

  //? ------------- WHATSAPP MESSAGES -------------- */
  ERR_NO_OTHER_WHATSAPP: 'Debe haber al menos una conexión de WhatsApp predeterminada.',
  ERR_NO_DEF_WAPP_FOUND:
    'No se encontró WhatsApp predeterminado. Verifique la página de conexiones.',
  ERR_WAPP_NOT_INITIALIZED:
    'Esta sesión de WhatsApp no ​​está inicializada. Verifique la página de conexiones.',
  ERR_WAPP_CHECK_CONTACT:
    'No se pudo verificar el contacto de WhatsApp. Verifique la página de conexiones.',
  ERR_WAPP_INVALID_CONTACT: 'Este no es un número de whatsapp válido.',
  ERR_WAPP_DOWNLOAD_MEDIA:
    'No se pudieron descargar los medios de WhatsApp. Verifique la página de conexiones.',
  ERR_SENDING_WAPP_MSG:
    'Error al enviar el mensaje de WhatsApp. Verifique la página de conexiones.',
  ERR_DELETE_WAPP_MSG: 'No se pudo borrar el mensaje de WhatsApp.',
  ERR_FETCH_WAPP_MSG: 'Error al obtener el mensaje en WhtasApp, tal vez sea demasiado antiguo.',
  ERR_WAPP_GREETING_REQUIRED: 'El mensaje de saludo es obligatorio cuando hay más de una cola.',
  ERR_NO_WAPP_FOUND: 'No se encontró WhatsApp con este ID.',

  //* ------------- CONTACT VALIDATOR MESSAGES -------------- */
  ERR_DUPLICATED_CONTACT: 'Ya existe un contacto con este número.',
  ERR_NO_CONTACT_FOUND: 'No se encontró ningún contacto con este ID.',

  //* ------------- TICKET VALIDATOR MESSAGES -------------- */
  ERR_OTHER_OPEN_TICKET: 'Ya hay un ticket abierto para este contacto.',
  ERR_CREATING_TICKET: 'Error al crear el ticket en la base de datos.',
  ERR_NO_TICKET_FOUND: 'No se encontró ningún ticket con este ID.',

  //* ------------- MESSAGE VALIDATOR MESSAGES -------------- */
  ERR_CREATING_MESSAGE: 'Error al crear el mensaje en la base de datos.',

  //* ------------- QUEUE VALIDATOR MESSAGES -------------- */
  ERR_QUEUE_COLOR_ALREADY_EXISTS: 'Este color ya está en uso, elija otro.',
};

export { messages };
