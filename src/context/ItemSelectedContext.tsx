import React, { createContext, useState, ReactNode } from 'react';

interface ItemSelectedContextType {
  itemSelected: string;
  setItemSelected: React.Dispatch<React.SetStateAction<string>>;
}

const ItemSelectedContext = createContext<ItemSelectedContextType | undefined>(undefined);

interface ItemSelectedProviderProps {
  children: ReactNode;
}

const homePage = 'Home';

export const ItemSelectedProvider = ({ children }: ItemSelectedProviderProps) => {
  const [itemSelected, setItemSelected] = useState<string>(homePage);

  return (
    <ItemSelectedContext.Provider value={{ itemSelected, setItemSelected }}>
      {children}
    </ItemSelectedContext.Provider>
  );
};

export default ItemSelectedContext;
