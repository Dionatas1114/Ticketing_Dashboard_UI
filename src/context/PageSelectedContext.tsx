import React, { createContext, useState } from 'react';

type PageSelectedContextType = {
  pageSelected: string;
  setPageSelected: React.Dispatch<React.SetStateAction<string>>;
};

const PageSelectedContext = createContext<PageSelectedContextType | undefined>(undefined);

const homePage = 'home';

const usePageSelectedContext = () => {
  const context = React.useContext(PageSelectedContext);
  if (context === undefined) {
    throw new Error('usePageSelectedContext must be used within a PageSelectedProvider');
  }
  return context;
};

export const PageSelectedProvider = ({ children }: ChildrenProps) => {
  const [pageSelected, setPageSelected] = useState<string>(homePage);

  return (
    <PageSelectedContext.Provider value={{ pageSelected, setPageSelected }}>
      {children}
    </PageSelectedContext.Provider>
  );
};

export { PageSelectedContext, usePageSelectedContext };
