import React, { createContext, useState, ReactNode } from 'react';

interface MenuItemSelectedContextType {
  itemSelected: string;
  setItemSelected: React.Dispatch<React.SetStateAction<string>>;
}

const MenuItemSelectedContext = createContext<MenuItemSelectedContextType | undefined>(undefined);

interface ItemSelectedProviderProps {
  children: ReactNode;
}

const homePage = 'Home';

export const MenuItemSelectedProvider = ({ children }: ItemSelectedProviderProps) => {
  const [itemSelected, setItemSelected] = useState<string>(homePage);

  return (
    <MenuItemSelectedContext.Provider value={{ itemSelected, setItemSelected }}>
      {children}
    </MenuItemSelectedContext.Provider>
  );
};

export default MenuItemSelectedContext;
