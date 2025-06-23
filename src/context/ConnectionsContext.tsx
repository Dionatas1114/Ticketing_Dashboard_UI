import React from 'react';

import useConnections, { UseConnectionsReturn } from '../hooks/useConnections';

const initialValue: UseConnectionsReturn = {
  connections: [],
  loading: true,
  hasMore: false,
};

const ConnectionsContext = React.createContext(initialValue);

const ConnectionsProvider = ({ children }: ChildrenProps) => {
  const { connections, loading, hasMore } = useConnections();

  return (
    <ConnectionsContext.Provider value={{ connections, loading, hasMore }} children={children} />
  );
};

export { ConnectionsContext, ConnectionsProvider };
