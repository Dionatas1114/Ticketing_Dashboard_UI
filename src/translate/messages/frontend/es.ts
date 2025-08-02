import { messages as backMessages } from '../backend/es';
import rules from '../../../validations/rules';

const messages = {
  es: {
    translations: {
      signup: {
        title: 'Registro',
        toasts: {
          success: '¡El usuario ha sido creado satisfactoriamente! ¡Ahora inicia sesión!',
          fail: 'Error creando el usuario. Verifica la data reportada.',
        },
        form: {
          userName: {
            title: 'Nombre',
            placeholder: 'Nombre Completo',
          },
          email: {
            title: 'Correo Electrónica',
            placeholder: 'tu@email',
          },
          password: 'Contraseña',
          allowExtraEmails: 'Quiero recibir actualizaciones por correo',
          or: 'O',
          google: 'Entrar con Google',
          facebook: 'Entrar con Facebook',
          alreadyHaveAccount: '¿Ya tienes una cuenta?',
        },
        buttons: {
          submit: 'Regístrate',
          loginLink: 'Inicia Sesión',
        },
      },
      signin: {
        title: 'Inicio de Sesión',
        form: {
          email: {
            title: 'Correo Electrónica',
            placeholder: 'tu@email',
          },
          password: 'Contraseña',
          rememberMe: 'Recuerdame',
          or: 'O',
          google: 'Entrar con Google',
          facebook: 'Entrar con Facebook',
          noAccount: '¿No tienes una cuenta?',
        },
        buttons: {
          submit: 'Ingresa',
          registerLink: '¡Regístrate!',
          forgotPassword: 'Olvidaste tu contraseña?',
        },
      },
      auth: {
        toasts: {
          success: '¡Inicio de sesión exitoso!',
          fail: 'Error de inicio de sesión. Verifique los datos informados.',
        },
      },
      home: {
        title: 'Inicio',
        charts: {
          perDay: {
            title: 'Tickets hoy: ',
          },
        },
      },
      connections: {
        title: 'Conexiones',
        toasts: {
          deleted: '¡La conexión de WhatsApp ha sido borrada satisfactoriamente!',
        },
        confirmationModal: {
          deleteTitle: 'Borrar',
          deleteMessage: '¿Estás seguro? Este proceso no puede ser revertido.',
          disconnectTitle: 'Desconectar',
          disconnectMessage: 'Estás seguro? Deberá volver a leer el código QR',
        },
        qrcodeModal: {
          title: 'Lea el código QR',
          generateQrCode: 'Haz clic para generar el código QR',
          close: 'Cerrar',
        },
        buttons: {
          add: 'Agregar conexión de WhatsApp',
          disconnect: 'Desconectar',
          tryAgain: 'Inténtalo de nuevo',
          qrcode: 'QR CODE',
          newQr: 'Nuevo QR CODE',
          connecting: 'Conectando',
        },
        toolTips: {
          disconnected: {
            title: 'No se pudo iniciar la sesión de WhatsApp',
            content:
              'Asegúrese de que su teléfono celular esté conectado a Internet y vuelva a intentarlo o solicite un nuevo código QR',
          },
          connected: {
            title: 'Conexión establecida',
          },
          timeout: {
            title: 'Se perdió la conexión con el teléfono celular',
            content:
              "Asegúrese de que su teléfono celular esté conectado a Internet y que WhatsApp esté abierto, o haga clic en el botón 'Desconectar' para obtener un nuevo código QR",
          },
        },
        table: {
          name: 'Nombre',
          status: 'Estado',
          lastUpdate: 'Última Actualización',
          default: 'Por Defecto',
          actions: 'Acciones',
          session: 'Sesión',
        },
      },
      whatsappModal: {
        title: {
          add: 'Agrega WhatsApp',
          edit: 'Edita WhatsApp',
        },
        form: {
          name: 'Nombre',
          default: 'Por Defecto',
          farewellMessage: 'Mensagem de Adeus',
        },
        buttons: {
          okAdd: 'Agregar',
          okEdit: 'Guardar',
          cancel: 'Cancelar',
        },
        success: 'WhatsApp guardado satisfactoriamente.',
      },
      contacts: {
        title: 'Contactos',
        toasts: {
          deleted: '¡Contacto borrado satisfactoriamente!',
        },
        searchPlaceholder: 'Buscar...',
        confirmationModal: {
          deleteTitle: 'Borrar',
          importTitlte: 'Importar contactos',
          deleteMessage:
            '¿Estás seguro que deseas borrar este contacto? Todos los tickets relacionados se perderán.',
          importMessage: '¿Quieres importar todos los contactos desde tu teléfono?',
        },
        buttons: {
          import: 'Importar Contactos',
          add: 'Agregar Contacto',
        },
        table: {
          name: 'Nombre',
          whatsapp: 'WhatsApp',
          email: 'Correo Electrónico',
          actions: 'Acciones',
        },
        loading: 'Cargando contactos...',
        noData: 'Sin contactos.',
      },
      contactModal: {
        title: {
          add: 'Agregar contacto',
          edit: 'Editar contacto',
        },
        form: {
          mainInfo: 'Detalles del contacto',
          extraInfo: 'Información adicional',
          name: 'Nombre',
          number: 'Número de Whatsapp',
          email: 'Correo Electrónico',
          extraName: 'Nombre del Campo',
          extraValue: 'Valor',
        },
        buttons: {
          addExtraInfo: 'Agregar información',
          okAdd: 'Agregar',
          okEdit: 'Guardar',
          cancel: 'Cancelar',
        },
        success: 'Contacto guardado satisfactoriamente.',
      },
      quickAnswersModal: {
        title: {
          add: 'Agregar respuesta rápida',
          edit: 'Editar respuesta rápida',
        },
        form: {
          shortcut: 'Atajo',
          message: 'Respuesta rápida',
        },
        buttons: {
          okAdd: 'Agregar',
          okEdit: 'Guardar',
          cancel: 'Cancelar',
        },
        success: 'Respuesta rápida guardada correctamente.',
      },
      queueModal: {
        title: {
          add: 'Agregar cola',
          edit: 'Editar cola',
        },
        form: {
          name: 'Nombre',
          color: 'Color',
          greetingMessage: 'Mensaje de saludo',
        },
        buttons: {
          okAdd: 'Añadir',
          okEdit: 'Ahorrar',
          cancel: 'Cancelar',
        },
        toasts: {
          success: {
            created: 'Cola guardada con éxito',
            updated: 'Cola actualizada com sucesso',
            deleted: 'Cola borrada con éxito',
          },
        },
      },
      userModal: {
        title: {
          add: 'Agregar usuario',
          edit: 'Editar usuario',
        },
        form: {
          name: 'Nombre',
          email: 'Correo Electrónico',
          password: 'Contraseña',
          profile: 'Perfil',
        },
        buttons: {
          okAdd: 'Agregar',
          okEdit: 'Guardar',
          cancel: 'Cancelar',
        },
        success: 'Usuario guardado satisfactoriamente.',
      },
      chat: {
        noTicketMessage: 'Selecciona un ticket para empezar a chatear.',
      },
      ticketsManager: {
        buttons: {
          newTicket: 'Nuevo',
        },
      },
      ticketsQueueSelect: {
        placeholder: 'Linhas',
      },
      tickets: {
        toasts: {
          deleted: 'El ticket ha sido borrado.',
        },
        notification: {
          message: 'Mensaje de',
        },
        tabs: {
          open: { title: 'Bandeja' },
          closed: { title: 'Resueltos', badge: 'Resuelto' },
          search: { title: 'Buscar' },
        },
        search: {
          placeholder: 'Buscar tickets y mensajes.',
        },
        buttons: {
          showAll: 'Todos',
        },
      },
      transferTicketModal: {
        title: 'Transferir Ticket',
        fieldLabel: 'Escriba para buscar usuarios',
        noOptions: 'No se encontraron usuarios con ese nombre',
        buttons: {
          ok: 'Transferir',
          cancel: 'Cancelar',
        },
      },
      ticketsList: {
        pendingHeader: 'Cola',
        assignedHeader: 'Trabajando en',
        noTicketsTitle: '¡Nada acá!',
        noTicketsMessage: 'No se encontraron tickets con este estado o término de búsqueda',
        buttons: {
          accept: 'Acceptar',
        },
      },
      newTicketModal: {
        title: 'Crear Ticket',
        fieldLabel: 'Escribe para buscar un contacto',
        add: 'Añadir',
        buttons: {
          ok: 'Guardar',
          cancel: 'Cancelar',
        },
      },
      mainDrawer: {
        listItems: {
          home: 'Home',
          connections: 'Conexiones',
          tickets: 'Tickets',
          contacts: 'Contactos',
          quickAnswers: 'Respuestas rápidas',
          queues: 'Linhas',
          users: 'Usuarios',
          settings: 'Configuración',
          main: 'Itens principales',
          administration: 'Administración',
        },
        appBar: {
          user: {
            profile: 'Perfil',
            logout: 'Cerrar Sesión',
          },
        },
      },
      notifications: {
        noTickets: 'Sin notificaciones.',
      },
      queues: {
        title: 'Linhas',
        table: {
          name: 'Nombre',
          color: 'Color',
          greeting: 'Mensaje de saludo',
          actions: 'Comportamiento',
        },
        buttons: {
          add: 'Agregar cola',
        },
        confirmationModal: {
          deleteTitle: 'Eliminar',
          deleteMessage:
            '¿Estás seguro? ¡Esta acción no se puede revertir! Los tickets en esa cola seguirán existiendo, pero ya no tendrán ninguna cola asignada.',
        },
        loading: 'Cargando Linhas...',
        noData: 'Sin linhas.',
      },
      queueSelect: {
        inputLabel: 'Linhas',
      },
      quickAnswers: {
        title: 'Respuestas rápidas',
        table: {
          shortcut: 'Atajo',
          message: 'Respuesta rápida',
          actions: 'Acciones',
        },
        buttons: {
          add: 'Agregar respuesta rápida',
        },
        toasts: {
          deleted: 'Respuesta rápida eliminada correctamente',
        },
        searchPlaceholder: 'Buscar ...',
        confirmationModal: {
          deleteTitle: '¿Está seguro de que desea eliminar esta respuesta rápida?',
          deleteMessage: 'Esta acción no se puede deshacer.',
        },
      },
      users: {
        title: 'Usuarios',
        table: {
          name: 'Nombre',
          email: 'Correo Electrónico',
          profile: 'Perfil',
          actions: 'Acciones',
        },
        buttons: {
          add: 'Agregar usuario',
        },
        toasts: {
          deleted: 'Usuario borrado satisfactoriamente.',
        },
        confirmationModal: {
          deleteTitle: 'Borrar',
          deleteMessage:
            'Toda la información del usuario se perderá. Los tickets abiertos de los usuarios se moverán a la cola.',
        },
      },
      messagesList: {
        header: {
          assignedTo: 'Asignado a:',
          buttons: {
            return: 'Devolver',
            resolve: 'Resolver',
            reopen: 'Reabrir',
            accept: 'Aceptar',
          },
        },
      },
      messagesInput: {
        placeholderOpen: 'Escribe un mensaje',
        placeholderClosed: 'Vuelva a abrir o acepte este ticket para enviar un mensaje.',
        signMessage: 'Firmar',
      },
      contactDrawer: {
        header: 'Detalles del contacto',
        buttons: {
          edit: 'Editar contacto',
        },
        extraInfo: 'Otra información',
      },
      ticketOptionsMenu: {
        delete: 'Borrar',
        transfer: 'Transferir',
        confirmationModal: {
          title: '¿Borrar ticket #',
          titleFrom: 'del contacto ',
          message:
            '¡Atención! Todos los mensajes Todos los mensajes relacionados con el ticket se perderán.',
        },
        buttons: {
          delete: 'Borrar',
          cancel: 'Cancelar',
        },
      },
      confirmationModal: {
        buttons: {
          confirm: 'Ok',
          cancel: 'Cancelar',
        },
      },
      messageOptionsMenu: {
        delete: 'Borrar',
        reply: 'Responder',
        confirmationModal: {
          title: '¿Borrar mensaje?',
          message: 'Esta acción no puede ser revertida.',
        },
      },
      form: {
        validations: {
          userName: {
            required: 'El nombre es requerido.',
            minLength: `El nombre debe contener al menos ${rules.userNameMinLength} caracteres.`,
            maxLength: `El nombre debe contener al menos ${rules.userNameMaxLength} caracteres.`,
            isValid: 'El nombre debe contener solo letras y espacios.',
          },
          email: {
            required: 'El correo electrónica es requerido.',
            isValid: 'Por favor, introduzca un correo electrónica válido.',
          },
          password: {
            required: 'La contrasena es requerida.',
            minLength: `La contrasena debe contener al menos ${rules.passwMinLength} caracteres.`,
            maxLength: `La contrasena debe contener en máximo ${rules.passwMaxLength} caracteres.`,
            isValid:
              'La contrasena debe contener: mayúscula, minúscula, número y carácter especial.',
            samePassword: 'La nueva contrasena no puede ser la misma que la antigua.',
          },
        },
        optional: '*Opcional',
      },
      backendErrors: backMessages,
    },
  },
};

export { messages };
