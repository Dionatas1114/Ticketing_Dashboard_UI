import { messages as backMessages } from '../backend/en';
import rules from '../../../validations/rules';

const messages = {
  en: {
    translations: {
      signup: {
        title: 'Sign up',
        toasts: {
          success: 'User created successfully! Please login!',
          fail: 'Error creating user. Check the reported data.',
        },
        form: {
          userName: {
            title: 'Name',
            placeholder: 'Full Name',
          },
          email: {
            title: 'Email',
            placeholder: 'your@email',
          },
          password: 'Password',
          allowExtraEmails: 'I want to receive updates via email',
          or: 'Or',
          google: 'Sign in with Google',
          facebook: 'Sign in with Facebook',
          alreadyHaveAccount: 'Already have an account?',
        },
        buttons: {
          submit: 'Register',
          loginLink: 'Sign in',
        },
      },
      signin: {
        title: 'Sign in',
        form: {
          email: {
            title: 'Email',
            placeholder: 'your@email',
          },
          password: 'Password',
          rememberMe: 'Remember me',
          or: 'Or',
          google: 'Enter with Google',
          facebook: 'Enter with Facebook',
          noAccount: 'Don' + "'" + 't have an account?',
        },
        buttons: {
          submit: 'Enter',
          registerLink: 'Register',
          forgotPassword: 'Forgot your password?',
        },
      },
      auth: {
        toasts: {
          success: 'You are logged in!',
          fail: 'Error logging in. Check your credentials.',
        },
      },
      home: {
        title: 'Home',
        charts: {
          perDay: {
            title: 'Tickets today: ',
          },
        },
      },
      connections: {
        title: 'Connections',
        toasts: {
          deleted: 'WhatsApp connection deleted sucessfully!',
        },
        confirmationModal: {
          deleteTitle: 'Delete',
          deleteMessage: 'Are you sure? It cannot be reverted.',
          disconnectTitle: 'Disconnect',
          disconnectMessage: "Are you sure? You'll need to read QR Code again.",
        },
        qrcodeModal: {
          title: 'Scan QR Code',
          generateQrCode: 'Click to generate QR Code',
          close: 'Close',
        },
        buttons: {
          add: 'Add WhatsApp Connection',
          disconnect: 'Disconnect',
          tryAgain: 'Try Again',
          qrcode: 'QR CODE',
          newQr: 'New QR CODE',
          connecting: 'Connectiing',
        },
        toolTips: {
          disconnected: {
            title: 'Failed to start WhatsApp session',
            content:
              'Make sure your cell phone is connected to the internet and try again, or request a new QR Code',
          },
          connected: {
            title: 'Connection established',
          },
          timeout: {
            title: 'Connection with cell phone has been lost',
            content:
              "Make sure your cell phone is connected to the internet and WhatsApp is open, or click on 'Disconnect' button to get a new QRcode",
          },
        },
        table: {
          name: 'Name',
          status: 'Status',
          lastUpdate: 'Last Update',
          default: 'Default',
          actions: 'Actions',
          session: 'Session',
        },
      },
      whatsappModal: {
        title: {
          add: 'Add WhatsApp',
          edit: 'Edit WhatsApp',
        },
        form: {
          name: 'Name',
          default: 'Default',
          farewellMessage: 'Farewell message',
        },
        buttons: {
          okAdd: 'Add',
          okEdit: 'Save',
          cancel: 'Cancel',
        },
        success: 'WhatsApp saved successfully.',
      },
      contacts: {
        title: 'Contacts',
        toasts: {
          deleted: 'Contact deleted sucessfully!',
        },
        searchPlaceholder: 'Search ...',
        confirmationModal: {
          deleteTitle: 'Delete',
          importTitlte: 'Import contacts',
          deleteMessage:
            'Are you sure you want to delete this contact? All related tickets will be lost.',
          importMessage: 'Do you want to import all contacts from the phone?',
        },
        buttons: {
          import: 'Import Contacts',
          add: 'Add Contact',
        },
        table: {
          name: 'Name',
          whatsapp: 'WhatsApp',
          email: 'Email',
          actions: 'Actions',
        },
        loading: 'Loading Contacts...',
        noData: 'No contacts.',
      },
      contactModal: {
        title: {
          add: 'Add contact',
          edit: 'Edit contact',
        },
        form: {
          mainInfo: 'Contact details',
          extraInfo: 'Additional information',
          name: 'Name',
          number: 'Whatsapp number',
          email: 'Email',
          extraName: 'Field name',
          extraValue: 'Value',
        },
        buttons: {
          addExtraInfo: 'Add information',
          okAdd: 'Add',
          okEdit: 'Save',
          cancel: 'Cancel',
        },
        success: 'Contact saved successfully.',
      },
      quickAnswersModal: {
        title: {
          add: 'Add Quick Reply',
          edit: 'Edit Quick Answer',
        },
        form: {
          shortcut: 'Shortcut',
          message: 'Quick Reply',
        },
        buttons: {
          okAdd: 'Add',
          okEdit: 'Save',
          cancel: 'Cancel',
        },
        success: 'Quick Reply saved successfully.',
      },
      queueModal: {
        title: {
          add: 'Add queue',
          edit: 'Edit queue',
        },
        form: {
          name: 'Name',
          color: 'Color',
          greetingMessage: 'Greeting Message',
        },
        buttons: {
          okAdd: 'Add',
          okEdit: 'Save',
          cancel: 'Cancel',
        },
        toasts: {
          success: {
            created: 'Queue created successfully',
            updated: 'Queue updated successfully',
            deleted: 'Queue deleted successfully',
          },
        },
      },
      userModal: {
        title: {
          add: 'Add user',
          edit: 'Edit user',
        },
        form: {
          name: 'Name',
          email: 'Email',
          password: 'Password',
          profile: 'Profile',
        },
        buttons: {
          okAdd: 'Add',
          okEdit: 'Save',
          cancel: 'Cancel',
        },
        success: 'User saved successfully.',
      },
      chat: {
        noTicketMessage: 'Select a ticket to start chatting.',
      },
      ticketsManager: {
        buttons: {
          newTicket: 'New',
        },
      },
      ticketsQueueSelect: {
        placeholder: 'Queues',
      },
      tickets: {
        toasts: {
          deleted: 'Ticket deleted sucessfully.',
        },
        notification: {
          message: 'Message from',
        },
        tabs: {
          open: { title: 'Inbox' },
          closed: { title: 'Resolved', badge: 'Resolved' },
          search: { title: 'Search' },
        },
        search: {
          placeholder: 'Search tickets and messages.',
        },
        buttons: {
          showAll: 'All',
        },
      },
      transferTicketModal: {
        title: 'Transfer Ticket',
        fieldLabel: 'Type to search for users',
        noOptions: 'No user found with this name',
        buttons: {
          ok: 'Transfer',
          cancel: 'Cancel',
        },
      },
      ticketsList: {
        pendingHeader: 'Queue',
        assignedHeader: 'Working on',
        noTicketsTitle: 'Nothing here!',
        noTicketsMessage: 'No tickets found with this status or search term.',
        buttons: {
          accept: 'Accept',
        },
      },
      newTicketModal: {
        title: 'Create Ticket',
        fieldLabel: 'Type to search for a contact',
        add: 'Add',
        buttons: {
          ok: 'Save',
          cancel: 'Cancel',
        },
      },
      mainDrawer: {
        listItems: {
          dashboard: 'Dashboard',
          connections: 'Connections',
          tickets: 'Tickets',
          contacts: 'Contacts',
          quickAnswers: 'Quick Answers',
          queues: 'Queues',
          administration: 'Administration',
          users: 'Users',
        },
        appBar: {
          user: {
            profile: 'Profile',
            logout: 'Logout',
          },
        },
      },
      notifications: {
        noTickets: 'No notifications.',
      },
      queues: {
        title: 'Queues',
        table: {
          name: 'Name',
          color: 'Color',
          greeting: 'Greeting message',
          actions: 'Actions',
        },
        buttons: {
          add: 'Add queue',
        },
        confirmationModal: {
          deleteTitle: 'Delete',
          deleteMessage:
            'Are you sure? It cannot be reverted! Tickets in this queue will still exist, but will not have any queues assigned.',
        },
        loading: 'Loading queues...',
        noData: 'No queues found.',
      },
      queueSelect: {
        inputLabel: 'Queues',
      },
      quickAnswers: {
        title: 'Quick Answers',
        table: {
          shortcut: 'Shortcut',
          message: 'Quick Reply',
          actions: 'Actions',
        },
        buttons: {
          add: 'Add Quick Reply',
        },
        toasts: {
          deleted: 'Quick Reply deleted successfully.',
        },
        searchPlaceholder: 'Search...',
        confirmationModal: {
          deleteTitle: 'Are you sure you want to delete this Quick Reply: ',
          deleteMessage: 'This action cannot be undone.',
        },
      },
      users: {
        title: 'Users',
        table: {
          name: 'Name',
          email: 'Email',
          profile: 'Profile',
          actions: 'Actions',
        },
        buttons: {
          add: 'Add user',
        },
        toasts: {
          deleted: 'User deleted sucessfully.',
        },
        confirmationModal: {
          deleteTitle: 'Delete',
          deleteMessage: "All user data will be lost. Users' open tickets will be moved to queue.",
        },
      },
      messagesList: {
        header: {
          assignedTo: 'Assigned to:',
          buttons: {
            return: 'Return',
            resolve: 'Resolve',
            reopen: 'Reopen',
            accept: 'Accept',
          },
        },
      },
      messagesInput: {
        placeholderOpen: 'Type a message',
        placeholderClosed: 'Reopen or accept this ticket to send a message.',
        signMessage: 'Sign',
      },
      contactDrawer: {
        header: 'Contact details',
        buttons: {
          edit: 'Edit contact',
        },
        extraInfo: 'Other information',
      },
      ticketOptionsMenu: {
        delete: 'Delete',
        transfer: 'Transfer',
        confirmationModal: {
          title: 'Delete ticket #',
          titleFrom: 'from contact ',
          message: "Attention! All ticket's related messages will be lost.",
        },
        buttons: {
          delete: 'Delete',
          cancel: 'Cancel',
        },
      },
      confirmationModal: {
        buttons: {
          confirm: 'Ok',
          cancel: 'Cancel',
        },
      },
      messageOptionsMenu: {
        delete: 'Delete',
        reply: 'Reply',
        confirmationModal: {
          title: 'Delete message?',
          message: 'This action cannot be reverted.',
        },
      },
      form: {
        validations: {
          userName: {
            required: 'The name is required.',
            minLength: `The name must contain at least ${rules.userNameMinLength} characters.`,
            maxLength: `The name must contain at most ${rules.userNameMaxLength} characters.`,
            isValid: 'The name must contain only letters and spaces.',
          },
          email: {
            required: 'The email is required.',
            isValid: 'Please enter a valid email.',
          },
          password: {
            required: 'The password is required.',
            minLength: `The password must contain at least ${rules.passwMinLength} characters.`,
            maxLength: `The password must contain at most ${rules.passwMaxLength} characters.`,
            isValid:
              'The password must contain at least one uppercase letter, one lowercase letter, one number and one special character.',
            samePassword: 'The new password cannot be the same as the old one.',
          },
        },
        optional: '*Optional',
      },
      backendErrors: backMessages,
    },
  },
};

export { messages };
