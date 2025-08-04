import { messages as backMessages } from '../backend/pt';
import rules from '../../../validations/rules';

const messages = {
  pt: {
    translations: {
      signup: {
        title: 'Cadastre-se',
        toasts: {
          success: 'Usuário criado com sucesso! Faça o login',
          fail: 'Erro ao criar usuário. Verifique os dados informados',
        },
        form: {
          userName: {
            title: 'Nome',
            placeholder: 'Nome Completo',
          },
          email: {
            title: 'Email',
            placeholder: 'seu@email',
          },
          password: 'Senha',
          allowExtraEmails: 'Quero receber atualizações por email',
          or: 'Ou',
          google: 'Entrar com Google',
          facebook: 'Entrar com Facebook',
          alreadyHaveAccount: 'Já tem uma conta?',
        },
        buttons: {
          submit: 'Cadastrar',
          loginLink: 'Entre',
        },
      },
      signin: {
        title: 'Entre',
        form: {
          email: {
            title: 'Email',
            placeholder: 'seu@email',
          },
          password: 'Senha',
          rememberMe: 'Lembrar-me',
          or: 'Ou',
          google: 'Entrar com Google',
          facebook: 'Entrar com Facebook',
          noAccount: 'Não tem uma conta?',
        },
        buttons: {
          submit: 'Entrar',
          registerLink: 'Cadastre-se!',
          forgotPassword: 'Esqueceu a senha?',
        },
      },
      auth: {
        toasts: {
          success: 'Login efetuado com sucesso!',
          fail: 'Erro ao efetuar login. Verifique os dados informados.',
        },
      },
      home: {
        title: 'Home',
        charts: {
          perDay: {
            title: 'Tickets hoje: ',
          },
        },
      },
      connections: {
        title: 'Conexões',
        toasts: {
          deleted: 'Conexão com o WhatsApp excluída com sucesso!',
        },
        confirmationModal: {
          deleteTitle: 'Deletar',
          deleteMessage: 'Você tem certeza? Essa ação não pode ser revertida.',
          disconnectTitle: 'Desconectar',
          disconnectMessage: 'Tem certeza? Você precisará ler o QR Code novamente.',
        },
        qrcodeModal: {
          title: 'Leia o QR Code',
          generateQrCode: 'Clique para gerar o QR Code',
          close: 'Fechar',
        },
        buttons: {
          add: 'Adicionar Conexão do Whatsapp',
          disconnect: 'desconectar',
          tryAgain: 'Tentar novamente',
          qrcode: 'QR CODE',
          newQr: 'Novo QR CODE',
          connecting: 'Conectando',
        },
        toolTips: {
          disconnected: {
            title: 'Falha ao iniciar sessão do WhatsApp',
            content:
              'Certifique-se de que seu celular esteja conectado à internet e tente novamente, ou solicite um novo QR Code',
          },
          connected: {
            title: 'Conexão estabelecida!',
          },
          timeout: {
            title: 'A conexão com o celular foi perdida',
            content:
              "Certifique-se de que seu celular esteja conectado à internet e o WhatsApp esteja aberto, ou clique no botão 'Desconectar' para obter um novo QR Code",
          },
        },
        table: {
          name: 'Nome',
          status: 'Status',
          lastUpdate: 'Última atualização',
          default: 'Padrão',
          actions: 'Ações',
          session: 'Sessão',
        },
      },
      whatsappModal: {
        title: {
          add: 'Adicionar WhatsApp',
          edit: 'Editar WhatsApp',
        },
        form: {
          name: 'Nome',
          default: 'Padrão',
          farewellMessage: 'Mensagem de despedida',
        },
        buttons: {
          okAdd: 'Adicionar',
          okEdit: 'Salvar',
          cancel: 'Cancelar',
        },
        success: 'WhatsApp salvo com sucesso.',
      },
      contacts: {
        title: 'Contatos',
        toasts: {
          deleted: 'Contato excluído com sucesso!',
        },
        searchPlaceholder: 'Pesquisar...',
        confirmationModal: {
          deleteTitle: 'Deletar ',
          importTitlte: 'Importar contatos',
          deleteMessage:
            'Tem certeza que deseja deletar este contato? Todos os tickets relacionados serão perdidos.',
          importMessage: 'Deseja importas todos os contatos do telefone?',
        },
        buttons: {
          import: 'Importar Contatos',
          add: 'Adicionar Contato',
        },
        table: {
          profile: 'Perfil',
          name: 'Nome',
          whatsapp: 'WhatsApp',
          email: 'Email',
          actions: 'Ações',
        },
        loading: 'Carregando contatos...',
        noData: 'Nenhum contato encontrado.',
      },
      contactModal: {
        title: {
          add: 'Adicionar contato',
          edit: 'Editar contato',
        },
        form: {
          mainInfo: 'Dados do contato',
          extraInfo: 'Informações adicionais',
          name: 'Nome',
          number: 'Número do Whatsapp',
          email: 'Email',
          extraName: 'Nome do campo',
          extraValue: 'Valor',
        },
        buttons: {
          addExtraInfo: 'Adicionar informação',
          okAdd: 'Adicionar',
          okEdit: 'Salvar',
          cancel: 'Cancelar',
        },
        success: 'Contato salvo com sucesso.',
      },
      quickAnswersModal: {
        title: {
          add: 'Adicionar Resposta Rápida',
          edit: 'Editar Resposta Rápida',
        },
        form: {
          shortcut: 'Atalho',
          message: 'Resposta Rápida',
        },
        buttons: {
          okAdd: 'Adicionar',
          okEdit: 'Salvar',
          cancel: 'Cancelar',
        },
        success: 'Resposta Rápida salva com sucesso.',
      },
      queueModal: {
        title: {
          add: 'Adicionar fila',
          edit: 'Editar fila',
        },
        form: {
          name: 'Nome',
          color: 'Cor',
          greetingMessage: 'Mensagem de saudação',
        },
        buttons: {
          okAdd: 'Adicionar',
          okEdit: 'Salvar',
          cancel: 'Cancelar',
        },
        toasts: {
          success: {
            created: 'Fila criada com sucesso',
            updated: 'Fila atualizada com sucesso',
            deleted: 'Fila deletada com sucesso',
          },
        },
      },
      userModal: {
        title: {
          add: 'Adicionar usuário',
          edit: 'Editar usuário',
        },
        form: {
          name: 'Nome',
          email: 'Email',
          password: 'Senha',
          profile: 'Perfil',
        },
        buttons: {
          okAdd: 'Adicionar',
          okEdit: 'Salvar',
          cancel: 'Cancelar',
        },
        success: 'Usuário salvo com sucesso.',
      },
      chat: {
        noTicketMessage: 'Selecione um ticket para começar a conversar.',
      },
      ticketsManager: {
        buttons: {
          newTicket: 'Novo',
        },
      },
      ticketsQueueSelect: {
        placeholder: 'Filas',
      },
      tickets: {
        toasts: {
          deleted: 'O ticket foi deletado.',
        },
        notification: {
          message: 'Mensagem de',
        },
        tabs: {
          open: { title: 'Inbox' },
          closed: { title: 'Resolvidos', badge: 'Resolvido' },
          search: { title: 'Busca' },
        },
        search: {
          placeholder: 'Buscar tickets e mensagens',
        },
        buttons: {
          showAll: 'Todos',
        },
      },
      transferTicketModal: {
        title: 'Transferir Ticket',
        fieldLabel: 'Digite para buscar usuários',
        noOptions: 'Nenhum usuário encontrado com esse nome',
        buttons: {
          ok: 'Transferir',
          cancel: 'Cancelar',
        },
      },
      ticketsList: {
        pendingHeader: 'Aguardando',
        assignedHeader: 'Atendendo',
        noTicketsTitle: 'Nada aqui!',
        noTicketsMessage: 'Nenhum ticket encontrado com esse status ou termo pesquisado',
        buttons: {
          accept: 'Aceitar',
        },
      },
      newTicketModal: {
        title: 'Criar Ticket',
        fieldLabel: 'Digite para pesquisar o contato',
        add: 'Adicionar',
        buttons: {
          ok: 'Salvar',
          cancel: 'Cancelar',
        },
      },
      mainDrawer: {
        listItems: {
          home: 'Home',
          connections: 'Conexões',
          tickets: 'Tickets',
          contacts: 'Contatos',
          quickAnswers: 'Respostas Rápidas',
          queues: 'Filas',
          users: 'Usuários',
          settings: 'Configurações',
          main: 'Itens principais',
          administration: 'Administração',
        },
        appBar: {
          user: {
            profile: 'Perfil',
            logout: 'Sair',
          },
        },
      },
      notifications: {
        noTickets: 'Nenhuma notificação.',
      },
      queues: {
        title: 'Filas',
        table: {
          name: 'Nome',
          color: 'Cor',
          greeting: 'Mensagem de saudação',
          actions: 'Ações',
        },
        buttons: {
          add: 'Adicionar fila',
        },
        confirmationModal: {
          deleteTitle: 'Excluir',
          deleteMessage:
            'Você tem certeza? Essa ação não pode ser revertida! Os tickets dessa fila continuarão existindo, mas não terão mais nenhuma fila atribuída.',
        },
        loading: 'Carregando filas...',
        noData: 'Nenhuma fila encontrada.',
      },
      queueSelect: {
        inputLabel: 'Filas',
      },
      quickAnswers: {
        title: 'Respostas Rápidas',
        table: {
          shortcut: 'Atalho',
          message: 'Resposta Rápida',
          actions: 'Ações',
        },
        buttons: {
          add: 'Adicionar Resposta Rápida',
        },
        toasts: {
          deleted: 'Resposta Rápida excluída com sucesso.',
        },
        searchPlaceholder: 'Pesquisar...',
        confirmationModal: {
          deleteTitle: 'Você tem certeza que quer excluir esta Resposta Rápida: ',
          deleteMessage: 'Esta ação não pode ser revertida.',
        },
      },
      users: {
        title: 'Usuários',
        table: {
          name: 'Nome',
          email: 'Email',
          profile: 'Perfil',
          actions: 'Ações',
        },
        buttons: {
          add: 'Adicionar usuário',
        },
        toasts: {
          deleted: 'Usuário excluído com sucesso.',
        },
        confirmationModal: {
          deleteTitle: 'Excluir',
          deleteMessage:
            'Todos os dados do usuário serão perdidos. Os tickets abertos deste usuário serão movidos para a fila.',
        },
      },
      messagesList: {
        header: {
          assignedTo: 'Atribuído à:',
          buttons: {
            return: 'Retornar',
            resolve: 'Resolver',
            reopen: 'Reabrir',
            accept: 'Aceitar',
          },
        },
      },
      messagesInput: {
        placeholderOpen: 'Digite uma mensagem',
        placeholderClosed: 'Reabra ou aceite esse ticket para enviar uma mensagem.',
        signMessage: 'Assinar',
      },
      contactDrawer: {
        header: 'Dados do contato',
        buttons: {
          edit: 'Editar contato',
        },
        extraInfo: 'Outras informações',
      },
      ticketOptionsMenu: {
        delete: 'Deletar',
        transfer: 'Transferir',
        confirmationModal: {
          title: 'Deletar o ticket do contato',
          message: 'Atenção! Todas as mensagens relacionadas ao ticket serão perdidas.',
        },
        buttons: {
          delete: 'Excluir',
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
        delete: 'Deletar',
        reply: 'Responder',
        confirmationModal: {
          title: 'Apagar mensagem?',
          message: 'Esta ação não pode ser revertida.',
        },
      },
      form: {
        validations: {
          userName: {
            required: 'O nome é obrigatório.',
            minLength: `O nome deve conter no mínimo ${rules.userNameMinLength} caracteres.`,
            maxLength: `O nome deve conter no máximo ${rules.userNameMaxLength} caracteres.`,
            isValid: 'O nome deve conter apenas letras e espaços.',
          },
          email: {
            required: 'O e-mail é obrigatório.',
            isValid: 'Informe um e-mail válido.',
          },
          password: {
            required: 'A senha é obrigatória.',
            minLength: `A senha deve conter no mínimo ${rules.passwMinLength} caracteres.`,
            maxLength: `A senha deve conter no máximo ${rules.passwMaxLength} caracteres.`,
            isValid: 'A senha deve conter: maiúscula, minúscula, número e caractere especial.',
            samePassword: 'A nova senha não pode ser igual à senha antiga.',
          },
        },
        optional: '*Opcional',
      },
      backendErrors: backMessages,
    },
  },
};

export { messages };
