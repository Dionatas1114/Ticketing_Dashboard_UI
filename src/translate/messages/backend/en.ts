import rules from '../../../validations/rules';

const messages = {
  //? ------------- AUTH MESSAGES -------------- */
  ERR_INVALID_CREDENTIALS: 'The password is incorrect. Please check the data provided.',
  ERR_SESSION_EXPIRED: 'Session expired. Please login.',
  ERR_NO_PERMISSION: "You don't have permission to access this resource.",

  //? ------------- USER MESSAGES -------------- */
  //! ------------- USER VALIDATOR MESSAGES ---- */
  ERR_VALIDATE_USER: 'Error validating user data',

  NAME_IS_REQUIRED: 'A name is required.',
  MIN_CARACHTERS_NAME: `The name must contain at least ${rules.userNameMinLength} characters.`,
  MAX_CARACHTERS_NAME: `The name must not exceed ${rules.userNameMaxLength} characters.`,
  NAME_ALREADY_REGISTERED: 'An user with this name already exists.',
  NAME_INVALID: 'The name must contain only letters and spaces.',

  INVALID_EMAIL: 'A valid e-mail is required.',
  EMAIL_IS_REQUIRED: 'A e-mail is required.',
  EMAIL_ALREADY_REGISTERED: 'An user with this email already exists.',
  EMAIL_NOT_FOUND: 'No user found with this email.',

  PASSW_IS_REQUIRED: 'A password is required.',
  MIN_CARACHTERS_PASSW: `The password must contain at least ${rules.passwMinLength} characters.`,
  MAX_CARACHTERS_PASSW: `The password must not exceed ${rules.passwMaxLength} characters.`,
  PASSW_INVALID:
    'The password must contain at least one uppercase letter, one lowercase letter, one number and one special character.',

  INVALID_NUMBER: 'A valid phone number is required.',
  MIN_CARACHTERS_NUMBER: `A phone number must contain at least ${rules.phoneLength} characters.`,
  NUMBER_IS_REQUIRED: 'A phone number is required.',

  //* ------------- USER CONTROLLER MESSAGES ---- */
  ERR_NO_USER_FOUND: 'No user found with this ID.',
  ERR_USER_CREATION_DISABLED: 'User creation was disabled by administrator.',

  //? ------------- WHATSAPP MESSAGES -------------- */
  ERR_NO_OTHER_WHATSAPP: 'There must be at lest one default WhatsApp connection.',
  ERR_NO_DEF_WAPP_FOUND: 'No default WhatsApp found. Check connections page.',
  ERR_WAPP_NOT_INITIALIZED: 'This WhatsApp session is not initialized. Check connections page.',
  ERR_WAPP_CHECK_CONTACT: 'Could not check WhatsApp contact. Check connections page.',
  ERR_WAPP_INVALID_CONTACT: 'This is not a valid whatsapp number.',
  ERR_WAPP_DOWNLOAD_MEDIA: 'Could not download media from WhatsApp. Check connections page.',
  ERR_SENDING_WAPP_MSG: 'Error sending WhatsApp message. Check connections page.',
  ERR_DELETE_WAPP_MSG: "Couldn't delete message from WhatsApp.",
  ERR_FETCH_WAPP_MSG: 'Error fetching the message in WhtasApp, maybe it is too old.',
  ERR_WAPP_GREETING_REQUIRED: 'Greeting message is required if there is more than one queue.',
  ERR_NO_WAPP_FOUND: 'No WhatsApp found with this ID.',

  //* ------------- CONTACT VALIDATOR MESSAGES -------------- */
  ERR_DUPLICATED_CONTACT: 'A contact with this number already exists.',
  ERR_NO_CONTACT_FOUND: 'No contact found with this ID.',

  //* ------------- TICKET VALIDATOR MESSAGES -------------- */
  ERR_NO_TICKET_FOUND: 'No ticket found with this ID.',
  ERR_OTHER_OPEN_TICKET: "There's already an open ticket for this contact.",
  ERR_CREATING_TICKET: 'Error while creating ticket on database.',

  //* ------------- MESSAGE VALIDATOR MESSAGES -------------- */
  ERR_CREATING_MESSAGE: 'Error while creating message on database.',

  //* ------------- QUEUE VALIDATOR MESSAGES -------------- */
  ERR_QUEUE_COLOR_ALREADY_EXISTS: 'This color is already in use, pick another one.',
};

export { messages };
