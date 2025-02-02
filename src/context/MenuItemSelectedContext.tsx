import React, { createContext, useState, ReactNode } from 'react';

type MenuItemSelectedContextType = {
  itemSelected: string;
  setItemSelected: React.Dispatch<React.SetStateAction<string>>;
};

const MenuItemSelectedContext = createContext<MenuItemSelectedContextType | undefined>(undefined);

const homePage = 'Home';

export const MenuItemSelectedProvider = ({ children }: ChildrenProps) => {
  const [itemSelected, setItemSelected] = useState<string>(homePage);

  return (
    <MenuItemSelectedContext.Provider value={{ itemSelected, setItemSelected }}>
      {children}
    </MenuItemSelectedContext.Provider>
  );
};

export default MenuItemSelectedContext;
