import React from 'react';
import useConnections from '../hooks/useConnections';

interface ConnectionsContextType {
  connections: any[];
  loading: boolean;
  hasMore: boolean;
  // addConnection: (connectionData: any) => Promise<void>;
  updateConnection: (whatsAppId: string, whatsAppData: any) => Promise<void>;
  deleteConnection: (whatsAppId: string) => Promise<void>;
}

const ConnectionsContext = React.createContext<ConnectionsContextType | undefined>(undefined);

const useConnectionContext = () => {
  const context = React.useContext(ConnectionsContext);
  if (context === undefined) {
    throw new Error('useConnectionContext must be used within a ConnectionsProvider');
  }
  return context;
};

const ConnectionsProvider = ({ children }: ChildrenProps) => {
  const { connections, loading, hasMore, updateConnection, deleteConnection } = useConnections();

  return (
    <ConnectionsContext.Provider
      value={{ connections, loading, hasMore, updateConnection, deleteConnection }}
    >
      {children}
    </ConnectionsContext.Provider>
  );
};

export { ConnectionsProvider, useConnectionContext };
